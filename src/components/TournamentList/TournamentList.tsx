import React from 'react'
import santaPoster from '../../images/xmas-party.jpg'
import iecsLogo from '../../images/ifpa-irish-championship-series.jpg'

const getTnmtsBySeries = (tournaments: Tournament[]) =>
  tournaments.reduce(
    (
      tnmts: {
        tiltedTokenTnmts: Tournament[]
        fibbersTnmts: Tournament[]
        other: Tournament[]
      },
      t
    ) => {
      if (t.name.includes('Tilted Token')) {
        tnmts.tiltedTokenTnmts.push(t)
      } else if (t.name.includes('Flip-off')) {
        tnmts.fibbersTnmts.push(t)
      }
      return tnmts
    },
    { tiltedTokenTnmts: [], fibbersTnmts: [], other: [] }
  )

const byStartDate = (a: Tournament, b: Tournament) =>
  a.startLocal < b.startLocal ? -1 : a.startLocal > b.startLocal ? 1 : 0

const TournamentListItem = ({ tournament }: { tournament: Tournament }) => {
  return (
    <li className="list-item">
      <span className="hidden sm:inline-block">* &nbsp;</span>
      <a
        className="underline underline-offset-2"
        href={`https://app.matchplay.events/tournaments/${tournament.tournamentId}`}
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
  const { fibbersTnmts, other } = getTnmtsBySeries(tournaments)
  return (
    <div className=" col-span-1">
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Tournaments
      </h2>
      <div className="col-span-1 xl:hidden my-4">
        <a href="http://matchplay.live/santa-knockout">
          <img className="md:w-2/5 xl:w-2/3" src={santaPoster} />
        </a>
      </div>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-2">
        PINBAILE SANTA KNOCKOUT
        <br />
        <span className="text-lg">December 18th, 2024 - 7:00PM</span>
        <br />
      </h3>
      <p className="mb-6 font-normal leading-6 not-italic text-md">
        A special Christmas strike knockout tournament. Every entry goes home
        with a prize on elimination. We&apos;ll also be giving away a Teenage
        Mutant Ninja Turtles translite to one lucky player.
        <br />
        <br />
        <span>
          <span className="font-semibold">Entry:</span> One wrapped gift worth
          €5
        </span>
        <br />
        <span>
          <span className="font-semibold">Location:</span>{' '}
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48670e86ef8eb32f:0xa9e461e298020e37?sa=X&amp;ved=1t:8290&amp;ictx=111"
            className="cursor-pointer underline"
          >
            Fibber Magees
          </a>
        </span>
        <br />
        <a
          className="font-semibold underline"
          href="http://matchplay.live/santa-knockout"
        >
          REGISTER NOW
        </a>
      </p>
      <div className="col-span-1 xl:hidden my-4">
        <a href="http://matchplay.live/2024-all-ireland">
          <img className="md:w-2/5 xl:w-2/3 w-full" src={iecsLogo} />
        </a>
      </div>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-2">
        2024 IRISH CHAMPIONSHIP SERIES FINALS
        <br />
        <span className="text-lg">January 11th, 2025 - 12:30PM</span>
        <br />
      </h3>
      <p className="mb-8 font-normal leading-6 not-italic text-md">
        The top 16 ranked players in Ireland meet to compete for the title of
        2024 Irish Pinball Champion. You can view the rankings{' '}
        <a
          className="font-semibold underline"
          href="https://www.ifpapinball.com/rankings/custom_view.php?id=404"
        >
          here
        </a>
        <br />
        <span>
          <span className="font-semibold">Entry:</span> €20 - INVITATION ONLY
        </span>
        <br />
        <span>
          <span className="font-semibold">Location:</span>{' '}
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48670e86ef8eb32f:0xa9e461e298020e37?sa=X&amp;ved=1t:8290&amp;ictx=111"
            className="cursor-pointer underline"
          >
            Fibber Magees
          </a>
        </span>
      </p>
      <h3 className="text-2xl tracking-tight leading-6 font-source font-extrabold mb-2">
        FLIP-OFF @ FIBBERS
        <br />
        <span className="text-lg">Every other Wednesday - 7PM</span>
        <br />
      </h3>
      <p className="mb-2 font-normal leading-6 not-italic text-md">
        Group knockout 3 strike tournament held every other week at...
        <br />
        <span className="font-semibold">Fibber Magees: </span>
        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48670e86ef8eb32f:0xa9e461e298020e37?sa=X&amp;ved=1t:8290&amp;ictx=111"
          className="cursor-pointer underline"
        >
          <span>80-81 Parnell St, Rotunda, Dublin 1, D01 CK74</span>
        </a>
        <br />
        <span className="font-semibold block mt-2">Next meets: </span>
        {fibbersTnmts.length === 0 && `New schedule coming soon`}
      </p>
      <ul className="font-source space-y-2 text-xs sm:text-sm">
        {fibbersTnmts.sort(byStartDate).map((t) => {
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
