import React, { useState } from 'react'
import { useData } from '../../api'

const byStartDate = (a: Tournament, b: Tournament) =>
  a.startLocal < b.startLocal ? -1 : a.startLocal > b.startLocal ? 1 : 0

const matchplayHeaders = {
  Authorization: 'Bearer 122|OtQ4qQBnH36Lz9rrUNhhjdkpeFHWZyqkD4vt3smA6abc6c7d',
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

const TournamentListItem = ({ tournament }: { tournament: Tournament }) => {
  const date = new Date(tournament.startLocal)
  const day = new Intl.DateTimeFormat('en-IE', {
    weekday: 'short'
  }).format(date)
  const month = new Intl.DateTimeFormat('en-IE', {
    month: 'short'
  }).format(date)
  const dayNumber = new Intl.DateTimeFormat('en-IE', {
    day: 'numeric'
  }).format(date)
  const time = new Intl.DateTimeFormat('en-IE', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(new Date(tournament.startLocal))

  return (
    <li>
      <a
        className="cursor-pointer transition-colors group"
        href={`https://app.matchplay.events/tournaments/${tournament.tournamentId}`}
      >
        <div className="flex flex-row gap-2 border border-white group-hover:border-red-500 cursor-pointer transition-colors">
          <div className="font-bold flex-grow-0 flex flex-col gap-0 leading-none p-2 bg-white group-hover:bg-red-500 transition-colors text-black">
            <span>{day.toUpperCase()}</span>
            <span className="text-lg uppercase">
              {month} {dayNumber}
            </span>
            <span>{time.toUpperCase()}</span>
          </div>
          <h4 className="text-lg flex-1 flex-grow p-2">
            {tournament.name}{' '}
            {tournament.organizerId === 30148 && " - Women's tournament"}
          </h4>
        </div>
        <div className="border font-bold border-white group-hover:border-red-500 transition-colors  border-t-0 p-1 text-center">
          REGISTER
        </div>
      </a>
    </li>
  )
}
export const TournamentList = () => {
  const [showAllTournaments, setShowAllTournaments] = useState(false)
  const openTournamentData = useData<Tournament[]>(
    'https://app.matchplay.events/api/tournaments?owner=9817&status=planned&page=2',
    matchplayHeaders
  )
  const openTournamentData2 = useData<Tournament[]>(
    'https://app.matchplay.events/api/tournaments?owner=9817&status=planned',
    matchplayHeaders
  )
  const {
    data: womensTournaments = [],
    isLoading: loadingWomensTournaments,
    isError: errorLoadingWomensTournaments
  } = useData<Tournament[]>(
    'https://app.matchplay.events/api/tournaments?owner=30148&status=planned',
    matchplayHeaders
  )

  const allTournaments = [
    ...(openTournamentData.data || []),
    ...(openTournamentData2.data || []),
    ...womensTournaments
  ]

  const touramentsToShow = showAllTournaments ? allTournaments.length : 3
  const tournaments = [...allTournaments]
    .sort(byStartDate)
    .slice(0, touramentsToShow)

  const errorLoadingTournaments =
    openTournamentData.isError || openTournamentData2.isError
  const loading =
    openTournamentData.isLoading ||
    openTournamentData2.isLoading ||
    loadingWomensTournaments

  return (
    <div className="mb-6">
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Our Pinball Events
      </h2>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-4">
        2025 Pinball Event Calendar - All skill levels welcome!
      </h3>
      {errorLoadingTournaments && (
        <p className="text-red-600 mb-2">
          We had issues fetching our open tournaments
        </p>
      )}
      {errorLoadingWomensTournaments && (
        <p className="text-red-600 mb-2">
          We had issues fetching our women&apos;s tournaments
        </p>
      )}
      {loading && <>Loading tournaments...</>}
      {!loading && !!allTournaments.length && (
        <ul className="font-source text-md sm:text-sm grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {tournaments.map((t) => {
            return <TournamentListItem tournament={t} key={t.tournamentId} />
          })}
        </ul>
      )}
      {!loading &&
        !!allTournaments.length &&
        allTournaments.length > 3 &&
        !showAllTournaments && (
          <div className="flex flex-row xl:items-center xl:justify-center mt-5">
            <button
              onClick={() => {
                setShowAllTournaments(true)
              }}
              className="group w-auto inline-block"
              rel="noreferrer"
            >
              <div className="h-full text-xl  font-bold px-6 py-2.5 divide-x-2 relative flex border-2 border-black bg-white text-black transition-all duration-150 [box-shadow:5px_5px_rgb(255_255_255)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(0_0_0)]">
                SHOW ALL EVENTS
              </div>
            </button>
          </div>
        )}
    </div>
  )
}
