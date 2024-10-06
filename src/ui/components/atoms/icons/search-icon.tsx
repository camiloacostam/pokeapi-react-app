interface ISearchIconProps {
  size?: number
  color?: string
}

export const SearchIcon = ({
  size = 1,
  color = '#DC0A2D'
}: ISearchIconProps) => {
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
      data-icon="SvgSearch"
      aria-hidden="true"
    >
      <path d="M10.1 3a7.1 7.1 0 11-5.02 2.08A7.074 7.074 0 0110.1 3zM21 21l-2.9-2.9-2.9-2.9"></path>
    </svg>
  )
}
