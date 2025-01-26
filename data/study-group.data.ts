import {cover_images} from "@/constants/cover_images";
import {StudyGroup} from "@/types/study-group.type";

export const study_group_data: StudyGroup[] = [
  {
    id: '1',
    title: 'Business Strategies Workshop',
    time: new Date('2025-02-01T10:00:00'),
    location: 'Conference Room A',
    description: 'Learn advanced business strategies in this interactive workshop.',
    participantLimit: 30,
    participantCount: 15,
    category: ['business'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '2',
    title: 'Physics Study Group',
    time: new Date('2025-02-02T15:00:00'),
    location: 'Science Lab 2',
    description: 'Collaborative study session focused on physics problem-solving.',
    participantLimit: 20,
    participantCount: 12,
    category: ['science', 'engineering'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '3',
    title: 'Introduction to Music Theory',
    time: new Date('2025-02-03T17:30:00'),
    location: 'Music Room, Building B',
    description: 'Understand the basics of music theory with hands-on activities.',
    participantLimit: 25,
    participantCount: 20,
    category: ['art', 'music'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '4',
    title: 'AI in Architecture',
    time: new Date('2025-02-04T14:00:00'),
    location: 'Lecture Hall C',
    description: 'Discuss the impact of AI on modern architectural design.',
    participantLimit: 40,
    participantCount: 35,
    category: ['architecture', 'technology'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '5',
    title: 'Philosophy of Ethics',
    time: new Date('2025-02-05T10:00:00'),
    location: 'Room 305, Humanities Building',
    description: 'An engaging discussion on the philosophy of ethics in daily life.',
    participantLimit: 20,
    participantCount: 10,
    category: ['philosophy', 'language'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '6',
    title: 'Language Learning Techniques',
    time: new Date('2025-02-06T11:00:00'),
    location: 'Language Lab 1',
    description: 'Explore effective techniques for mastering new languages.',
    participantLimit: 15,
    participantCount: 10,
    category: ['language'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '7',
    title: '3D Printing in Engineering',
    time: new Date('2025-02-07T16:00:00'),
    location: 'Engineering Workshop',
    description: 'Hands-on session with 3D printing technology for engineering.',
    participantLimit: 20,
    participantCount: 18,
    category: ['engineering', 'technology'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '8',
    title: 'Art and Design Showcase',
    time: new Date('2025-02-08T13:00:00'),
    location: 'Art Gallery, Building D',
    description: 'Showcase your art and design projects and get feedback.',
    participantLimit: 50,
    participantCount: 45,
    category: ['art', 'technology'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '9',
    title: 'Advanced Coding Bootcamp',
    time: new Date('2025-02-09T09:00:00'),
    location: 'Tech Lab 4',
    description: 'Level up your coding skills in this advanced bootcamp.',
    participantLimit: 35,
    participantCount: 28,
    category: ['technology'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
  {
    id: '10',
    title: 'History of Music Evolution',
    time: new Date('2025-02-10T15:30:00'),
    location: 'Room 108, Music Department',
    description: 'Dive into the fascinating history of music evolution across cultures.',
    participantLimit: 25,
    participantCount: 20,
    category: ['art', 'music'],
    coverURL: cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`],
  },
];
