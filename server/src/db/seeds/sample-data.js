/**
 * Sample data seed script
 * 
 * This script populates the database with sample data
 * for development and testing purposes.
 */

db = db.getSiblingDB('rehearsal-scheduler');

// Clear existing data
db.users.deleteMany({});
db.groups.deleteMany({});
db.rehearsals.deleteMany({});
db.attendance.deleteMany({});
db.availability.deleteMany({});
db.messages.deleteMany({});
db.setlists.deleteMany({});

// Insert sample users
const users = [
  {
    _id: ObjectId(),
    email: 'admin@example.com',
    // Password: 'password123' (hashed)
    password: '$2a$10$dAuPCYqXmWkDLXAzJ5.t5OPT6EhTuAQvYmkuJvQzQCiYNpwGJh1gy',
    firstName: 'Admin',
    lastName: 'User',
    phone: '555-123-4567',
    role: 'admin',
    instrument: 'Guitar',
    isEmailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date()
  },
  {
    _id: ObjectId(),
    email: 'john@example.com',
    password: '$2a$10$dAuPCYqXmWkDLXAzJ5.t5OPT6EhTuAQvYmkuJvQzQCiYNpwGJh1gy',
    firstName: 'John',
    lastName: 'Smith',
    phone: '555-987-6543',
    role: 'member',
    instrument: 'Drums',
    isEmailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date()
  },
  {
    _id: ObjectId(),
    email: 'sarah@example.com',
    password: '$2a$10$dAuPCYqXmWkDLXAzJ5.t5OPT6EhTuAQvYmkuJvQzQCiYNpwGJh1gy',
    firstName: 'Sarah',
    lastName: 'Johnson',
    phone: '555-456-7890',
    role: 'member',
    instrument: 'Vocals',
    isEmailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date()
  }
];

db.users.insertMany(users);
print(`Inserted ${users.length} users`);

// Insert sample group
const groups = [
  {
    _id: ObjectId(),
    name: 'The Rockers',
    description: 'A rock band practicing weekly',
    createdBy: users[0]._id,
    members: [
      {
        userId: users[0]._id,
        role: 'admin',
        joinedAt: new Date()
      },
      {
        userId: users[1]._id,
        role: 'member',
        joinedAt: new Date()
      },
      {
        userId: users[2]._id,
        role: 'member',
        joinedAt: new Date()
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

db.groups.insertMany(groups);
print(`Inserted ${groups.length} groups`);

// Insert sample rehearsals
const now = new Date();
const rehearsals = [
  {
    _id: ObjectId(),
    groupId: groups[0]._id,
    title: 'Weekly Practice',
    description: 'Regular weekly rehearsal',
    location: {
      name: 'Music Studio A',
      address: '123 Music Street, City',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    startTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    endTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000), // 2 hours long
    isRecurring: true,
    recurringPattern: {
      frequency: 'weekly',
      interval: 1,
      endDate: new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000) // 90 days from now
    },
    createdBy: users[0]._id,
    resources: [
      {
        name: 'Song List',
        type: 'document',
        url: '/resources/songlist.pdf',
        uploadedBy: users[0]._id,
        uploadedAt: new Date()
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    groupId: groups[0]._id,
    title: 'Special Session',
    description: 'Preparing for upcoming gig',
    location: {
      name: 'Music Studio B',
      address: '456 Rhythm Avenue, City',
      coordinates: {
        lat: 40.7200,
        lng: -74.0100
      }
    },
    startTime: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    endTime: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // 3 hours long
    isRecurring: false,
    createdBy: users[0]._id,
    resources: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

db.rehearsals.insertMany(rehearsals);
print(`Inserted ${rehearsals.length} rehearsals`);

// Insert sample attendance records
const attendance = [
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[0]._id,
    userId: users[0]._id,
    status: 'attending',
    notes: '',
    respondedAt: new Date(),
    checkedIn: false
  },
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[0]._id,
    userId: users[1]._id,
    status: 'attending',
    notes: 'Might be 10 minutes late',
    respondedAt: new Date(),
    checkedIn: false
  },
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[0]._id,
    userId: users[2]._id,
    status: 'maybe',
    notes: 'Waiting on another commitment',
    respondedAt: new Date(),
    checkedIn: false
  },
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[1]._id,
    userId: users[0]._id,
    status: 'attending',
    notes: '',
    respondedAt: new Date(),
    checkedIn: false
  },
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[1]._id,
    userId: users[1]._id,
    status: 'attending',
    notes: '',
    respondedAt: new Date(),
    checkedIn: false
  },
  {
    _id: ObjectId(),
    rehearsalId: rehearsals[1]._id,
    userId: users[2]._id,
    status: 'not_attending',
    notes: 'Family commitment',
    respondedAt: new Date(),
    checkedIn: false
  }
];

db.attendance.insertMany(attendance);
print(`Inserted ${attendance.length} attendance records`);

// Insert sample availability records
const today = new Date();
today.setHours(0, 0, 0, 0);

const availability = [
  {
    _id: ObjectId(),
    userId: users[0]._id,
    groupId: groups[0]._id,
    date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from today
    timeSlots: [
      {
        startTime: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000), // 6 PM
        endTime: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 + 22 * 60 * 60 * 1000), // 10 PM
        isAvailable: true
      }
    ],
    recurring: true,
    recurringPattern: {
      dayOfWeek: (today.getDay() + 7) % 7,
      startTime: '18:00',
      endTime: '22:00'
    },
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    userId: users[1]._id,
    groupId: groups[0]._id,
    date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from today
    timeSlots: [
      {
        startTime: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000), // 5 PM
        endTime: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000), // 11 PM
        isAvailable: true
      }
    ],
    recurring: true,
    recurringPattern: {
      dayOfWeek: (today.getDay() + 7) % 7,
      startTime: '17:00',
      endTime: '23:00'
    },
    updatedAt: new Date()
  }
];

