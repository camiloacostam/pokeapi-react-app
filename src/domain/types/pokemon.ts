interface IPokemonDetail {
  name: string
  id: number
}

export interface IPokemon {
  sprites: string
  pokemon_v2_pokemon: IPokemonDetail
}
