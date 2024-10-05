import { useQuery } from '@apollo/client'
// Queries
import { GET_POKEMON_QUERY } from '../api/graphql/queries'

interface IUsePokemon {
  loading: boolean
  error: any
  pokemonsData: any
}

export function usePokemon(): IUsePokemon {
  const { loading, error, data } = useQuery(GET_POKEMON_QUERY)

  return {
    loading,
    error,
    pokemonsData: data
  }
}
