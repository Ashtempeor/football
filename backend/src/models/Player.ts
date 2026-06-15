import mongoose, { Schema, Document } from 'mongoose';

export interface IPlayerAttributes {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defense: number;
  physical: number;
}

export interface IPlayer extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  position: string; // ST, CAM, CM, CB, LB, RB, GK, etc.
  preferredFoot: 'left' | 'right' | 'both';
  height: number; // cm
  weight: number; // kg
  attributes: IPlayerAttributes;
  playstyles: string[];
  traits: string[];
  currentClub: string | null;
  contractEnd: Date | null;
  marketValue: number;
  salary: number;
  experience: number; // years
  achievements: string[];
  stats: {
    appearancesThisSeason: number;
    goalsThisSeason: number;
    assistsThisSeason: number;
    careerGoals: number;
    careerAssists: number;
    international_caps: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const PlayerSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true, min: 16, max: 45 },
    nationality: { type: String, required: true },
    position: { type: String, required: true },
    preferredFoot: { type: String, enum: ['left', 'right', 'both'], default: 'right' },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    attributes: {
      pace: { type: Number, min: 1, max: 99 },
      shooting: { type: Number, min: 1, max: 99 },
      passing: { type: Number, min: 1, max: 99 },
      dribbling: { type: Number, min: 1, max: 99 },
      defense: { type: Number, min: 1, max: 99 },
      physical: { type: Number, min: 1, max: 99 },
    },
    playstyles: [{ type: String }],
    traits: [{ type: String }],
    currentClub: { type: String, default: null },
    contractEnd: { type: Date, default: null },
    marketValue: { type: Number, default: 1000000 },
    salary: { type: Number, default: 50000 },
    experience: { type: Number, default: 0 },
    achievements: [{ type: String }],
    stats: {
      appearancesThisSeason: { type: Number, default: 0 },
      goalsThisSeason: { type: Number, default: 0 },
      assistsThisSeason: { type: Number, default: 0 },
      careerGoals: { type: Number, default: 0 },
      careerAssists: { type: Number, default: 0 },
      international_caps: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPlayer>('Player', PlayerSchema);
