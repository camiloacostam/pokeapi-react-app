import { gql } from '@apollo/client'

export const GET_POKEMON_QUERY = gql`
  query GetPokemons(
    $limit: Int = 100
    $sortBy: pokemon_v2_pokemonsprites_order_by!
    $searchString: String
    $searchInt: Int
  ) {
    pokemon_v2_pokemonsprites(
      limit: $limit
      order_by: [$sortBy]
      where: {
        _or: [
          { pokemon_v2_pokemon: { name: { _ilike: $searchString } } }
          { pokemon_v2_pokemon: { id: { _eq: $searchInt } } }
        ]
      }
    ) {
      sprites(path: "other.official-artwork.front_default")
      pokemon_v2_pokemon {
        name
        id
      }
    }
  }
`
