import {cover_images} from "@/constants/cover_images";
import {StudyGroup} from "@/types/study-group.type";
import {getStudyCoverImg} from "@/utils/getStudyCoverImg";

export const study_group_data: StudyGroup[] = [
  {
    id: '9',
    createdAt: new Date('2025-02-24T15:10:00'),
    title: 'Advanced Coding Bootcamp',
    time: new Date('2025-03-09T09:00:00'),
    location: 'Tech Lab 4',
    description: 'Take your coding skills to the next level in this intensive bootcamp. Topics include algorithms, data structures, and best practices for building scalable applications. Ideal for developers ready to tackle advanced challenges.',
    participantLimit: 35,
    participantCount: 28,
    category: ['technology'],
    coverURL: require('../assets/images/user-image/coding.jpg'),
    organiser: {id: '106', name: 'Frank Miller'}
  },
  {
    id: '2',
    createdAt: new Date('2025-01-21T09:30:00'),
    title: 'Physics Study Group',
    time: new Date('2025-02-02T15:00:00'),
    location: 'Science Lab 2',
    description: 'This study group focuses on solving challenging physics problems through collaboration and discussion. Perfect for students looking to enhance their understanding of complex topics such as mechanics, thermodynamics, and quantum theory.',
    participantLimit: 20,
    participantCount: 12,
    category: ['science', 'engineering'],
    coverURL: require('../assets/images/user-image/physics.webp'),
    organiser: {id: '102', name: 'Bob Smith'}
  },
  {
    id: '1',
    createdAt: new Date('2025-01-20T08:00:00'),
    title: 'Business Strategies Workshop',
    time: new Date('2025-02-01T10:00:00'),
    location: 'Conference Room A',
    description: 'Join this interactive workshop designed to teach advanced business strategies and decision-making techniques. You will explore case studies, collaborate on real-world challenges, and gain insights into the best practices of successful entrepreneurs and managers.',
    participantLimit: 30,
    participantCount: 15,
    category: ['business'],
    coverURL: getStudyCoverImg(),
    organiser: {id: '101', name: 'Alice Johnson'}
  },
  {
    id: '3',
    createdAt: new Date('2025-01-22T14:45:00'),
    title: 'Introduction to Music Theory',
    time: new Date('2025-02-03T17:30:00'),
    location: 'Music Room, Building B',
    description: 'Dive into the fascinating world of music theory in this beginner-friendly session. Learn about scales, chords, rhythm, and harmony through practical exercises and interactive demonstrations.',
    participantLimit: undefined,
    participantCount: 20,
    category: ['art', 'music'],
    coverURL: getStudyCoverImg(),
    organiser: {id: '103', name: 'Charlie Davis'}
  },
  {
    id: '4',
    createdAt: new Date('2025-01-23T11:15:00'),
    title: 'AI in Architecture',
    time: new Date('2025-02-04T14:00:00'),
    location: 'Lecture Hall C',
    description: 'Explore how artificial intelligence is transforming architectural design. This session covers cutting-edge technologies and tools that streamline the design process, optimize construction, and enable sustainable solutions.',
    participantLimit: 40,
    participantCount: 35,
    category: ['architecture', 'technology'],
    coverURL: getStudyCoverImg(),
    organiser: {id: '104', name: 'Dana White'}
  },
  {
    id: '5',
    createdAt: new Date('2025-01-24T10:00:00'),
    title: 'Philosophy of Ethics',
    time: new Date('2025-02-05T10:00:00'),
    location: 'Room 305, Humanities Building',
    description: 'Engage in a thought-provoking discussion about ethics and morality. Delve into philosophical theories and real-world applications to better understand how ethics shapes decision-making and interpersonal relationships.',
    participantLimit: 20,
    participantCount: 10,
    category: ['philosophy', 'language'],
    coverURL: require('../assets/images/user-image/philosophy.jpeg'),
    organiser: {id: '105', name: 'Emma Lee'}
  },
  {
    id: '6',
    createdAt: new Date('2025-02-10T13:20:00'),
    title: 'Language Learning Techniques',
    time: new Date('2025-03-26T11:00:00'),
    location: 'Language Lab 1',
    description: 'Discover effective methods for mastering new languages quickly and efficiently. From immersion techniques to mnemonic devices, this session provides tools and tips to boost your fluency and confidence.',
    participantLimit: undefined,
    participantCount: 10,
    category: ['language'],
    coverURL: require('../assets/images/user-image/language.png'),
    organiser: {id: '106', name: 'Frank Miller'}
  },
  {
    id: '7',
    createdAt: new Date('2025-01-26T15:10:00'),
    title: '3D Printing in Engineering',
    time: new Date('2025-02-07T16:00:00'),
    location: 'Engineering Workshop',
    description: 'Learn how 3D printing technology is revolutionizing engineering. This hands-on session covers basic techniques, materials, and applications of 3D printing in prototyping and manufacturing.',
    participantLimit: 20,
    participantCount: 18,
    category: ['engineering', 'technology'],
    coverURL: getStudyCoverImg(),
    organiser: {id: '107', name: 'George Williams'}
  },
  {
    id: '8',
    createdAt: new Date('2025-01-26T15:10:00'),
    title: 'Art and Design Showcase',
    time: new Date('2025-01-23T13:00:00'),
    location: 'Art Gallery, Building D',
    description: 'Present your creative projects or explore the works of others at this inspiring art and design showcase. Gain feedback, network with like-minded individuals, and spark new ideas for future creations.',
    participantLimit: 50,
    participantCount: 45,
    category: ['art', 'technology'],
    coverURL: require('../assets/images/cover/cover_2.jpg'),
    organiser: {id: '107', name: 'George Williams'}
  },

  {
    id: '10',
    createdAt: new Date('2024-06-26T15:10:00'),
    title: 'History of Music Evolution',
    time: new Date('2025-02-10T15:30:00'),
    location: 'Room 108, Music Department',
    description: 'Travel through time and explore the evolution of music across different cultures and eras. This session combines lectures and audio samples to provide an enriching perspective on musical history.',
    participantLimit: 25,
    participantCount: 20,
    category: ['art', 'music'],
    coverURL: require('../assets/images/user-image/music_history.webp'),
    organiser: {id: '106', name: 'Frank Miller'}
  },
];
