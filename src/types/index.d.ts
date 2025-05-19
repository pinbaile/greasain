declare module '*.svg' {
  import React = require('react')
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

type Machine = {
  name: string
  url: string
  manufacturer: string
  year: string
  location: MachineLocation
  howTo: string
}

type MachineLocation = {
  name: string
  url: string
}

type Tournament = {
  startLocal: string
  name: string
  tournamentId: string
  organizerId: number
}

interface FetchedData<T> {
  data: T | undefined
  isLoading: boolean
  isError: boolean
}

declare module '*.jpg'
