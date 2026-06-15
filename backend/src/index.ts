import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import playerRoutes from './routes/playerRoutes';
import leagueRoutes from './routes/leagueRoutes';
import competitionRoutes from './routes/competitionRoutes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/football-game';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGODB_URI).then(() => console.log('✅ MongoDB Connected')).catch(err => console.error('❌ Error:', err));

app.get('/api/health', (req, res) => res.json({ status: 'API is running' }));
app.use('/api/players', playerRoutes);
app.use('/api/leagues', leagueRoutes);
app.use('/api/competitions', competitionRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
export default app;
