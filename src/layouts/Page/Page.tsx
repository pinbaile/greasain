import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Flipper, RightFlipper } from '../../components'

export const Page = () => {
  const [leftFlipperHeld, setLeftFlipperHeld] = React.useState(false)
  const [rightFlipperHeld, setRightFlipperHeld] = React.useState(false)
  const navigate = useNavigate()

  const downHandler = ({ code }: KeyboardEvent) => {
    if (code === 'ArrowLeft') {
      navigate('machines')
      setLeftFlipperHeld(true)
    } else if (code === 'ArrowRight') {
      navigate('events')
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
    <>
      <div className="fixed z-50 top-0 left-0 h-screen w-screen flex justify-between flex-col text-white p-6 overflow-hidden">
        <div className="text-center">header here</div>
        <nav className="flex flex-row items-center justify-between">
          <Link to={'machines'}>
            <div className="flex flex-col items-start text-md font-karla gap-6">
              <div
                className="rotate-180"
                style={{ writingMode: 'vertical-lr' }}
              >
                MACHINES
              </div>
              <Flipper
                fill="white"
                className={
                  'transform origin-top-left ' +
                  (leftFlipperHeld ? '-rotate-12' : '')
                }
              />
            </div>
          </Link>
          <Link to={'events'}>
            <div className="flex flex-col items-end text-md font-karla gap-6">
              <div
                className="rotate-180"
                style={{ writingMode: 'vertical-lr' }}
              >
                CALENDAR
              </div>
              <RightFlipper
                fill="white"
                className={
                  'transform origin-top-right ' +
                  (rightFlipperHeld ? 'rotate-12' : '')
                }
              />
            </div>
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
