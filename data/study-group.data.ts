import {cover_images} from "@/constants/cover_images";
import {StudyGroup} from "@/types/study-group.type";

export const study_group_data: StudyGroup[] = [
  {
    id: '1',
    title: 'Music Theory Discussion',
    description: 'Lorem',
    time: new Date(),
    location: 'Truelab',
    category: ['art', 'music'],
    coverURL: cover_images.cover_4
  },
  {
    id: '2',
    title: 'Micro Economy',
    description: 'Lorem',
    time: new Date(),
    location: 'Truelab',
    category: ['business'],
    coverURL: cover_images.cover_3

  },
  {
    id: '3',
    title: 'Math Discussion Group',
    description: 'Lorem',
    time: new Date(),
    location: 'Truelab',
    category: ['engineering', 'science'],
    coverURL: cover_images.cover_2

  },
  {
    id: '4',
    title: 'Design',
    description: 'Lorem',
    time: new Date(),
    location: 'VMES10',
    category: ['technology'],
    coverURL: cover_images.cover_3
  },
  {
    id: '5',
    title: 'English Conversation Practice',
    description: 'Lorem',
    time: new Date(),
    location: 'SMS',
    category: ['language'],
    coverURL: cover_images.cover_1
  },
]