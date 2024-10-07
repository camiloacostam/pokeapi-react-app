import { IPokemonStat } from '../../../../domain/types/pokemon'
import ProgressBar from '../../atoms/progress-bar'
import './styles.css'

interface IStatsListProps {
  stats: IPokemonStat[]
  color: string
}

export default function StatsList({ stats, color }: IStatsListProps) {
  return (
    <div className="stat-list-container" style={{ color: color }}>
      <div className="stat-container">
        {stats.map((stat, index) => (
          <p key={index}>{stat.pokemon_v2_stat.name}</p>
        ))}
      </div>
      <div className="divider" />

      <div className="stat-container">
        {stats.map((stat, index) => (
          <ProgressBar key={index} stat={stat?.base_stat} color={color} />
        ))}
      </div>
    </div>
  )
}
