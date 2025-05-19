import React from 'react'
import { MachineList, PinbaileLogo, TournamentList } from '../../components'
import { LOCATIONS, MACHINES } from '../../constants'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="py-10 bg-black text-white px-5 sm:p-10 h-screen w-screen flex flex-col overflow-x-hidden">
      <header className="flex flex-col md:flex-row gap-4 items-center justify-center sm:justify-between">
        <Link to="/" title="Pinbaile homepage">
          <PinbaileLogo fill="#fff" width={300} />
        </Link>
      </header>
      <main className="flex-1 mt-10 sm:mt-20 mb-5 flex flex-col xl:grid xl:grid-cols-3 gap-4 xl:gap-10">
        <MachineList
          machines={MACHINES}
          locations={Object.values(LOCATIONS).filter((l) => l.name !== 'None')}
        />
        <TournamentList />
      </main>
      <footer className="text-sm font-source flex flex-col lg:flex-row justify-between gap-4 items-center sm:items-start lg:items-end">
        <p className="text-center sm:text-left">
          For more information on purchasing and renting, contact us at:
          <br className="hidden md:block" />
          <a href="mailto:info@pinbaile.com">info@pinbaile.com</a> |{' '}
          <a href="https://www.instagram.com/pinbaile/">@pinbaile</a>
        </p>
        <p className="italic">actual website coming soon</p>
      </footer>
    </div>
  )
}
