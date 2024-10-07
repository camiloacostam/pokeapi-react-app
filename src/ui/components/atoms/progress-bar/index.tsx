import './styles.css'

interface IProgressBarProps {
  stat: number
  color: string
}

export default function ProgressBar({ stat, color }: IProgressBarProps) {
  const hexToRGBA = (hex: string, alpha: number = 0.3) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const backgroundColor = hexToRGBA(color, 0.3)

  return (
    <div className="progress-bar-container">
      <p>{stat}</p>
      <progress
        value={stat}
        max="300"
        style={{
          appearance: 'none',
          height: '4px',
          borderRadius: '4px'
        }}
      />
      <style>
        {`
          progress::-webkit-progress-bar {
            background-color: ${backgroundColor};
            border-radius: 4px;
          }
          progress::-webkit-progress-value {
            background-color: ${color};
            border-radius: 4px;
          }
          progress::-moz-progress-bar {
            background-color: ${color};
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  )
}
