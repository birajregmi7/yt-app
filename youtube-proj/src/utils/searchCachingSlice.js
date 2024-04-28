import { createSlice } from "@reduxjs/toolkit";

const searchCachingSlice = createSlice({
    name: 'searchCache',
    initialState: {
        dataSaved: {

        }
    },
    reducers: {
        onAddData: (state, action) => {
            state.dataSaved = {...state.dataSaved,...action.payload}
        }
    }
})
export const { onAddData } = searchCachingSlice.actions
export default searchCachingSlice.reducer