interface IPokemonDetail {
  name: string
}

export interface IPokemon {
  id: number
  pokemon_id: number
  sprites: string
  pokemon_v2_pokemon: IPokemonDetail
}