db.availability.insertMany(availability);
print(`Inserted ${availability.length} availability records`);

// Insert sample setlist
const setlists = [
  {
    _id: ObjectId(),
    groupId: groups[0]._id,
    name: 'Summer Gig Setlist',
    description: 'Songs for the summer festival',
    createdBy: users[0]._id,
    songs: [
      {
        title: 'Highway Star',
        artist: 'Deep Purple',
        duration: 360, // 6 minutes in seconds
        notes: 'Standard tuning, Ian on lead vocals',
        attachments: [
          {
            name: 'highway_star_tabs.pdf',
            type: 'document',
            url: '/resources/highway_star_tabs.pdf'
          }
        ]
      },
      {
        title: 'Sweet Child O\'Mine',
        artist: 'Guns N\' Roses',
        duration: 300, // 5 minutes in seconds
        notes: 'Sarah on lead vocals',
        attachments: []
      },
      {
        title: 'Enter Sandman',
        artist: 'Metallica',
        duration: 330, // 5.5 minutes in seconds
        notes: 'Drop D tuning',
        attachments: []
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

db.setlists.insertMany(setlists);
print(`Inserted ${setlists.length} setlists`);

// Insert sample messages
const messages = [
  {
    _id: ObjectId(),
    groupId: groups[0]._id,
    rehearsalId: rehearsals[0]._id,
    senderId: users[0]._id,
    content: 'Don\'t forget to bring your new equipment to the next rehearsal!',
    attachments: [],
    createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    readBy: [
      {
        userId: users[1]._id,
        readAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
      }
    ]
  },
  {
    _id: ObjectId(),
    groupId: groups[0]._id,
    senderId: users[1]._id,
    content: 'I found some great new songs we could add to our repertoire!',
    attachments: [],
    createdAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    readBy: [
      {
        userId: users[0]._id,
        readAt: new Date(now.getTime() - 12 * 60 * 60 * 1000) // 12 hours ago
      }
    ]
  }
];

db.messages.insertMany(messages);
print(`Inserted ${messages.length} messages`);

print('Sample data seed completed successfully!');