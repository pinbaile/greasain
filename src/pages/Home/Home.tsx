import React from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: {}, // when it comes in from the left initially
  in: {
    opacity: 1
    // x: 0
  },
  // when it comes out
  out: {
    opacity: 0
    // x: '-100vh'
  }
}

const pageTransitions = {
  duration: 0.2,
  type: 'tween',
  ease: 'anticipate'
}

export const Home = () => {
  return (
    <motion.div
      className="text-center absolute h-screen w-screen z-30 bg-gray-400"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-handjet">pinbaile</h1>
        <p className=" font-karla text-sm">Bringing pinball to Dublin</p>
      </div>
    </motion.div>
  )
}
