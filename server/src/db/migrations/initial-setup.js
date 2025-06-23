/**
 * Initial database setup migration
 * 
 * This script creates the initial collections and indexes
 * for the Rehearsal Scheduler application.
 */

db = db.getSiblingDB('rehearsal-scheduler');

// Create users collection with email index
db.createCollection('users');
db.users.createIndex({ email: 1 }, { unique: true });

// Create groups collection
db.createCollection('groups');
db.groups.createIndex({ name: 1 });
db.groups.createIndex({ 'members.userId': 1 });

// Create rehearsals collection
db.createCollection('rehearsals');
db.rehearsals.createIndex({ groupId: 1 });
db.rehearsals.createIndex({ startTime: 1 });
db.rehearsals.createIndex({ 'resources.name': 1 });

// Create attendance collection
db.createCollection('attendance');
db.attendance.createIndex({ rehearsalId: 1 });
db.attendance.createIndex({ userId: 1 });
db.attendance.createIndex({ status: 1 });

// Create availability collection
db.createCollection('availability');
db.availability.createIndex({ userId: 1 });
db.availability.createIndex({ groupId: 1 });
db.availability.createIndex({ date: 1 });

// Create messages collection
db.createCollection('messages');
db.messages.createIndex({ groupId: 1 });
db.messages.createIndex({ rehearsalId: 1 });
db.messages.createIndex({ 'readBy.userId': 1 });

// Create setlists collection
db.createCollection('setlists');
db.setlists.createIndex({ groupId: 1 });
db.setlists.createIndex({ name: 1 });

print('Database initialization completed successfully!');