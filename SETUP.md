# Setup & Development Guide

## Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ashtempeor/football.git
cd football
```

### 2. Setup Backend

```bash
cd backend
npm install

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb://localhost:27017/football-game
JWT_SECRET=your_secret_key
NODE_ENV=development" > .env

npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

## Project Development

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd ../frontend
npm test
```

### Database Setup

The game uses MongoDB. Initialize with seed data:

```bash
cd backend
npm run seed:db
```

This will populate:
- Real leagues and competitions
- Player database
- Team information
- Initial game data

## Architecture

### Frontend (React + TypeScript)
- Player creation interface
- Career management dashboard
- Match visualization
- Career statistics and achievements

### Backend (Node.js)
- User authentication and sessions
- Game state management
- Match simulation engine
- Career progression logic
- Database operations

### Game Engine
- Match simulations
- Player stat calculations
- Transfer market logic
- Career events and scenarios

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues.
