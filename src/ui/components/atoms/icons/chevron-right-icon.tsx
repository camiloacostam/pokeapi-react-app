interface IProps {
  size?: number
}

export function ChevronRightIcon({ size = 1 }: IProps) {
  return (
    <svg
      width={size * 24}
      height={size * 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2283_114)">
        <path
          d="M8.84995 17.45C8.71662 17.2834 8.64579 17.1 8.63745 16.9C8.62912 16.7 8.69995 16.525 8.84995 16.375L13.25 11.975L8.82495 7.55003C8.69162 7.4167 8.62912 7.23753 8.63745 7.01253C8.64579 6.78753 8.71662 6.60837 8.84995 6.47503C9.01662 6.30837 9.19579 6.2292 9.38745 6.23753C9.57912 6.24587 9.74995 6.32503 9.89995 6.47503L14.875 11.45C14.9583 11.5334 15.0166 11.6167 15.05 11.7C15.0833 11.7834 15.1 11.875 15.1 11.975C15.1 12.075 15.0833 12.1667 15.05 12.25C15.0166 12.3334 14.9583 12.4167 14.875 12.5L9.92495 17.45C9.77495 17.6 9.59995 17.6709 9.39995 17.6625C9.19995 17.6542 9.01662 17.5834 8.84995 17.45Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2283_114"
          x="4.63672"
          y="3.23694"
          width="14.4631"
          height="19.4263"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_2283_114"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2283_114"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2283_114"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
