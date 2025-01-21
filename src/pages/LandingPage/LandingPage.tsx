import React from 'react'
import { MachineList, PinbaileLogo, TournamentList } from '../../components'
import { useData } from '../../api'
import { MACHINES } from '../../constants'
export const LandingPage = () => {
  const { data: tournaments, isError: errorLoadingTournaments } = useData<
    Tournament[]
  >('https://app.matchplay.events/api/tournaments?owner=9817&status=planned', {
    Authorization:
      'Bearer 122|OtQ4qQBnH36Lz9rrUNhhjdkpeFHWZyqkD4vt3smA6abc6c7d',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  return (
    <div className="py-10 bg-black text-white px-5 sm:p-10 h-screen w-screen text-center sm:text-left flex flex-col overflow-x-hidden">
      <header className="flex flex-row gap-4 items-center justify-center sm:justify-start">
        <PinbaileLogo fill="#fff" width={300} />
      </header>
      <main className="flex-1 mt-10 sm:mt-20 mb-5 flex flex-col xl:grid xl:grid-cols-3 gap-4 xl:gap-10">
        <MachineList machines={MACHINES} />
        {!errorLoadingTournaments && (
          <>
            <div className="xl:hidden">* * *</div>
            <TournamentList tournaments={tournaments || []} />
          </>
        )}
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
