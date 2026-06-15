# Football Manager Game - Architecture Guide

## Overview

The Football Manager Game is built with a modular architecture separating concerns between frontend, backend, and game logic.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                       │
│  - Player Creation UI                                         │
│  - Career Dashboard                                           │
│  - Match Visualization                                        │
│  - Stats & Achievements                                       │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/REST API
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                  Backend API (Node.js/Express)               │
│  - User Authentication                                        │
│  - Player Management                                          │
│  - Game State Management                                      │
│  - Database Operations                                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              Game Engine (TypeScript)                         │
│  - Match Simulation                                           │
│  - Career Progression                                         │
│  - Playstyle & Traits Logic                                   │
│  - Transfer Market Simulation                                 │
└─────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database (MongoDB)                         │
│  - Players                                                    │
│  - Leagues & Competitions                                     │
│  - Career Events                                              │
│  - User Data                                                  │
└─────────────────────────────────────────────────────────────┘
```

## Data Models

### Player
- Personal info (name, age, nationality, appearance)
- Attributes (pace, shooting, passing, dribbling, defense, physical)
- Playstyles (multiple)
- Traits (multiple)
- Career stats
- Current club & contract

### League
- Teams
- Current round
- Format (league, group, knockout)
- Season

### Competition
- Type (domestic cup, continental, international)
- Teams/Participants
- Current round
- Format

### CareerEvent
- Type (transfer, injury, achievement, etc.)
- Description
- Decision choices (if applicable)
- Impact level

## Key Features

### 1. Player Creation
- Dynamic character creation with customization
- Multiple playstyle selection
- Trait selection
- Background information

### 2. Match Simulation
- Realistic match simulation based on player/team strength
- Individual player ratings
- Key match events (goals, injuries, substitutions)
- Performance tracking

### 3. Career Progression
- Dynamic event generation
- Transfer market interaction
- Contract negotiation
- Injury management
- Media interviews and drama

### 4. Open World
- Real leagues and competitions
- Dynamic transfer market
- Manager changes
- Team chemistry
- Long-term career arc

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, React Router
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Game Logic**: TypeScript
- **Real-time**: Socket.IO (planned)
- **Authentication**: JWT

## API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Players
- `POST /api/players` - Create new player
- `GET /api/players/:id` - Get player details
- `PUT /api/players/:id` - Update player
- `GET /api/players/:id/stats` - Get player stats

### Career
- `GET /api/career/events` - Get career events
- `POST /api/career/events/:id/decision` - Make decision on event
- `GET /api/career/history` - Get career history

### Matches
- `GET /api/matches` - Get upcoming matches
- `GET /api/matches/:id` - Get match details
- `POST /api/matches/:id/simulate` - Simulate match

### Leagues & Competitions
- `GET /api/leagues` - Get all leagues
- `GET /api/competitions` - Get all competitions
- `GET /api/leagues/:id/standings` - Get league standings

## Deployment

The app will be deployable to Vercel, Heroku, or any Node.js hosting platform.
