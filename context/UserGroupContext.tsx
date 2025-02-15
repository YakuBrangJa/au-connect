import {study_group_data} from "@/data/study-group.data";
import {HangoutGroup} from "@/types/hangout-group.type";
import {StudyGroup} from "@/types/study-group.type";
import {getHangoutStudyImg} from "@/utils/getHangoutCoverImg";
import {getStudyCoverImg} from "@/utils/getStudyCoverImg";
import {createContext, PropsWithChildren, useContext, useState} from "react";

type UserGroupContextType = {
  studyGroups: StudyGroup[]
  createStudyGroup: (group: StudyGroup) => void
  deleteStudyGroup: (id: string, index?: number) => void
  hangoutGroups: HangoutGroup[]
  createHangoutGroup: (group: HangoutGroup) => void
  deleteHangoutGroup: (id: string, index?: number) => void
  joinedStudyGroups: StudyGroup[]
  joinStudyGroup: (group: StudyGroup) => void
  leaveStudyGroup: (id: string, index?: number) => void
  joinedHangoutGroups: HangoutGroup[]
  joinHangoutGroup: (group: HangoutGroup) => void
  leaveHangoutGroup: (id: string, index?: number) => void
}
// @ts-ignore 
const UserGroupContext = createContext<UserGroupContextType>(null)

export function UserGroupContextProvider ({
  children
}: PropsWithChildren<{}>) {
  const [studyGroups, setStudyGroups] = useState<StudyGroup[]>([])
  const [hangoutGroups, setHangoutGroups] = useState<HangoutGroup[]>([])

  const [joinedStudyGroups, setJoinedStudyGroups] = useState<StudyGroup[]>([
    {
      id: '6',
      createdAt: new Date('2025-01-25T13:20:00'),
      title: 'Language Learning Techniques',
      time: new Date('2025-02-06T11:00:00'),
      location: 'Language Lab 1',
      description: 'Discover effective methods for mastering new languages quickly and efficiently. From immersion techniques to mnemonic devices, this session provides tools and tips to boost your fluency and confidence.',
      participantLimit: undefined,
      participantCount: 10,
      category: ['language'],
      coverURL: getStudyCoverImg(),
      organiser: {id: '106', name: 'Frank Miller'}
    },
    {
      id: '7',
      createdAt: new Date('2025-01-26T15:10:00'),
      title: '3D Printing in Engineering',
      time: new Date('2025-02-07T16:00:00'),
      location: 'Engineering Workshop',
      description: 'Learn how 3D printing technology is revolutionizing engineering. This hands-on session covers basic techniques, materials, and applications of 3D printing in prototyping and manufacturing.',
      participantLimit: 20,
      participantCount: 18,
      category: ['engineering', 'technology'],
      coverURL: getStudyCoverImg(),
      organiser: {id: '107', name: 'George Williams'}
    },
  ])
  const [joinedHangoutGroups, setJoinedHangoutGroups] = useState<HangoutGroup[]>([
    {
      id: '6',
      createdAt: new Date(),
      title: 'Foodie Meet-up',
      time: new Date('2025-01-28T12:00:00'),
      location: 'Main Street Café',
      description: 'Let’s share our love for good food! Explore new restaurants with fellow foodies.',
      category: ['food'],
      coverURL: getHangoutStudyImg(),
      participantCount: 7,
      participantLimit: 15,
      organiser: {id: '106', name: 'Diana Black'},
    },
    {
      id: '7',
      createdAt: new Date(),
      title: 'Event Planning for Charity',
      time: new Date('2025-02-07T16:00:00'),
      location: 'Student Hall',
      description: 'Help plan an event for a good cause. Let’s work together to make a difference!',
      category: ['event'],
      coverURL: getHangoutStudyImg(),
      participantCount: 9,
      participantLimit: 20,
      organiser: {id: '107', name: 'Ethan Grey'},
    },
  ])



  const createStudyGroup = (group: StudyGroup) => {
    setStudyGroups(prev => [...prev, group])
    setJoinedStudyGroups(prev => [...prev, group])
  }

  const deleteStudyGroup = (id: string, index?: number) => {
    setStudyGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
    setJoinedStudyGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  const createHangoutGroup = (group: HangoutGroup) => {
    setHangoutGroups(prev => [...prev, group])
    setJoinedHangoutGroups(prev => [...prev, group])
  }

  const deleteHangoutGroup = (id: string, index?: number) => {
    setHangoutGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
    setJoinedHangoutGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  const joinStudyGroup = (group: StudyGroup) => {
    setJoinedStudyGroups(prev => [...prev, group])
  }

  const leaveStudyGroup = (id: string, index?: number) => {
    setJoinedStudyGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  const joinHangoutGroup = (group: HangoutGroup) => {
    setJoinedHangoutGroups(prev => [...prev, group])
  }

  const leaveHangoutGroup = (id: string, index?: number) => {
    setJoinedHangoutGroups(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  return (
    <UserGroupContext.Provider value={{
      studyGroups,
      createStudyGroup,
      deleteStudyGroup,
      hangoutGroups,
      createHangoutGroup,
      deleteHangoutGroup,
      joinedStudyGroups,
      joinStudyGroup,
      leaveStudyGroup,
      joinedHangoutGroups,
      joinHangoutGroup,
      leaveHangoutGroup,
    }}>
      {children}
    </UserGroupContext.Provider>
  )
}

export function useUserGroup () {
  return useContext(UserGroupContext)
}
