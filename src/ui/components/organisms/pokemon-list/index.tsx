import './styles.css'
// types
import { IPokemon } from '../../../../domain/types/pokemon'
// Components
import PokemonCard from '../../molecules/pokemon-card'

export default function PokemonList({
  pokemonsList
}: {
  pokemonsList: IPokemon[]
}) {
  return (
    <body className="pokemon-list-container">
      <div className="pokemon-list">
        {pokemonsList?.map((pokemon: IPokemon) => (
          <PokemonCard
            key={pokemon?.pokemon_v2_pokemon?.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </body>
  )
}
