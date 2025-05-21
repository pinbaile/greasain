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
      <main className="flex-1 mt-10 sm:mt-20 mb-5 flex flex-col xl:grid xl:grid-cols-3 gap-4 xl:gap-20">
        <div className="mb-6">
          <h1 className="text-lg lg:text-5xl font-montserrat uppercase font-extrabold mb-2">
            Dublin&apos;s Home <br className="hidden lg:block" />
            for Pinball
          </h1>
          <p className="mb-10 text-xl">
            Pinbaile brings pinball fun to businesses, events, and communities
            across Dublin. Whether you&apos;re looking to add a machine to your
            venue or run a one-off event, we offer options to suit your needs.
            Our mission is simple: grow the love of pinball across Ireland and
            make it accessible to everyone. Are you ready to flip?
            <br />
            <br />
            Contact us at{' '}
            <a
              className="underline underline-offset-2"
              href="mailto:info@pinbaile.com"
            >
              info@pinbaile.com
            </a>{' '}
            or{' '}
            <a
              className="underline underline-offset-2"
              href="https://www.instagram.com/pinbaile/"
            >
              @pinbaile on Instagram
            </a>
          </p>
          <a
            href="https://pinballmap.com/operators?by_operator_id=555"
            target="_blank"
            className="group w-auto inline-block"
            rel="noreferrer"
          >
            <div className="h-full text-xl font-bold px-6 py-2.5 divide-x-2 relative flex border-2 border-black bg-white text-black transition-all duration-150 [box-shadow:5px_5px_rgb(255_255_255)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(0_0_0)]">
              FIND US ON THE PINBALL MAP
            </div>
          </a>
        </div>
        <div className="col-span-1 xl:col-span-2 mt-6 lg:mt-0 mb-6">
          <TournamentList />
          <MachineList
            machines={MACHINES}
            locations={Object.values(LOCATIONS).filter(
              (l) => l.name !== 'None'
            )}
          />
        </div>
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
