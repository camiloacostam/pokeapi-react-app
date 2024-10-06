import { useQuery } from '@apollo/client'
// Queries
import { GET_POKEMON_DETAIL_QUERY } from '../api/graphql/queries'
import { IPokemonDetail } from '../domain/types/pokemon'

interface IUsePokemonDetail {
  loading: boolean
  error: any
  pokemonData: IPokemonDetail
}

export function usePokemonDetail(id: number | string): IUsePokemonDetail {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL_QUERY, {
    variables: {
      id
    }
  })

  return {
    loading,
    error,
    pokemonData: data?.pokemon_v2_pokemon[0]
  }
}
