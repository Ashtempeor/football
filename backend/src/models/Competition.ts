import mongoose, { Schema, Document } from 'mongoose';

export interface ICompetition extends Document {
  name: string;
  type: 'domestic_cup' | 'league_cup' | 'continental' | 'international';
  country?: string;
  region?: string;
  teams: string[];
  currentRound: number;
  totalRounds: number;
  format: string;
  season: number;
}

const CompetitionSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['domestic_cup', 'league_cup', 'continental', 'international'],
      required: true,
    },
    country: { type: String },
    region: { type: String },
    teams: [{ type: String }],
    currentRound: { type: Number, default: 1 },
    totalRounds: { type: Number, required: true },
    format: { type: String, enum: ['single_elimination', 'group', 'league'], default: 'single_elimination' },
    season: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICompetition>('Competition', CompetitionSchema);
