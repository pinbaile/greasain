import React from 'react'

const getTnmtsBySeries = (tournaments: Tournament[]) =>
  tournaments.reduce(
    (tnmts: { tiltedTokenTnmts: Tournament[]; other: Tournament[] }, t) => {
      if (t.name.includes('Tilted Token')) {
        tnmts.tiltedTokenTnmts = [...tnmts.tiltedTokenTnmts, t]
      }
      return tnmts
    },
    { tiltedTokenTnmts: [], other: [] }
  )

const byStartDate = (a: Tournament, b: Tournament) =>
  a.startLocal < b.startLocal ? -1 : a.startLocal > b.startLocal ? 1 : 0

const TournamentListItem = ({ tournament }: { tournament: Tournament }) => {
  return (
    <li>
      <a
        className="underline underline-offset-2"
        href={`https://next.matchplay.events/tournaments/${tournament.tournamentId}`}
      >
        {new Intl.DateTimeFormat('en-IE', {
          weekday: 'short',
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(new Date(tournament.startLocal))}
      </a>
    </li>
  )
}
export const TournamentList = ({
  tournaments
}: {
  tournaments: Tournament[]
}) => {
  const { tiltedTokenTnmts, other } = getTnmtsBySeries(tournaments)
  return (
    <div>
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-4">
        Tournaments
      </h2>
      <h3 className="text-xs font-source font-extrabold italic mb-2">
        Tilted Token Series
        <br />
        <span className=" font-normal not-italic">head-to-head 3 strike</span>
      </h3>
      <ul className="font-source space-y-2 text-xs sm:text-sm">
        {tiltedTokenTnmts.sort(byStartDate).map((t) => {
          return <TournamentListItem tournament={t} key={t.name} />
        })}
      </ul>
      {other.length > 0 && (
        <>
          <h3 className="text-xs font-source font-extrabold italic mb-2">
            Other
          </h3>
          <ul className="font-source space-y-2 text-xs sm:text-sm">
            {other.sort(byStartDate).map((t) => {
              return <TournamentListItem tournament={t} key={t.name} />
            })}
          </ul>
        </>
      )}
    </div>
  )
}
