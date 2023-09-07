import React from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '-100vw'
  }
}

const pageTransitions = {
  duration: 0.2,
  type: 'tween',
  ease: 'anticipate'
}

export const Machines = () => {
  return (
    <motion.div
      className="text-center bg-slate-800 h-screen w-screen z-40 absolute"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <h2>Our Machines</h2>
      <p className="max-w-prose mb-4">
        Welcome to Pinbaile, where we take great pride in curating an
        exceptional collection of pinball machines. Each one has been
        meticulously chosen to provide you with the ultimate pinball experience.
        From classic favorites to modern marvels, our machines are ready to
        challenge and entertain players of all skill levels. Step into our
        pinball wonderland and let the games begin!
      </p>
      <ul>
        <li>Foo fighters</li>
        <li>Fish Tales</li>
        <li>The Getaway II</li>
        <li>Roadshow</li>
      </ul>
    </motion.div>
  )
}
