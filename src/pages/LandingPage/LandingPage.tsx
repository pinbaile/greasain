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
        <div className="xl:hidden">* * *</div>
        <div>
          <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
            Monthly High Score Challenge
          </h2>
          <p className="text-xs font-source mb-4 max-w-prose">
            Send a photo of your best score to us and the highest score at the
            end of the month wins €50 and a few other suprises.
          </p>
          <h3 className="text-xs font-source font-extrabold italic mb-2">
            January&apos;s machine
            <br />
            <span className=" font-normal not-italic">Foo Fighters</span>
          </h3>
          <h4 className="text-xs font-montserrat uppercase font-extrabold mb-2">
            CURRENT RANKS
          </h4>
          <ol className="text-xs font-source">
            <li>B.O. - 307,846,830</li>
            <li>T.S. - 3,004,430</li>
          </ol>
        </div>
        {!errorLoadingTournaments && (
          <>
            <div className="xl:hidden">* * *</div>
            <TournamentList tournaments={tournaments || []} />
          </>
        )}
      </main>
      <footer className="text-sm font-source flex flex-col lg:flex-row justify-between gap-4 items-center md:items-start lg:items-end">
        <p className="text-center md:text-left">
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
