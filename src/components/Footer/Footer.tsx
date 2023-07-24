import React from 'react'

export const Footer = () => {
  const [leftFlipperHeld, setLeftFlipperHeld] = React.useState(false)
  const [rightFlipperHeld, setRightFlipperHeld] = React.useState(false)

  const downHandler = ({ code }: KeyboardEvent) => {
    if (code === 'ArrowLeft') {
      setLeftFlipperHeld(true)
    } else if (code === 'ArrowRight') {
      setRightFlipperHeld(true)
    }
  }

  const upHandler = ({ code }: KeyboardEvent) => {
    if (code === 'ArrowLeft') {
      setLeftFlipperHeld(false)
    } else if (code === 'ArrowRight') {
      setRightFlipperHeld(false)
    }
  }

  const touchHandler = (event: TouchEvent) => {
    if (event.type === 'touchstart') {
      console.log('TOUCH', event.touches[0].clientX, window.innerWidth / 2)
      if (event.touches[0].clientX < window.innerWidth / 2) {
        setLeftFlipperHeld(true)
      } else {
        setRightFlipperHeld(true)
      }
    } else if (event.type === 'touchend') {
      setLeftFlipperHeld(false)
      setRightFlipperHeld(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('touchstart', touchHandler)
    window.addEventListener('touchend', touchHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.addEventListener('touchstart', touchHandler)
      window.addEventListener('touchend', touchHandler)
    }
  }, [])

  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-3xl font-karla bg-green-900 mr-2">
        Left {leftFlipperHeld ? 'ON' : ''}
      </h1>
      <h1 className="text-3xl font-karla bg-green-900 mr-2">
        Right {rightFlipperHeld ? 'ON' : ''}
      </h1>
    </div>
  )
}
