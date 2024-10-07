import './styles.css'
// types
import { IPokemonSummaryList } from '../../../../domain/types/pokemon'
// Components
import PokemonCard from '../../molecules/pokemon-card'

export default function PokemonList({
  pokemonsList
}: {
  pokemonsList: IPokemonSummaryList[]
}) {
  return (
    <main className="pokemon-list-container">
      <div className="pokemon-list">
        {pokemonsList?.map((pokemon: IPokemonSummaryList) => (
          <PokemonCard
            key={pokemon?.pokemon_v2_pokemon?.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </main>
  )
}
