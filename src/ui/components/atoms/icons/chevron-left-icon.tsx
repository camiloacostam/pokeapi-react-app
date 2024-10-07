interface IProps {
  size?: number
}

export function ChevronLeftIcon({ size = 1 }: IProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size * 24}
      height={size * 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m14 8-4 4 4 4"
      />
    </svg>
  )
}
