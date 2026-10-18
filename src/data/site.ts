export const site = {
  name: 'ADAO Logistic Services',
  shortName: 'ADAO',
  taglinePrimary: 'SAFE • FAST • RELIABLE',
  taglineSecondary: 'YOUR CARGO, OUR PRIORITY',
  phones: [
    { display: '0917 255 9748', tel: '09172559748' },
    { display: '0956 081 4189', tel: '09560814189' },
  ],
  email: 'adaologistics2024@gmail.com',
  address:
    'No. 7 Laot, Brgy. Patubig, Southbound Service Road, Marilao Exit, Bulacan, NLEX',
  mapQuery:
    'No. 7 Laot, Brgy. Patubig, Southbound Service Road, Marilao Exit, Bulacan, NLEX',
  businessNameRegistration: {
    number: '5726281',
    registeredName: 'ADAO LOGISTICS SERVICES',
    owner: 'Manny Baccol Adao',
    validThrough: '30 January 2029',
  },
} as const

export type ServiceItem = {
  slug: string
  title: string
  summary: string
}

export const services: ServiceItem[] = [
  {
    slug: 'trucking',
    title: 'Trucking Services',
    summary:
      'Dependable road transport for containers and general cargo across Bulacan and the greater Luzon corridor.',
  },
  {
    slug: 'sea-freight',
    title: 'Sea Freight Forwarding',
    summary:
      'Forwarding support aligned with vessel cut-offs, port procedures, and coordinated inland delivery.',
  },
  {
    slug: 'container-safekeeping',
    title: 'Container Safekeeping',
    summary:
      'Monitored yard space for loaded or empty units — organized staging before dispatch or customer pickup.',
  },
  {
    slug: 'lift-off-out',
    title: 'Lift Off / Out',
    summary:
      'Crane-assisted lift-on/lift-off and careful positioning for trucks, chassis, and onsite handling.',
  },
]
