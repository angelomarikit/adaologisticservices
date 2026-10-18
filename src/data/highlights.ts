import { galleryCategories } from './gallery.manifest'

/** Real photos for hero / bento — never the flat marketing banner (avoids stretch). */
export const showcasePhotos = {
  heroMain: galleryCategories.find((c) => c.slug === 'facility')?.images[6] ?? '/gallery/facility/852110966_1908201690549701_6616920507626302637_n.webp',
  heroSecondary:
    galleryCategories.find((c) => c.slug === 'trucking')?.images[3] ??
    '/gallery/trucking/849890109_1768664841060742_4594669877486865800_n.jpg',
  heroTertiary:
    galleryCategories.find((c) => c.slug === 'lift-off-out')?.images[6] ??
    '/gallery/lift-off-out/856334068_1544201887473104_5843689868523790338_n.webp',
  about:
    galleryCategories.find((c) => c.slug === 'container-safekeeping')?.images[0] ??
    '/gallery/container-safekeeping/848971792_1758415878598650_4297971637913134427_n.webp',
} as const

export const pillars = [
  {
    title: 'Corridor-ready fleet',
    body: 'Trucks and yard equipment positioned for NLEX Marilao moves — less idle time between port, yard, and customer site.',
  },
  {
    title: 'Handled with care',
    body: 'Lift-on/lift-off and safekeeping are coordinated in one place so containers are tracked from arrival to release.',
  },
  {
    title: 'Direct line to ops',
    body: 'Speak with the team on the ground — both hotlines ring through for quotes, scheduling, and status checks.',
  },
] as const

export const processSteps = [
  { step: '01', title: 'Inquiry & scope', detail: 'Share cargo type, container size, timeline, and pickup or delivery points.' },
  { step: '02', title: 'Plan & quote', detail: 'We align trucking, yard space, or lift requirements and confirm availability.' },
  { step: '03', title: 'Execute', detail: 'Fleet dispatch, safekeeping, or crane work — documented handoffs at each stage.' },
  { step: '04', title: 'Release', detail: 'Final pull-out or delivery with clear communication until the job is closed.' },
] as const
