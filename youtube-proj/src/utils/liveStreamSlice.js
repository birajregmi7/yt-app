import { createSlice } from '@reduxjs/toolkit'
import { redirect } from 'react-router-dom'
const liveStreamSlice = createSlice({
    name: 'live',
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.splice(10, 1)
            state.messages.unshift(action.payload)
        },
        addComment: (state,action)=>{
            state.messages.unshift(action.payload)
        }
    }
})
export default liveStreamSlice.reducer
export const { addMessages , addComment} = liveStreamSlice.actions