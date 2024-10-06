import { useQuery } from '@apollo/client'
// Queries
import { GET_POKEMON_QUERY } from '../api/graphql/queries'
//hooks
import { useSelector } from 'react-redux'

interface IUsePokemon {
  loading: boolean
  error: any
  pokemonsData: any
}

export function usePokemon(): IUsePokemon {
  const { filterBy } = useSelector((state) => state.filterBy)
  const { searchFilter } = useSelector((state) => state.searchFilter)

  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: {
      limit: 100,
      sortBy: {
        pokemon_v2_pokemon: {
          [filterBy]: 'asc'
        }
      },
      searchInt: (!isNaN(searchFilter) && parseInt(searchFilter)) || -1,
      searchString: `%${searchFilter}%`
    }
  })

  return {
    loading,
    error,
    pokemonsData: data
  }
}
