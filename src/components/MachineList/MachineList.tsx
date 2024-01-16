import React from 'react'

export const MachineList = ({ machines }: { machines: Machine[] }) => {
  return (
    <div>
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Our Machines
      </h2>
      <ul className="font-source space-y-4 sm:space-y-2 text-xs sm:text-sm">
        {machines.map((machine) => {
          return (
            <li key={machine.name}>
              <a href={machine.url} className="underline underline-offset-2">
                <span>{machine.name}&nbsp;</span>
                <span>{`(${machine.manufacturer} ${machine.year})`}</span>
              </a>
              <div className="mt-1 sm:mt-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:gap-2">
                <a href={machine.locationUrl} className="text-xs">
                  Location:{' '}
                  <span className={machine.locationUrl ? 'underline' : ''}>
                    {machine.location}
                  </span>
                </a>
                <span className="hidden sm:inline">{' * '}</span>
                <a href={machine.howTo} className="text-xs underline">
                  How to play
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
