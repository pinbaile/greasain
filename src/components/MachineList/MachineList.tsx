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
      <a
        href="https://pinballmap.com/operators?by_operator_id=555"
        target="_blank"
        className="group w-auto inline-block"
        rel="noreferrer"
      >
        <div className="h-full text-2xl font-bold px-6 py-2.5 divide-x-2 relative flex border-2 border-black bg-white text-black transition-all duration-150 [box-shadow:5px_5px_rgb(255_255_255)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(0_0_0)]">
          FIND US ON THE PINBALL MAP
        </div>
      </a>
      <h2 className="text-xs font-montserrat uppercase font-extrabold  mt-10 mb-2">
        Our Pinball Locations
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
              >
                <h3>{`${loc.name} - ${pinCount} ${
                  pinCount === 1 ? 'pinball machine' : 'pinball machines'
                }`}</h3>
              </a>
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
    </div>
  )
}
