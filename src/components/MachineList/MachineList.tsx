import React from 'react'

export const MachineList = ({
  machines,
  locations
}: {
  machines: Machine[]
  locations: MachineLocation[]
}) => {
  return (
    <div>
      <h1 className="text-lg lg:text-5xl font-montserrat uppercase font-extrabold mb-2">
        Dublin&apos;s Home <br className="hidden lg:block" />
        for Pinball
      </h1>
      <p className="mb-10 text-xl">
        Pinbaile brings pinball fun to businesses, events, and communities
        across Dublin. Whether you&apos;re looking to add a machine to your
        venue or run a one-off event, we offer options to suit your needs. Our
        mission is simple: grow the love of pinball across Ireland and make it
        accessible to everyone. Are you ready to flip?
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
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Our Locations
      </h2>
      <ul className="font-source space-y-6 sm:space-y-4 sm:text-xl">
        {locations.map((loc) => {
          const pins = machines.filter((m) => m.location.name === loc.name)
          const pinCount = pins.length
          return (
            <li key={loc.name}>
              {' '}
              <a
                href={loc.url}
                className="underline underline-offset-2 font-bold"
                target="_blank"
                rel="noreferrer"
              >{`${loc.name} - ${pinCount} ${
                pinCount === 1 ? 'pin' : 'pins'
              }`}</a>
              <ul className=" list-disc list-inside font-source space-y-2 sm:space-y-2 sm:text-base mt-3">
                {pins.map((machine) => {
                  return (
                    <li key={machine.name}>
                      <a
                        href={machine.url}
                        className="hover:underline focus:underline underline-offset-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{machine.name}&nbsp;</span>
                        <span>{`(${machine.manufacturer} ${machine.year})`}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      {/* <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2 mt-10">
        Our Pinballs
      </h2>
      <ul className="font-source space-y-6 sm:space-y-4 sm:text-base">
        {[...machines]
          .sort((m1, m2) => {
            if (m1.location.name < m2.location.name) {
              return -1
            }
            if (m1.location.name > m2.location.name) {
              return 1
            }
            return 0
          })
          .map((machine) => {
            return (
              <li key={machine.name}>
                <a
                  href={machine.url}
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{machine.name}&nbsp;</span>
                  <span>{`(${machine.manufacturer} ${machine.year})`}</span>
                </a>
                <div className="mt-1 sm:mt-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:gap-2">
                  <a
                    href={machine.location.url}
                    className="text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Location:{' '}
                    <span className={machine.location.url ? 'underline' : ''}>
                      {machine.location.name}
                    </span>
                  </a>
                  <span className="hidden sm:inline">{' * '}</span>
                  <a
                    href={machine.howTo}
                    className="text-sm underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    How to play
                  </a>
                </div>
              </li>
            )
          })}
      </ul> */}
    </div>
  )
}
