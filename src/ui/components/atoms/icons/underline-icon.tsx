interface IUnderlineIconProps {
  size?: number
}

export function UnderlineIcon({ size = 1 }: IUnderlineIconProps) {
  return (
    <svg
      width={size * 10}
      height={size * 11}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.833252 10.6667C0.688808 10.6667 0.569363 10.6195 0.474919 10.525C0.380474 10.4306 0.333252 10.3111 0.333252 10.1667C0.333252 10.0222 0.380474 9.9028 0.474919 9.80835C0.569363 9.71391 0.688808 9.66669 0.833252 9.66669H9.16659C9.31103 9.66669 9.43047 9.71391 9.52492 9.80835C9.61936 9.9028 9.66659 10.0222 9.66659 10.1667C9.66659 10.3111 9.61936 10.4306 9.52492 10.525C9.43047 10.6195 9.31103 10.6667 9.16659 10.6667H0.833252ZM3.54992 5.26669H6.44992L5.03325 1.56669H4.96659L3.54992 5.26669ZM2.28325 8.00002C2.10547 8.00002 1.98881 7.94169 1.93325 7.82502C1.8777 7.70835 1.8777 7.56669 1.93325 7.40002L4.26659 1.18335C4.32214 1.03891 4.41936 0.916687 4.55825 0.816687C4.69714 0.716687 4.84436 0.666687 4.99992 0.666687C5.15547 0.666687 5.3027 0.716687 5.44159 0.816687C5.58047 0.916687 5.6777 1.03891 5.73325 1.18335L8.06659 7.40002C8.12214 7.56669 8.12214 7.70835 8.06659 7.82502C8.01103 7.94169 7.89436 8.00002 7.71659 8.00002C7.6277 8.00002 7.54714 7.97502 7.47492 7.92502C7.4027 7.87502 7.35547 7.81669 7.33325 7.75002L6.68325 6.01669H3.29992L2.64992 7.75002C2.6277 7.81669 2.58047 7.87502 2.50825 7.92502C2.43603 7.97502 2.36103 8.00002 2.28325 8.00002Z"
        fill="#DC0A2D"
      />
    </svg>
  )
}