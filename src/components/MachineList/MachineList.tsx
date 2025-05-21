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
      <h2 className="text-xs font-montserrat uppercase font-extrabold  mt-10 mb-2">
        Our Pinball Locations
      </h2>
      <ul className="font-source text-md sm:text-lg grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-10">
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
              <ul className="list-disc list-outside ms-8 font-source space-y-2 sm:space-y-2 sm:text-base mt-3">
                {pins.map((machine) => {
                  return (
                    <li key={machine.name}>
                      <a
                        href={machine.url}
                        className="hover:underline focus:underline underline-offset-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div>{machine.name}</div>
                        <div className="text-sm">{`(${machine.manufacturer} ${machine.year})`}</div>
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
