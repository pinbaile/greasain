import React from 'react'
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
  const dayNumber = new Intl.DateTimeFormat('en-IE', {
    day: 'numeric'
  }).format(date)
  const time = new Intl.DateTimeFormat('en-IE', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(new Date(tournament.startLocal))

  return (
    <li className="mt-4">
      <a
        className="cursor-pointer transition-colors group"
        href={`https://app.matchplay.events/tournaments/${tournament.tournamentId}`}
      >
        <div className="flex flex-row gap-2 border border-white group-hover:border-red-500 cursor-pointer transition-colors">
          <div className="font-bold flex-grow-0 flex flex-col gap-0 leading-none p-2 bg-white group-hover:bg-red-500 transition-colors text-black">
            <span>{day.toUpperCase()}</span>
            <span className="text-xl">{dayNumber}</span>
            <span>{time.toUpperCase()}</span>
          </div>
          <div className="text-lg flex-1 flex-grow p-2">
            {tournament.name}{' '}
            {tournament.organizerId === 30148 && " - Women's tournament"}
          </div>
        </div>
        <div className="border font-bold border-white group-hover:border-red-500 transition-colors  border-t-0 p-1 text-center">
          REGISTER
        </div>
      </a>
    </li>
  )
}
export const TournamentList = () => {
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

  const tournamentsByMonth2025 = [...allTournaments]
    .sort(byStartDate)
    .reduce<Record<string, Tournament[]>>((acc, tnmt) => {
      const tnmtDate = new Date(tnmt.startLocal)
      if (tnmtDate.getFullYear() !== 2025) {
        return acc
      }
      const month = tnmtDate.toLocaleString('default', { month: 'long' })

      if (!acc[month]) {
        acc[month] = [tnmt]
      } else {
        acc[month].push(tnmt)
      }
      return acc
    }, {})

  const errorLoadingTournaments =
    openTournamentData.isError || openTournamentData2.isError
  const loading =
    openTournamentData.isLoading ||
    openTournamentData2.isLoading ||
    loadingWomensTournaments

  return (
    <div className="col-span-1 xl:col-span-2 mt-6 lg:mt-0">
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Pinball Tournaments
      </h2>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-4">
        2025 Event Calendar - All skill levels welcome!
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
        <ul className="font-source text-md sm:text-sm grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-10">
          {Object.entries(tournamentsByMonth2025).map(
            ([month, tournaments]) => {
              return (
                <div key={month} className="text-left">
                  <h3 className="font-semibold text-lg">{month}</h3>
                  {tournaments.map((t) => {
                    return <TournamentListItem tournament={t} key={t.name} />
                  })}
                </div>
              )
            }
          )}
        </ul>
      )}
    </div>
  )
}
