import {HangoutGroupContextProvider} from '@/context/HangoutGroupContext'
import {StudyGroupContextProvider} from '@/context/StudyGroupContext'
import {UserContextProvider} from '@/context/UserContext'
import {UserGroupContextProvider} from '@/context/UserGroupContext'
import React, {PropsWithChildren} from 'react'

function ContextProvider ({children}: PropsWithChildren<{}>) {
  return (
    <UserContextProvider>
      <UserGroupContextProvider>
        <StudyGroupContextProvider>
          <HangoutGroupContextProvider>
            {children}
          </HangoutGroupContextProvider>
        </StudyGroupContextProvider>
      </UserGroupContextProvider>
    </UserContextProvider>
  )
}

export default ContextProvider