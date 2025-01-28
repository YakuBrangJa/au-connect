import {study_group_data} from "@/data/study-group.data";
import {HangoutGroup} from "@/types/hangout-group.type";
import {StudyGroup} from "@/types/study-group.type";
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

  const [joinedStudyGroups, setJoinedStudyGroups] = useState<StudyGroup[]>([])
  const [joinedHangoutGroups, setJoinedHangoutGroups] = useState<HangoutGroup[]>([])



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
