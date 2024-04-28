import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const toggleSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isMenuOpen : true,
        isShowing:false
    },
    reducers: {
        toggleAction: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        toggleVideoPage: (state)=>{
            state.isMenuOpen = false
        },
        toggleSuggestion: (state, action )=>{
            state.isShowing = action.payload
        }

    }
})

export const { toggleAction, toggleVideoPage, toggleSuggestion } = toggleSlice.actions
export default toggleSlice.reducer