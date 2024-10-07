import './styles.css'
// router
import { useNavigate } from 'react-router-dom'
// types
import { IPokemonSummaryList } from '../../../../domain/types/pokemon'
import FavoriteButton from '../../organisms/favorite-button'

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
    >
      <figure className="pokemon-figure">
        <div className="pokemon-figure-header">
          <FavoriteButton pokemonId={pokemon?.pokemon_v2_pokemon?.id} />
          <p className="pokemon-id"># {pokemon?.pokemon_v2_pokemon?.id}</p>
        </div>
        <span
          onClick={() =>
            navigate(`/pokemon/${pokemon?.pokemon_v2_pokemon?.id}`)
          }
        >
          <img
            src={pokemon?.sprites}
            alt={`Pokemon ${pokemon?.pokemon_v2_pokemon?.name}`}
            className="pokemon-image"
          />
          <figcaption
            onClick={() =>
              navigate(`/pokemon/${pokemon?.pokemon_v2_pokemon?.id}`)
            }
            className="pokemon-description"
          >
            <h2 className="pokemon-name">{pokemon.pokemon_v2_pokemon.name}</h2>
          </figcaption>
        </span>
      </figure>
    </article>
  )
}
