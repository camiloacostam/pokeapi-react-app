import { configureStore } from '@reduxjs/toolkit'
//Slice
import filterBySlice from '../domain/filter-by-slice'
import searchFilterSlice from '../domain/search-filter-slice'

export const store = configureStore({
  reducer: {
    filterBy: filterBySlice,
    searchFilter: searchFilterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
