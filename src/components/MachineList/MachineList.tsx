import React from 'react'

export const MachineList = ({ machines }: { machines: Machine[] }) => {
  return (
    <div>
      <h2 className="text-xs font-montserrat uppercase font-extrabold mb-2">
        Our Machines
      </h2>
      <ul className="font-source space-y-6 sm:space-y-4 sm:text-base">
        {machines.map((machine) => {
          return (
            <li key={machine.name}>
              <a href={machine.url} className="underline underline-offset-2">
                <span>{machine.name}&nbsp;</span>
                <span>{`(${machine.manufacturer} ${machine.year})`}</span>
              </a>
              <div className="mt-1 sm:mt-0 flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:gap-2">
                <a href={machine.locationUrl} className="text-sm">
                  Location:{' '}
                  <span className={machine.locationUrl ? 'underline' : ''}>
                    {machine.location}
                  </span>
                </a>
                <span className="hidden sm:inline">{' * '}</span>
                <a href={machine.howTo} className="text-sm underline">
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
