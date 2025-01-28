export type StudyGroupCategory = 'business' | 'science' | 'engineering' | 'architecture' | 'art' | 'technology' | 'philosophy' | 'language' | 'music'

export type StudyGroup = {
  id: string,
  title: string,
  time: Date,
  location: string,
  description: string,
  participantLimit?: number,
  participantCount?: number,
  category: StudyGroupCategory[]
  coverURL: any
  organiser: {
    id: string,
    name: string,
  }
} 