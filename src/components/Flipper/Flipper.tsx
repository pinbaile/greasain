import React from 'react'

interface FlipperProps {
  className?: string
  fill?: string
  width?: number
  stroke?: string
}

export const Flipper = ({
  className,
  fill = 'none',
  width = 50,
  stroke = 'none'
}: FlipperProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 79.9 68"
      xmlSpace="preserve"
      width={width}
      stroke={stroke}
    >
      <path
        fill={fill}
        d="M9,33l59.9,34c7.4,4.1,14.8-5.2,9-11.5l-47.3-50C22.7-3.1,7.9-1.4,2.3,8.9C-2.5,17.4,0.5,28.2,9,33L9,33z"
      />
    </svg>
  )
}

export const RightFlipper = ({ className, ...flipperProps }: FlipperProps) => (
  <div className={className}>
    <Flipper {...flipperProps} className="-scale-x-100" />
  </div>
)
