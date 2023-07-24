import React from 'react'

export const Logo = () => {
  const [spaceHeld, setSpaceHeld] = React.useState(false)

  const downHandler = ({ code }: KeyboardEvent) => {
    if (code === 'Space') {
      setSpaceHeld(true)
    }
  }

  const upHandler = ({ code }: KeyboardEvent) => {
    if (code === 'Space') {
      setSpaceHeld(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [])

  return (
    <div className="flex flex-row items-center">
      <h1 className="text-3xl font-bold bg-green-900 mr-2">
        Pinbaile {spaceHeld ? 'pull' : ' '}
      </h1>
      <div className="w-7 h-7 rounded-2xl bg-white"></div>
    </div>
  )
}
