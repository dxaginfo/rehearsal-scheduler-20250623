# Rehearsal Scheduler

A modern web application designed to help bands, orchestras, and music groups efficiently organize their rehearsals, track attendance, and optimize scheduling.

![Rehearsal Scheduler Banner](https://via.placeholder.com/1200x300/4F46E5/FFFFFF?text=Rehearsal+Scheduler)

## Overview

Rehearsal Scheduler solves the common challenges musicians face when coordinating practice sessions by providing a centralized platform for scheduling, availability tracking, and resource management. Built with a modern tech stack and designed with musicians' needs in mind, this application streamlines the rehearsal planning process.

## Key Features

- **User Management**
  - User registration and authentication
  - Band/group creation and member management
  - Role-based permissions (admin, member, guest)

- **Rehearsal Scheduling**
  - Create, edit, and delete rehearsal events
  - Set location, date, time, and duration
  - Add notes and special instructions
  - Recurring rehearsal options

- **Availability Tracking**
  - Members can mark availability/unavailability
  - Visual calendar showing everyone's availability
  - Conflict detection when scheduling

- **Automated Scheduling Suggestions**
  - Algorithm to suggest optimal rehearsal times based on member availability
  - Prioritize slots where all critical members can attend

- **Attendance Tracking**
  - RSVP functionality (attending, maybe, not attending)
  - Historical attendance records
  - Automated attendance reminders

- **Communication Tools**
  - In-app messaging and notifications
  - Comment threads on specific rehearsals
  - Email notifications and reminders

- **Resource Management**
  - Upload and share sheet music and recordings
  - Attach resources to specific rehearsals
  - Setlist creation and management

- **Mobile Responsiveness**
  - Fully functional on mobile devices
  - Progressive Web App capabilities

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material-UI for components
- FullCalendar.js for calendar views
- Formik with Yup for form validation
- Axios for API communication

### Backend
- Node.js with Express
- RESTful API architecture
- JWT for authentication
- MongoDB for database
- Mongoose for ODM
- Redis for caching

### DevOps
- Docker containerization
- GitHub Actions for CI/CD
- AWS/Google Cloud hosting
- Sentry for error tracking

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB (v4+)
- Redis (optional, for production)

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/rehearsal-scheduler-20250623.git
cd rehearsal-scheduler-20250623
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In the server directory, create a .env file
cp .env.example .env
# Edit .env with your specific configuration
```

4. Start the development servers
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm start
```

5. Access the application
```
Frontend: http://localhost:3000
Backend API: http://localhost:5000
```

## Project Structure

```
rehearsal-scheduler/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API service layer
│   │   ├── store/          # Redux store
│   │   ├── utils/          # Utility functions
│   │   └── App.tsx         # Main application component
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js/Express application
│   ├── src/                # Source files
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── app.js          # Express application setup
│   └── package.json        # Backend dependencies
│
├── .github/                # GitHub Actions workflows
├── docker/                 # Docker configuration
├── docs/                   # Documentation
└── README.md               # Project documentation
```

## API Documentation

API documentation is available at `/api/docs` when running the server locally, or in the [API.md](docs/API.md) file.

## Deployment

### Docker Deployment
```bash
# Build Docker images
docker-compose build

# Start services
docker-compose up -d
```

### Manual Deployment
See the [deployment guide](docs/DEPLOYMENT.md) for detailed instructions on deploying to various platforms.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the musicians who provided feedback on the application design
- [FullCalendar.js](https://fullcalendar.io/) for the excellent calendar component
- [Material-UI](https://mui.com/) for the UI components