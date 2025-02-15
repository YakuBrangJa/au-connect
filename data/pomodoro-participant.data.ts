import {Participants} from "@/types/pomodoro.type";
import {call_image} from "@/utils/getPomodoroImg";

export const session_participants: Participants[] = [
  {
    id: "1",
    name: "Alice Johnson",
    callImg: call_image[`pomodoro_1`],
    voice_on: true,
    camera_on: false,
  },
  {
    id: "2",
    name: "Bob Smith",
    callImg: call_image[`pomodoro_2`],
    voice_on: false,
    camera_on: true,
  },
  {
    id: "3",
    name: "Charlie Lee",
    callImg: call_image[`pomodoro_3`],
    voice_on: true,
    camera_on: true,
  },
  {
    id: "4",
    name: "Diana Patel",
    callImg: call_image[`pomodoro_4`],
    voice_on: false,
    camera_on: false,
  },
  {
    id: "5",
    name: "Ethan Brown",
    callImg: call_image[`pomodoro_5`],
    voice_on: true,
    camera_on: false,
  },
];
