import './styles.css'
// router
import { useNavigate } from 'react-router-dom'

import FavoriteButton from '../../organisms/favorite-button'

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  const navigate = useNavigate()

  return (
    <article
      className="pokemon-card"
      aria-label={`Pokemon Card for ${pokemon?.name}`}
    >
      <figure className="pokemon-figure">
        <div className="pokemon-figure-header">
          <FavoriteButton pokemonId={pokemon?.id} />
          <p className="pokemon-id"># {pokemon?.id}</p>
        </div>
        <span onClick={() => navigate(`/pokemon/${pokemon?.id}`)}>
          <img
            src={pokemon?.pokemon_v2_pokemonsprites[0]?.sprites}
            alt={`Pokemon ${pokemon?.name}`}
            className="pokemon-image"
          />
          <figcaption
            onClick={() => navigate(`/pokemon/${pokemon?.id}`)}
            className="pokemon-description"
          >
            <h2 className="pokemon-name">{pokemon?.name}</h2>
          </figcaption>
        </span>
      </figure>
    </article>
  )
}
