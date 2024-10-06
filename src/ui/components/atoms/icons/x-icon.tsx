interface IXIconProps {
  size?: number
  color?: string
}

export function XIcon({ size = 1, color = '#DC0A2D' }: IXIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 24}
      height={size * 24}
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      data-icon="SvgX"
      aria-hidden="true"
    >
      <path d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636m0 0"></path>
    </svg>
  )
}
