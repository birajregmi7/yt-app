import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './toggleSlice'
import searchCachingSlice from './searchCachingSlice'
import liveStreamSlice from './liveStreamSlice'
import searchDataSlice from './searchDataSlice'
const store = configureStore({
    reducer: {
        sidebar: toggleSlice,
        searchCache: searchCachingSlice,
        live: liveStreamSlice,
        searchData: searchDataSlice
    }
})
export default store 