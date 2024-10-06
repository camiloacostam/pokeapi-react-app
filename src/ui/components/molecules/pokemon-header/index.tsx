import './styles.css'
//router
import { useNavigate } from 'react-router-dom'
//Components
import { ChevronLeftIcon } from '../../atoms/icons/chevron-left-icon'
import { BackIcon } from '../../atoms/icons/back-icon'
import { ChevronRightIcon } from '../../atoms/icons/chevron-right-icon'

interface IPokemonHeaderProps {
  pokemonName: string
  pokemonId: number
  img: string
}

export default function PokemonHeader({
  pokemonName,
  pokemonId,
  img
}: IPokemonHeaderProps) {
  const navigate = useNavigate()
  return (
    <header className="pokemon-header-container">
      <span className="pokemon-name-detail">
        <div onClick={() => navigate('/')} className="name-container">
          <BackIcon />
          <h1>{pokemonName}</h1>
        </div>
        <p># {pokemonId}</p>
      </span>
      <span className="image-container">
        {pokemonId > 1 && (
          <button onClick={() => navigate(`/pokemon/${pokemonId - 1}`)}>
            <ChevronLeftIcon />
          </button>
        )}

        <img src={img} alt={`Pokemon image ${pokemonName}`} />
        <button onClick={() => navigate(`/pokemon/${pokemonId + 1}`)}>
          <ChevronRightIcon />
        </button>
      </span>
    </header>
  )
}
