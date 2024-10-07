interface IPokemonSummary {
  name: string
  id: number
}

export interface IPokemonSummaryList {
  sprites: string
  id: number
  pokemon_v2_pokemon: IPokemonSummary
}

export interface IPokemonType {
  pokemon_v2_type: {
    name: string
    slot: number
  }
}

export interface IPokemonStat {
  base_stat: number
  pokemon_v2_stat: {
    name: string
  }
}

export interface IPokemonAbility {
  pokemon_v2_ability: {
    name: string
  }
}

interface IPokemonSprite {
  sprites: string
}

interface IPokemonFlavorText {
  flavor_text: string
}

export interface IPokemonDetail {
  id: number
  height: number
  name: string
  weight: number
  pokemon_v2_pokemontypes: IPokemonType[]
  pokemon_v2_pokemonstats: IPokemonStat[]
  pokemon_v2_pokemonabilities: IPokemonAbility[]
  pokemon_v2_pokemonsprites: IPokemonSprite[]
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemonspeciesflavortexts: IPokemonFlavorText[]
  }
}
