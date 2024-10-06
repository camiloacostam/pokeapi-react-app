import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { EFilterByOptions } from './enums/filter'

interface IFilterBySlice {
  filterBy: EFilterByOptions
}

const initialState: IFilterBySlice = {
  filterBy: EFilterByOptions.NAME
}

export const filterBySlice = createSlice({
  name: 'filterBy',
  initialState,
  reducers: {
    setFilterBy: (state, action: PayloadAction<EFilterByOptions>) => {
      state.filterBy = action.payload
    }
  }
})

export const { setFilterBy } = filterBySlice.actions
export const selectFilterBy = (state: RootState) => state.filterBy.filterBy
export default filterBySlice.reducer
