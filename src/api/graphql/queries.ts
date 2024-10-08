import { gql } from '@apollo/client'

export const GET_POKEMON_QUERY = gql`
  query GetPokemons(
    $limit: Int = 50
    $offset: Int = 0
    $sortBy: pokemon_v2_pokemon_order_by!
    $searchString: String
    $searchInt: Int
    $filterTypes: String
    $idArray: [Int!]
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _ilike: $filterTypes } }
        }
        _or: [{ name: { _like: $searchString } }, { id: { _eq: $searchInt } }]
      }
      order_by: [$sortBy]
    ) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
    pokemon_v2_pokemon_aggregate(
      where: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _ilike: $filterTypes } }
        }
        _or: [{ name: { _like: $searchString } }, { id: { _eq: $searchInt } }]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`

export const GET_FAVORITES_POKEMONS_QUERY = gql`
  query GetFavoritesPokemons(
    $idArray: [Int!]
    $offset: Int = 0
    $filterTypes: String
    $limit: Int = 50
    $sortBy: pokemon_v2_pokemon_order_by!
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _ilike: $filterTypes } }
        }
        _or: [{ id: { _in: $idArray } }]
      }
      order_by: [$sortBy]
    ) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
    pokemon_v2_pokemon_aggregate(
      where: {
        pokemon_v2_pokemontypes: {
          pokemon_v2_type: { name: { _ilike: $filterTypes } }
        }
        _or: [{ id: { _in: $idArray } }]
      }
    ) {
      aggregate {
        count
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
