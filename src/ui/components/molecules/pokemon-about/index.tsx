import './styles.css'
//Components
import { WeightIcon } from '../../atoms/icons/weight-icon'
import { RuleIcon } from '../../atoms/icons/rule-icon'
import { IPokemonAbility } from '../../../../domain/types/pokemon'

interface IPokemonAboutProps {
  weight: number
  height: number
  moves: IPokemonAbility[]
}

export default function PokemonAbout({
  weight,
  height,
  moves
}: IPokemonAboutProps) {
  return (
    <div className="pokemon-about-container">
      <span className="description-container">
        <div className="description-stat">
          <WeightIcon />
          <p>{weight} kg</p>
        </div>
        <p>Weight</p>
      </span>
      <div className="divider" />
      <span className="description-container">
        <div className="description-stat">
          <RuleIcon />
          <p>{height / 100} m</p>
        </div>
        <p>Height</p>
      </span>
      <div className="divider" />
      <span className="description-container">
        <div className="description-moves">
          {moves.slice(0, 2).map((move, index) => (
            <p key={index}>{move.pokemon_v2_ability?.name}</p>
          ))}
        </div>
        <p>Moves</p>
      </span>
    </div>
  )
}
