import {Colors} from '@/constants/Colors';
import {Pomodoro, PomodoroStatus} from '@/types/pomodoro.type';
import React, {useEffect, useMemo, useState} from 'react'

export const statusColor: Record<PomodoroStatus, string> = {
  idle: '#232323',
  break: '#8b5cf6',
  focus: Colors.primary,
  "long-break": Colors.primary,
}

function usePomodoroCycle (pomodoro: Pomodoro | null) {
  const [progress, setProgress] = useState(pomodoro?.progress || 0)
  const [time, setTime] = useState(pomodoro ? (pomodoro?.status === 'break' ? (pomodoro?.shortBreakDuration - pomodoro?.progress) : (pomodoro?.focusDuration - pomodoro?.progress)) : 0)
  const [status, setStatus] = useState<PomodoroStatus>(pomodoro?.status || 'idle')
  const [cycles, setCycles] = useState(pomodoro?.currentRound || 1);

  useEffect(() => {
    if(!pomodoro || status === 'idle') return;
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
  }, [status, time, pomodoro])

  const handleCycleCompletion = () => {
    if(!pomodoro) return;
    if(status === 'focus') {
      setStatus('break');
      setProgress(prev => prev + 1)
      setTime(pomodoro?.shortBreakDuration)
    } else {
      if(cycles === pomodoro.cycleCount) {
        setCycles(1)
      } else {
        setCycles((prev) => prev + 1);
      }
      setStatus('focus');
      setTime(pomodoro?.focusDuration)
    }
    setProgress(0)
  };

  // const handle

  return {
    progress,
    time,
    status,
    cycles,
    setStatus,
    setCycles,
    handleCycleCompletion,
  }
}

export default usePomodoroCycle