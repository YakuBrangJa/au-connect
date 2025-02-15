export type PomodoroStatus = 'idle' | 'focus' | 'break' | 'long-break'

export type Pomodoro = {
  id: string,
  title: string,
  description?: string,
  status: PomodoroStatus
  progress: number,
  focusDuration: number,
  shortBreakDuration: number,
  longBreakDuration: number,
  cycleCount: number,
  repeatCount: number,
  currentLab: number,
  currentRound: number,
  public: boolean,
  participantCount: number,
  creator: {
    id: string,
    name: string,
  }
}

export type Participants = {
  id: string,
  name: string,
  callImg: string,
  voice_on: boolean,
  camera_on: boolean,
}