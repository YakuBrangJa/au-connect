import {study_group_data} from "@/data/study-group.data";
import {StudyGroup} from "@/types/study-group.type";
import {createContext, PropsWithChildren, useContext, useState} from "react";

type StudyGroupContextType = {
  data: StudyGroup[]
  addGroup: (group: StudyGroup) => void
  deleteGroup: (id: string, index?: number) => void
}

// @ts-ignore
const StudyGroupContext = createContext<StudyGroupContextType>(null)

export function StudyGroupContextProvider ({
  children
}: PropsWithChildren<{}>) {
  const [data, setData] = useState(study_group_data)

  const addGroup = (group: StudyGroup) => {
    setData(prev => [...prev, group])
  }

  const deleteGroup = (id: string, index?: number) => {
    setData(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  return (
    <StudyGroupContext.Provider value={{
      data,
      addGroup,
      deleteGroup
    }}>
      {children}
    </StudyGroupContext.Provider>
  )
}

export function useStudyGroup () {
  return useContext(StudyGroupContext)
}
