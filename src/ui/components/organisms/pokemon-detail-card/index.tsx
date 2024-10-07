import './styles.css'
//components
import TypeTag from '../../atoms/type-tag'
import {
  IPokemonAbility,
  IPokemonStat,
  IPokemonType
} from '../../../../domain/types/pokemon'
import PokemonAbout from '../../molecules/pokemon-about'
import StatsList from '../stats-list'

interface IPokemonDetailCardProps {
  types: IPokemonType[]
  color: string
  weight: number
  height: number
  moves: IPokemonAbility[]
  description: string
  stats: IPokemonStat[]
}

export default function PokemonDetailCard({
  types,
  weight,
  height,
  moves,
  description,
  stats,
  color
}: IPokemonDetailCardProps) {
  return (
    <div className="pokemon-detail-card-container">
      <span className="type-container">
        {types.map((type, index) => (
          <TypeTag key={index} type={type.pokemon_v2_type.name} />
        ))}
      </span>
      <h1 style={{ color: color }}>About</h1>
      <span className="about-container">
        <PokemonAbout weight={weight} height={height} moves={moves} />
        <p className="about-container-description">{description}</p>
      </span>
      <h1 style={{ color: color }}>Base Stats</h1>
      <StatsList stats={stats} color={color} />
    </div>
  )
}
