import React from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '100vw'
  }
}

const pageTransitions = {
  duration: 0.2,
  type: 'tween',
  ease: 'anticipate'
}

export const Events = () => {
  return (
    <motion.div
      className="text-center bg-red-800 h-screen w-screen z-40 absolute"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <h2>Events</h2>
      <p className="max-w-prose">More info on events</p>
      <ul>
        <li>
          2023.07.26:{' '}
          <a
            href="https://app.matchplay.events/tournaments/109852"
            className="underline underline-offset-2"
          >
            Tilted Token 0.3
          </a>
        </li>
        <li>
          2023.08.09:{' '}
          <a
            href="https://app.matchplay.events/tournaments/109854"
            className="underline underline-offset-2"
          >
            Tilted Token 0.4
          </a>
        </li>
        <li>
          2023.08.23:{' '}
          <a
            href="https://app.matchplay.events/tournaments/109855"
            className="underline underline-offset-2"
          >
            Tilted Token 1.0 - first IFPA registered tournament
          </a>
        </li>
      </ul>
    </motion.div>
  )
}
