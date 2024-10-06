import './styles.css'
// types
import { IPokemon } from '../../../../domain/types/pokemon'

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
  return (
    <article
      className="pokemon-card"
      aria-label={`Pokemon Card for ${pokemon?.pokemon_v2_pokemon?.name}`}
    >
      <figure className="pokemon-figure">
        <p className="pokemon-id"># {pokemon?.pokemon_v2_pokemon?.id}</p>
        <img
          src={pokemon?.sprites}
          alt={`Pokemon ${pokemon?.pokemon_v2_pokemon?.name}`}
          className="pokemon-image"
        />
        <figcaption className="pokemon-description">
          <h2 className="pokemon-name">{pokemon.pokemon_v2_pokemon.name}</h2>
        </figcaption>
      </figure>
    </article>
  )
}
