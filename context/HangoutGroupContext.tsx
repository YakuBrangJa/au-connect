import {hangout_group_data} from "@/data/hangout-group.data";
import {HangoutGroup} from "@/types/hangout-group.type";
import {createContext, PropsWithChildren, useContext, useState} from "react";

type HangoutGroupContextType = {
  data: HangoutGroup[]
  addGroup: (group: HangoutGroup) => void
  deleteGroup: (id: string, index?: number) => void
}
// @ts-ignore
const HangoutGroupContext = createContext<HangoutGroupContextType>(null)

export function HangoutGroupContextProvider ({
  children
}: PropsWithChildren<{}>) {
  const [data, setData] = useState(hangout_group_data)

  const addGroup = (group: HangoutGroup) => {
    setData(prev => [...prev, group])
  }

  const deleteGroup = (id: string, index?: number) => {
    setData(prev => {
      return prev.filter(group => group.id !== id)
    })
  }

  return (
    <HangoutGroupContext.Provider value={{
      data,
      addGroup,
      deleteGroup
    }}>
      {children}
    </HangoutGroupContext.Provider>
  )
}

export function useHangoutGroup () {
  return useContext(HangoutGroupContext)
}
