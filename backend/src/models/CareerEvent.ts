import mongoose, { Schema, Document } from 'mongoose';

export type EventType = 
  | 'transfer_offer'
  | 'interview'
  | 'injury'
  | 'achievement'
  | 'manager_change'
  | 'contract_negotiation'
  | 'drama'
  | 'match_performance'
  | 'milestone';

export interface ICareerEvent extends Document {
  playerId: string;
  userId: string;
  type: EventType;
  title: string;
  description: string;
  details: Record<string, any>;
  importance: 'low' | 'medium' | 'high' | 'critical';
  choices?: Array<{
    text: string;
    consequence: string;
  }>;
  createdAt: Date;
}

const CareerEventSchema: Schema = new Schema(
  {
    playerId: { type: String, required: true },
    userId: { type: String, required: true },
    type: {
      type: String,
      enum: [
        'transfer_offer',
        'interview',
        'injury',
        'achievement',
        'manager_change',
        'contract_negotiation',
        'drama',
        'match_performance',
        'milestone',
      ],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Schema.Types.Mixed, default: {} },
    importance: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium',
    },
    choices: [
      {
        text: String,
        consequence: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<ICareerEvent>('CareerEvent', CareerEventSchema);
