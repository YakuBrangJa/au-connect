export type HangoutGroupCategory = 'sport' | 'gaming' | 'music' | 'arcade' | 'travel' | 'food' | 'event' | 'movie'

export type HangoutGroup = {
  id: string,
  title: string,
  time: Date,
  location: string,
  description: string,
  participantLimit?: number,
  category: HangoutGroupCategory[]
  coverURL: any
} 