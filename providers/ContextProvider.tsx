import {HangoutGroupContextProvider} from '@/context/HangoutGroupContext'
import {PomodoroContextProvider} from '@/context/PomodoroContext'
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
            <PomodoroContextProvider>
            {children}
            </PomodoroContextProvider>
          </HangoutGroupContextProvider>
        </StudyGroupContextProvider>
      </UserGroupContextProvider>
    </UserContextProvider>
  )
}

export default ContextProvider