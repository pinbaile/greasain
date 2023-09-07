import React from 'react'
import {
  Flipper,
  MachineList,
  TextLogo,
  TournamentList
} from '../../components'
import { useData } from '../../api'
import { MACHINES } from '../../constants'

const color = '#0D206A'
const backgroundColor = '#F9F9F9'
export const LandingPage = () => {
  const { data: tournaments, isError: errorLoadingTournaments } = useData<
    Tournament[]
  >('https://next.matchplay.events/api/tournaments?owner=9817&status=planned', {
    Authorization:
      'Bearer 122|OtQ4qQBnH36Lz9rrUNhhjdkpeFHWZyqkD4vt3smA6abc6c7d',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })

  return (
    <div
      className="py-10 px-5 sm:p-10 h-screen w-screen text-center sm:text-left flex flex-col overflow-hidden"
      style={{
        backgroundColor,
        color
      }}
    >
      <header className="flex flex-row gap-4 items-center justify-center sm:justify-start">
        <Flipper
          stroke={color}
          width={105}
          className="-rotate-6 flex-grow-0 overflow-visible"
        />
        <TextLogo className="relative -left-4 rotate-12 flex-grow-0 flex-shrink-0 text-sm py-2 font-source italic text-center w-24 border" />
      </header>
      <main className="flex-1 mt-10  sm:mt-20 mb-5 overflow-auto">
        <MachineList machines={MACHINES} />
        <div className="my-4 sm:my-10">* * *</div>
        {!errorLoadingTournaments && (
          <TournamentList tournaments={tournaments || []} />
        )}
      </main>
      <footer className="text-sm font-source italic flex flex-col sm:flex-row justify-between">
        <a href="mailto:info@pinbaile.com">info@pinbaile.com</a>
        <a href="mailto:info@pinbaile.com">actual website coming soon</a>
      </footer>
    </div>
  )
}
