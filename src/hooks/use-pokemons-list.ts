import { useQuery } from '@apollo/client'
// Queries
import {
  GET_POKEMON_QUERY,
  GET_FAVORITES_POKEMONS_QUERY
} from '../api/graphql/queries'
//hooks
import { useSelector } from 'react-redux'
import { EFilterByOptions } from '../domain/enums/filter'
import { EPokemonsTypes } from '../domain/enums/pokemons-types'

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
  const { selectTypeFilter } = useSelector(
    (state: any) => state.selectTypeFilter
  )

  const query =
    filterBy === EFilterByOptions.FAVORITES
      ? GET_FAVORITES_POKEMONS_QUERY
      : GET_POKEMON_QUERY

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 50,
      offset: pageCounter * 50,
      sortBy: {
        [filterBy === EFilterByOptions.FAVORITES ? 'id' : filterBy]: 'asc'
      },
      searchInt: (!isNaN(searchFilter) && parseInt(searchFilter)) || -1,
      searchString: `%${searchFilter}%`,
      filterTypes:
        selectTypeFilter === EPokemonsTypes.ALL ? '%%' : selectTypeFilter,
      idArray: filterBy === EFilterByOptions.FAVORITES ? favoritePokemonsId : []
    }
  })

  return {
    loading,
    error,
    pokemonsData: data
  }
}
