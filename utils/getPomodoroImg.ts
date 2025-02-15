export const call_image: Record<string, any> = {
  pomodoro_1: require('../assets/images/pomodoro/pomodoro_1.jpeg'),
  pomodoro_2: require('../assets/images/pomodoro/pomodoro_2.jpeg'),
  pomodoro_3: require('../assets/images/pomodoro/pomodoro_3.jpeg'),
  pomodoro_4: require('../assets/images/pomodoro/pomodoro_4.jpeg'),
  pomodoro_5: require('../assets/images/pomodoro/pomodoro_5.jpeg')
}


export function getPomodoroImg (index?: number) {
  if(index) call_image[`pomodoro_${index}`]
  return call_image[`pomodoro_${Math.floor(Math.random() * 5) + 1}`]
}