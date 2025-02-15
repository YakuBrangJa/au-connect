import {Pomodoro, PomodoroStatus} from "@/types/pomodoro.type";
import {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";

export type ActiveSession = {
  id: string,
  time: number,
  progress: number,
  status: PomodoroStatus,
  cycles: number,
  isPause: boolean,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  setStatus: React.Dispatch<React.SetStateAction<PomodoroStatus>>,
  setCycles: React.Dispatch<React.SetStateAction<number>>,
  setIsPause: React.Dispatch<React.SetStateAction<boolean>>,
}

type PomodoroContextType = {
  pomodoro: Pomodoro | null
  setPomodoro: React.Dispatch<React.SetStateAction<Pomodoro | null>>
  setSession: (session: Pomodoro, pause: boolean) => void
  endSession: () => void
  activeSession: ActiveSession
}

// @ts-ignore
const PomodoroContext = createContext<PomodoroContextType>(null)

export function PomodoroContextProvider ({
  children
}: PropsWithChildren<{}>) {
  const [pomodoro, setPomodoro] = useState<Pomodoro | null>(null)

  const [progress, setProgress] = useState(0)
  const [time, setTime] = useState(0)
  const [status, setStatus] = useState<PomodoroStatus>('idle')
  const [cycles, setCycles] = useState(1);
  const [isPause, setIsPause] = useState(true)

  useEffect(() => {
    if(isPause) return;
    let timer: NodeJS.Timeout;
    if(time > 0) {
      timer = setInterval(() => {
        setTime(prev => prev - 1)
        setProgress(prev => prev + 1)
      }, 1000)
    } else {
      handleCycleCompletion()
    }

    return () => clearInterval(timer)
  }, [status, time, isPause])

  const handleCycleCompletion = () => {
    if(!pomodoro) return;
    if(status === 'focus') {
      setStatus('break');
      setTime(pomodoro?.shortBreakDuration)
      setProgress(0)
    } else {
      setStatus('focus');
      setTime(pomodoro?.focusDuration)
      setCycles((prev) => prev + 1);
      setProgress(0)
    }
  };

  const setSession = (session: Pomodoro, pause: boolean = false) => {
    console.log(session)
    setPomodoro(session)
    setProgress(session?.progress || 0)
    setTime(session.status === 'break' ? (session.shortBreakDuration - session.progress) : (session.focusDuration - session.progress))
    setStatus(session.status)
    setCycles(session.currentRound)
    setIsPause(pause)
  }

  const endSession = () => {
    setPomodoro(null)
    setProgress(0)
    setTime(0)
    setStatus('idle')
    setCycles(1)
    setIsPause(true)
  }


  return (
    <PomodoroContext.Provider value={{
      pomodoro,
      setPomodoro,
      setSession,
      endSession,
      activeSession: {
        id: pomodoro?.id || '',
        progress,
        time,
        status,
        cycles,
        setTime,
        setStatus,
        setCycles,
        isPause,
        setIsPause,
      }
    }}>
      {children}
    </PomodoroContext.Provider>
  )
}

export function useActiveSession () {
  return useContext(PomodoroContext)
}
