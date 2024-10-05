import { gql } from '@apollo/client'

export const GET_POKEMON_QUERY = gql`
  query GetPokemons($limit: Int = 100) {
    pokemon_v2_pokemonsprites(
      limit: $limit
      order_by: { pokemon_v2_pokemon: { name: asc } }
    ) {
      id
      pokemon_id
      sprites(path: "other.official-artwork.front_default")
      pokemon_v2_pokemon {
        name
      }
    }
  }
`
