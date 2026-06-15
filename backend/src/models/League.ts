import mongoose, { Schema, Document } from 'mongoose';

export interface ILeague extends Document {
  name: string;
  country: string;
  tier: number;
  teams: string[];
  season: number;
  currentRound: number;
  totalRounds: number;
  format: string;
}

const LeagueSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    tier: { type: Number, required: true },
    teams: [{ type: String }],
    season: { type: Number, required: true },
    currentRound: { type: Number, default: 1 },
    totalRounds: { type: Number, required: true },
    format: { type: String, enum: ['league', 'group', 'knockout'], default: 'league' },
  },
  { timestamps: true }
);

export default mongoose.model<ILeague>('League', LeagueSchema);
