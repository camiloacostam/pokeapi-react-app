import './styles.css'
// router
import { useNavigate } from 'react-router-dom'
// types
import { IPokemonSummaryList } from '../../../../domain/types/pokemon'

export default function PokemonCard({
  pokemon
}: {
  pokemon: IPokemonSummaryList
}) {
  const navigate = useNavigate()

  return (
    <article
      className="pokemon-card"
      aria-label={`Pokemon Card for ${pokemon?.pokemon_v2_pokemon?.name}`}
      onClick={() => navigate(`/pokemon/${pokemon?.pokemon_v2_pokemon?.id}`)}
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
