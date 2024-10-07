import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

interface IPageCounterSlice {
  pageCounter: number
}

const initialState: IPageCounterSlice = {
  pageCounter: 0
}

export const pageCounterSlice = createSlice({
  name: 'pageCounter',
  initialState,
  reducers: {
    incrementPageCounter: (state) => {
      state.pageCounter += 1
    },
    decrementPageCounter: (state) => {
      state.pageCounter -= 1
    },
    reset: (state) => {
      state.pageCounter = 0
    }
  }
})

export const { incrementPageCounter, decrementPageCounter, reset } =
  pageCounterSlice.actions
export const selectPageCounter = (state: RootState) =>
  state.pageCounter.pageCounter
export default pageCounterSlice.reducer
