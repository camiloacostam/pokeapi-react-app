import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { EPokemonsTypes } from './enums/pokemons-types'

interface ISelectTypeFilterSlice {
  selectTypeFilter: EPokemonsTypes
}

const initialState: ISelectTypeFilterSlice = {
  selectTypeFilter: EPokemonsTypes.ALL
}

export const selectTypeFilterSlice = createSlice({
  name: 'selectTypeFilter',
  initialState,
  reducers: {
    setSelectTypeFilter: (state, action: PayloadAction<EPokemonsTypes>) => {
      state.selectTypeFilter = action.payload
    },
    reset(state) {
      state.selectTypeFilter = EPokemonsTypes.ALL
    }
  }
})

export const { setSelectTypeFilter, reset } = selectTypeFilterSlice.actions

export const selectSelectTypeFilter = (state: RootState) =>
  state.selectTypeFilter.selectTypeFilter
export default selectTypeFilterSlice.reducer
