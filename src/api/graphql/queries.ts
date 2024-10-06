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

export const GET_POKEMON_DETAIL_QUERY = gql`
  query getPokemonDetail($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      height
      name
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
        slot
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          limit: 1
        ) {
          flavor_text
        }
      }
    }
  }
`
