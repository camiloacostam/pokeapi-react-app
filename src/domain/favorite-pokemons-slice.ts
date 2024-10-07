import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export interface IFavoritePokemonsSlice {
  favoritePokemonsId: number[]
}

const initialState: IFavoritePokemonsSlice = {
  favoritePokemonsId: []
}

export const favoritePokemonsSlice = createSlice({
  name: 'favoritePokemons',
  initialState,
  reducers: {
    addFavoritePokemon: (state, action: PayloadAction<number>) => {
      state.favoritePokemonsId.push(action.payload)
    },
    removeFavoritePokemon: (state, action: PayloadAction<number>) => {
      state.favoritePokemonsId = state.favoritePokemonsId.filter(
        (pokemon) => pokemon !== action.payload
      )
    }
  }
})

export const { addFavoritePokemon, removeFavoritePokemon } =
  favoritePokemonsSlice.actions
export const selectFavoritePokemons = (state: RootState) =>
  state.favoritePokemons.favoritePokemonsId
export default favoritePokemonsSlice.reducer
