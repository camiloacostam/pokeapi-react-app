import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface ISearchFilterSlice {
  searchFilter: string
}

const initialState: ISearchFilterSlice = {
  searchFilter: ''
}

export const searchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload
    }
  }
})

export const { setSearchFilter } = searchFilterSlice.actions
export const selectSearchFilter = (state: RootState) =>
  state.searchFilter.searchFilter
export default searchFilterSlice.reducer
