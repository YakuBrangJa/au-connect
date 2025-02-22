import {cover_images} from "@/constants/cover_images";
import {HangoutGroup} from "@/types/hangout-group.type";
import {getHangoutStudyImg} from "@/utils/getHangoutCoverImg";

export const hangout_group_data: HangoutGroup[] = [
  {
    id: '3',
    createdAt: new Date(),
    title: 'Music Jam Session',
    time: new Date('2025-02-02T17:00:00'),
    location: 'Music Room, Building A',
    description: 'A casual jam session for anyone who loves music. Bring your instruments!',
    category: ['music', 'event'],
    coverURL: require('../assets/images/user-image/music_jam.webp'),
    participantCount: 10,
    participantLimit: 15,
    organiser: {id: '103', name: 'Alice Brown'},
  },
  {
    id: '1',
    createdAt: new Date(),
    title: 'Friday Night Football',
    time: new Date('2025-02-07T18:00:00'),
    location: 'Campus Field',
    description: 'Join us for a fun and competitive game of football every Friday night.',
    category: ['sport', 'event'],
    coverURL: require('../assets/images/user-image/football.jpg'),
    participantCount: 15,
    participantLimit: 30,
    organiser: {id: '101', name: 'John Doe'},
  },
  {
    id: '2',
    createdAt: new Date(),
    title: 'Gaming Marathon',
    time: new Date('2025-01-27T20:00:00'),
    location: 'Dormitory Lounge',
    description: 'Come join us for an epic gaming marathon with friends. Snacks included!',
    category: ['gaming'],
    coverURL: require('../assets/images/user-image/gaming1.jpg'),
    participantCount: 8,
    participantLimit: 20,
    organiser: {id: '102', name: 'Jane Smith'},
  },

  {
    id: '4',
    createdAt: new Date(),
    title: 'Arcade Night',
    time: new Date('2025-01-29T19:00:00'),
    location: 'Student Union Arcade',
    description: 'Let’s relive the classics at Arcade Night! Challenge your friends to a high score.',
    category: ['arcade'],
    coverURL: require('../assets/images/user-image/arcades.webp'),
    participantCount: 5,
    participantLimit: 10,
    organiser: {id: '104', name: 'Bob Green'},
  },
  {
    id: '5',
    createdAt: new Date(),
    title: 'Weekend Getaway Planning',
    time: new Date('2025-02-05T14:00:00'),
    location: 'Café Lounge',
    description: 'Join us to plan an exciting weekend getaway with fellow adventurers!',
    category: ['travel', 'event'],
    // coverURL: getHangoutStudyImg(),
    coverURL: require('../assets/images/user-image/getaway_cafe.jpg'),
    participantCount: 12,
    participantLimit: 25,
    organiser: {id: '105', name: 'Charlie White'},
  },
  {
    id: '6',
    createdAt: new Date(),
    title: 'Foodie Meet-up',
    time: new Date('2025-01-28T12:00:00'),
    location: 'Main Street Café',
    description: 'Let’s share our love for good food! Explore new restaurants with fellow foodies.',
    category: ['food'],
    coverURL: require('../assets/images/user-image/foodie.jpg'),
    participantCount: 7,
    participantLimit: 15,
    organiser: {id: '106', name: 'Diana Black'},
  },
  {
    id: '7',
    createdAt: new Date(),
    title: 'Event Planning for Charity',
    time: new Date('2025-02-07T16:00:00'),
    location: 'Student Hall',
    description: 'Help plan an event for a good cause. Let’s work together to make a difference!',
    category: ['event'],
    coverURL: getHangoutStudyImg(),
    participantCount: 9,
    participantLimit: 20,
    organiser: {id: '107', name: 'Ethan Grey'},
  },
  {
    id: '8',
    createdAt: new Date(),
    title: 'Movie Night: Sci-Fi Edition',
    time: new Date('2025-02-03T19:30:00'),
    location: 'Campus Auditorium',
    description: 'Join us for a Sci-Fi movie marathon. Free popcorn for everyone!',
    category: ['movie', 'event'],
    coverURL: require('../assets/images/user-image/movie_night.jpg'),
    participantCount: 18,
    participantLimit: 50,
    organiser: {id: '108', name: 'Fiona Red'},
  },
];
