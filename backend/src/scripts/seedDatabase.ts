import mongoose from 'mongoose';
import dotenv from 'dotenv';
import League from '../models/League';
import Competition from '../models/Competition';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/football-game';

const leaguesData = [
  // English Leagues
  { name: 'Premier League', country: 'England', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'Championship', country: 'England', tier: 2, teams: 24, totalRounds: 46 },
  { name: 'League One', country: 'England', tier: 3, teams: 24, totalRounds: 46 },
  { name: 'League Two', country: 'England', tier: 4, teams: 24, totalRounds: 46 },

  // Spanish Leagues
  { name: 'La Liga', country: 'Spain', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'La Liga 2', country: 'Spain', tier: 2, teams: 22, totalRounds: 42 },

  // Italian Leagues
  { name: 'Serie A', country: 'Italy', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'Serie B', country: 'Italy', tier: 2, teams: 20, totalRounds: 38 },

  // German Leagues
  { name: 'Bundesliga', country: 'Germany', tier: 1, teams: 18, totalRounds: 34 },
  { name: '2. Bundesliga', country: 'Germany', tier: 2, teams: 18, totalRounds: 34 },

  // French Leagues
  { name: 'Ligue 1', country: 'France', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'Ligue 2', country: 'France', tier: 2, teams: 20, totalRounds: 38 },

  // American Leagues
  { name: 'MLS', country: 'USA', tier: 1, teams: 29, totalRounds: 34 },
  { name: 'USL Championship', country: 'USA', tier: 2, teams: 28, totalRounds: 34 },

  // Other Major Leagues
  { name: 'Eredivisie', country: 'Netherlands', tier: 1, teams: 18, totalRounds: 34 },
  { name: 'Primeira Liga', country: 'Portugal', tier: 1, teams: 18, totalRounds: 34 },
  { name: 'Süper Lig', country: 'Turkey', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'Liga MX', country: 'Mexico', tier: 1, teams: 18, totalRounds: 34 },
  { name: 'Serie A', country: 'Brazil', tier: 1, teams: 20, totalRounds: 38 },
  { name: 'Copa del Litoral', country: 'Argentina', tier: 1, teams: 28, totalRounds: 27 },
  { name: 'Saudi Pro League', country: 'Saudi Arabia', tier: 1, teams: 18, totalRounds: 34 },
  { name: 'Super League', country: 'China', tier: 1, teams: 18, totalRounds: 30 },
];

const competitionsData = [
  // Domestic Cups
  { name: 'FA Cup', type: 'domestic_cup', country: 'England', totalRounds: 6 },
  { name: 'Carabao Cup', type: 'league_cup', country: 'England', totalRounds: 5 },
  { name: 'Copa del Rey', type: 'domestic_cup', country: 'Spain', totalRounds: 5 },
  { name: 'Coppa Italia', type: 'domestic_cup', country: 'Italy', totalRounds: 5 },
  { name: 'DFB Pokal', type: 'domestic_cup', country: 'Germany', totalRounds: 6 },
  { name: 'Coupe de France', type: 'domestic_cup', country: 'France', totalRounds: 5 },
  { name: 'KNVB Cup', type: 'domestic_cup', country: 'Netherlands', totalRounds: 5 },
  { name: 'Taça de Portugal', type: 'domestic_cup', country: 'Portugal', totalRounds: 5 },

  // Continental Competitions
  { name: 'UEFA Champions League', type: 'continental', region: 'Europe', totalRounds: 13 },
  { name: 'UEFA Europa League', type: 'continental', region: 'Europe', totalRounds: 13 },
  { name: 'UEFA Conference League', type: 'continental', region: 'Europe', totalRounds: 10 },
  { name: 'CONMEBOL Copa Libertadores', type: 'continental', region: 'South America', totalRounds: 7 },
  { name: 'CONMEBOL Copa Sudamericana', type: 'continental', region: 'South America', totalRounds: 7 },
  { name: 'CAF Champions League', type: 'continental', region: 'Africa', totalRounds: 6 },
  { name: 'AFC Champions League', type: 'continental', region: 'Asia', totalRounds: 10 },
  { name: 'CONCACAF Champions Cup', type: 'continental', region: 'North America', totalRounds: 6 },

  // International Competitions
  { name: 'FIFA World Cup', type: 'international', totalRounds: 7 },
  { name: 'UEFA Euro', type: 'international', totalRounds: 5 },
  { name: 'Copa America', type: 'international', totalRounds: 5 },
  { name: 'Africa Cup of Nations', type: 'international', totalRounds: 5 },
  { name: 'Asian Cup', type: 'international', totalRounds: 5 },
  { name: 'Gold Cup', type: 'international', totalRounds: 5 },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await League.deleteMany({});
    await Competition.deleteMany({});

    // Insert leagues
    const leaguesToInsert = leaguesData.map((league) => ({
      ...league,
      season: 2024,
      currentRound: 1,
    }));
    await League.insertMany(leaguesToInsert);
    console.log(`✅ Inserted ${leaguesToInsert.length} leagues`);

    // Insert competitions
    const competitionsToInsert = competitionsData.map((competition) => ({
      ...competition,
      season: 2024,
      currentRound: 1,
      teams: [],
    }));
    await Competition.insertMany(competitionsToInsert);
    console.log(`✅ Inserted ${competitionsToInsert.length} competitions`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
