export const LOCATIONS: Record<string, MachineLocation> = {
  FIBBERS: {
    name: 'Fibber Magees',
    url: 'https://www.google.com/maps/place/Fibber+Magees/@53.3529458,-6.2603666,15z/data=!4m2!3m1!1s0x0:0xa9e461e298020e37?sa=X&ved=2ahUKEwjg5oDV1-GDAxW6TUEAHYbsAH8Q_BJ6BAgTEAA'
  },
  MURRAYS: {
    name: "Murray's Bar",
    url: 'https://www.google.com/maps/place/Fibber+Magees/@53.3529458,-6.2603666,15z/data=!4m2!3m1!1s0x0:0xa9e461e298020e37?sa=X&ved=2ahUKEwjg5oDV1-GDAxW6TUEAHYbsAH8Q_BJ6BAgTEAA'
  },
  BACK_PAGE: {
    name: 'The Back Page',
    url: 'https://www.google.com/maps/place/Fibber+Magees/@53.3529458,-6.2603666,15z/data=!4m2!3m1!1s0x0:0xa9e461e298020e37?sa=X&ved=2ahUKEwjg5oDV1-GDAxW6TUEAHYbsAH8Q_BJ6BAgTEAA'
  },
  NONE: {
    name: 'None',
    url: ''
  }
}

export const MACHINES: Machine[] = [
  {
    name: 'Foo Fighters (Pro)',
    url: 'https://sternpinball.com/game/foo-fighters/',
    manufacturer: 'Stern',
    year: '2023',
    location: LOCATIONS.BACK_PAGE,
    howTo: 'https://www.youtube.com/watch?v=CdUOl1aVCzo'
  },
  {
    name: 'Black Knight Sword of Rage (Pro)',
    url: 'https://sternpinball.com/game/black-knight/',
    manufacturer: 'Stern',
    year: '2019',
    location: LOCATIONS.FIBBERS,
    howTo: 'https://www.youtube.com/watch?v=musEx6lbttQ'
  },
  {
    name: 'The Getaway: High Speed II',
    url: 'https://www.ipdb.org/machine.cgi?id=1000',
    manufacturer: 'Williams',
    year: '1992',
    location: LOCATIONS.MURRAYS,
    howTo: 'https://www.youtube.com/watch?v=Elz5Ksr4Tzk'
  },
  {
    name: 'Fish Tales',
    url: 'https://www.ipdb.org/machine.cgi?id=861',
    manufacturer: 'Williams',
    year: '1992',
    location: LOCATIONS.NONE,
    howTo: 'https://www.youtube.com/watch?v=60a_nKnEdUA'
  },
  {
    name: 'Who Dunnit?',
    url: 'https://www.ipdb.org/machine.cgi?id=3685',
    manufacturer: 'Bally',
    year: '1995',
    location: LOCATIONS.FIBBERS,
    howTo: 'https://www.youtube.com/watch?v=wM5nkmtDcx8'
  },
  {
    name: 'Deadpool (Pro)',
    url: 'https://www.ipdb.org/machine.cgi?id=6558',
    manufacturer: 'Stern',
    year: '2018',
    location: LOCATIONS.FIBBERS,
    howTo: 'https://youtu.be/7ZMPyTqiot4?si=bGfljocCaTRlQOD9'
  },
  {
    name: 'Guardians of the Galaxy (Pro)',
    url: 'https://www.ipdb.org/machine.cgi?gid=6474',
    manufacturer: 'Stern',
    year: '2017',
    location: LOCATIONS.FIBBERS,
    howTo: 'https://youtu.be/BOP6gXVB0VU?si=pNGgDcWO1Ji6wYRt'
  },
  {
    name: 'James Bond (Pro)',
    url: 'https://www.ipdb.org/machine.cgi?id=6896',
    manufacturer: 'Stern',
    year: '2022',
    location: LOCATIONS.BACK_PAGE,
    howTo: 'https://www.youtube.com/watch?v=GnQr9qIZz_0'
  },
  {
    name: 'Jurassic Park (Pro)',
    url: 'https://www.ipdb.org/machine.cgi?gid=6573',
    manufacturer: 'Stern',
    year: '2019',
    location: LOCATIONS.BACK_PAGE,
    howTo: 'https://youtu.be/vVs_0jqCPGA?si=-hFnJzOviJBijalx'
  },
  {
    name: 'Avengers: Infinity Quest (Pro)',
    url: 'https://www.ipdb.org/machine.cgi?id=6754',
    manufacturer: 'Stern',
    year: '2020',
    location: LOCATIONS.BACK_PAGE,
    howTo: 'https://youtu.be/2_xcLBHzaSo?si=Lr1nx9h2c3m88QKr'
  }
]
