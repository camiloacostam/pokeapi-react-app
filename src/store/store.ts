import { configureStore } from '@reduxjs/toolkit'
//Slice
import filterBySlice from '../domain/filter-by-slice'
import searchFilterSlice from '../domain/search-filter-slice'
import favoritePokemonsSlice from '../domain/favorite-pokemons-slice'

export const store = configureStore({
  reducer: {
    filterBy: filterBySlice,
    searchFilter: searchFilterSlice,
    favoritePokemons: favoritePokemonsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
