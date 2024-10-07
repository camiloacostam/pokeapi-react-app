import { useQuery } from '@apollo/client'
// Queries
import {
  GET_POKEMON_QUERY,
  GET_FAVORITES_POKEMONS_QUERY
} from '../api/graphql/queries'
//hooks
import { useSelector } from 'react-redux'
import { EFilterByOptions } from '../domain/enums/filter'

interface IUsePokemonList {
  loading: boolean
  error: any
  pokemonsData: any
}

export function usePokemonList(): IUsePokemonList {
  const { filterBy } = useSelector((state: any) => state.filterBy)
  const { searchFilter } = useSelector((state: any) => state.searchFilter)
  const { favoritePokemonsId } = useSelector(
    (state: any) => state.favoritePokemons
  )
  const { pageCounter } = useSelector((state: any) => state.pageCounter)

  const query =
    filterBy === EFilterByOptions.FAVORITES
      ? GET_FAVORITES_POKEMONS_QUERY
      : GET_POKEMON_QUERY

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 50,
      offset: pageCounter * 50,
      sortBy: {
        pokemon_v2_pokemon: {
          [filterBy === EFilterByOptions.FAVORITES
            ? EFilterByOptions.ID
            : filterBy]: 'asc'
        }
      },
      searchInt: (!isNaN(searchFilter) && parseInt(searchFilter)) || -1,
      searchString: `%${searchFilter}%`,
      idArray: filterBy === EFilterByOptions.FAVORITES ? favoritePokemonsId : -1
    }
  })

  return {
    loading,
    error,
    pokemonsData: data
  }
}
