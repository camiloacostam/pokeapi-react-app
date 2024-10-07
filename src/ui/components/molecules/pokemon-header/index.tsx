import './styles.css'
//router
import { useNavigate } from 'react-router-dom'
//Components
import { BackIcon } from '../../atoms/icons/back-icon'
import FavoriteButton from '../../organisms/favorite-button'

interface IPokemonHeaderProps {
  pokemonName: string
  pokemonId: number
  color?: string
}

export default function PokemonHeader({
  pokemonName,
  pokemonId,
  color = '#DC0A2D'
}: IPokemonHeaderProps) {
  const navigate = useNavigate()
  return (
    <header className="pokemon-header-container">
      <span className="pokemon-name-detail">
        <div onClick={() => navigate('/')} className="name-container">
          <BackIcon />
          <h1>{pokemonName}</h1>
        </div>
        <div className="id-container">
          <p># {pokemonId}</p>
          <FavoriteButton pokemonId={pokemonId} color={color} />
        </div>
      </span>
    </header>
  )
}
