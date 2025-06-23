# Database Scripts

## Overview

This directory contains scripts for managing the database schema and data for the Rehearsal Scheduler application.

## Migrations

Migration scripts are used to set up and modify the database schema. They are located in the `migrations` directory.

### Running Migrations

To run the initial migration script against a MongoDB instance:

```bash
mongo rehearsal-scheduler migrations/initial-setup.js
```

Or if using Docker:

```bash
docker-compose exec mongo mongo rehearsal-scheduler /app/src/db/migrations/initial-setup.js
```

## Seeds

Seed scripts are used to populate the database with sample data for development and testing. They are located in the `seeds` directory.

### Running Seeds

To run the sample data seed script:

```bash
mongo rehearsal-scheduler seeds/sample-data.js
```

Or if using Docker:

```bash
docker-compose exec mongo mongo rehearsal-scheduler /app/src/db/seeds/sample-data.js
```

## Schema

The database schema follows a document-oriented design with the following collections:

- **users**: User accounts and profiles
- **groups**: Music groups/bands
- **rehearsals**: Scheduled rehearsal events
- **attendance**: RSVP and attendance tracking for rehearsals
- **availability**: User availability information for scheduling
- **messages**: Group and rehearsal-related messages
- **setlists**: Song lists for performances

See the `models` directory for detailed schema definitions.