import React from 'react'

export const Events = () => {
  return (
    <div>
      <h2>Events</h2>
      <p className="max-w-prose">More info on events</p>
      <ul>
        <li>
          2023.07.26:{' '}
          <a
            href="https://next.matchplay.events/tournaments/109852"
            className="underline underline-offset-2"
          >
            Tilted Token 0.3
          </a>
        </li>
        <li>
          2023.08.09:{' '}
          <a
            href="https://next.matchplay.events/tournaments/109854"
            className="underline underline-offset-2"
          >
            Tilted Token 0.4
          </a>
        </li>
        <li>
          2023.08.23:{' '}
          <a
            href="https://next.matchplay.events/tournaments/109855"
            className="underline underline-offset-2"
          >
            Tilted Token 1.0 - first IFPA registered tournament
          </a>
        </li>
      </ul>
    </div>
  )
}
