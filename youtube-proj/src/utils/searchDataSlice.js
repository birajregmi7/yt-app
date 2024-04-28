import { createSlice } from "@reduxjs/toolkit"
const searchDataSlicing = createSlice({
    name: 'searchData',
    initialState: {
        searched_data_api: {
            
        }

        
    },

    reducers: {
        updateSearchedData: (state, action) => {
            state.searched_data_api = action.payload
        }
    }
})
export const { updateSearchedData } = searchDataSlicing.actions
export default searchDataSlicing.reducer