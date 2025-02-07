import {createContext, PropsWithChildren, useContext, useState} from "react";

export type User = {
  id: string,
  name: string,
}

type UserContextType = {
  data: User
  setUser: (data: User) => void
}

// @ts-ignore
const UserContext = createContext<UserContextType>(null)

export function UserContextProvider ({
  children
}: PropsWithChildren<{}>) {
  const [data, setData] = useState({
    id: 'user',
    name: 'Jason Wood'
  })

  const setUser = (data: User) => setData(data)

  return (
    <UserContext.Provider value={{
      data,
      setUser,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser () {
  return useContext(UserContext)
}
