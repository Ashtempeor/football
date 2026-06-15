/**
 * Playstyle and Traits System
 * Defines different playstyles and player traits
 */

export interface Playstyle {
  id: string;
  name: string;
  description: string;
  attributeBoosts: Record<string, number>;
  position: string[];
}

export interface PlayerTrait {
  id: string;
  name: string;
  description: string;
  effect: Record<string, any>;
}

export const PLAYSTYLES: Playstyle[] = [
  {
    id: 'striker',
    name: 'Clinical Striker',
    description: 'Focuses on finishing and positioning in the box',
    attributeBoosts: { shooting: 15, pace: 5, dribbling: 5 },
    position: ['ST'],
  },
  {
    id: 'playmaker',
    name: 'Playmaker',
    description: 'Controls the tempo of the game with precise passes',
    attributeBoosts: { passing: 15, vision: 10, dribbling: 5 },
    position: ['CAM', 'CM'],
  },
  {
    id: 'ball_carrier',
    name: 'Ball Carrier',
    description: 'Dribbles past opponents with ease',
    attributeBoosts: { dribbling: 15, pace: 10, agility: 8 },
    position: ['LW', 'RW', 'CAM'],
  },
  {
    id: 'defender',
    name: 'Physical Defender',
    description: 'Strong in the air and tackling',
    attributeBoosts: { defense: 15, physical: 10, heading: 12 },
    position: ['CB', 'LB', 'RB'],
  },
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Uses pace to create and finish chances',
    attributeBoosts: { pace: 20, acceleration: 15, sprint: 12 },
    position: ['ST', 'LW', 'RW', 'LB', 'RB'],
  },
  {
    id: 'tactician',
    name: 'Tactician',
    description: 'Intelligent positioning and game reading',
    attributeBoosts: { positioning: 15, awareness: 15, passing: 10 },
    position: ['CM', 'CB', 'GK'],
  },
  {
    id: 'set_piece_specialist',
    name: 'Set Piece Specialist',
    description: 'Excels at free kicks and corners',
    attributeBoosts: { free_kick: 20, curve: 15, power: 10 },
    position: ['CM', 'LW', 'RW'],
  },
  {
    id: 'box_to_box',
    name: 'Box-to-Box',
    description: 'Covers entire pitch with stamina and versatility',
    attributeBoosts: { stamina: 15, physical: 10, passing: 10, defense: 8 },
    position: ['CM'],
  },
  {
    id: 'technical_winger',
    name: 'Technical Winger',
    description: 'Creates chances through skill and crossing',
    attributeBoosts: { dribbling: 15, crossing: 12, pace: 8 },
    position: ['LW', 'RW'],
  },
  {
    id: 'goal_keeper_sweeper',
    name: 'Goalkeeper Sweeper',
    description: 'Commands the defense and plays out from the back',
    attributeBoosts: { distribution: 15, rushing: 12, command: 15 },
    position: ['GK'],
  },
];

export const PLAYER_TRAITS: PlayerTrait[] = [
  {
    id: 'leader',
    name: 'Leader',
    description: 'Increases team morale and performance',
    effect: { teamMoraleBoost: 0.1, captainSuitability: true },
  },
  {
    id: 'injury_prone',
    name: 'Injury Prone',
    description: 'More susceptible to injuries',
    effect: { injuryRisk: 1.5, fitnessDrain: 1.3 },
  },
  {
    id: 'clutch_performer',
    name: 'Clutch Performer',
    description: 'Performs better in important matches',
    effect: { bigGameBoost: 0.2, pressureResistance: true },
  },
  {
    id: 'quick_learner',
    name: 'Quick Learner',
    description: 'Improves attributes faster',
    effect: { progressionMultiplier: 1.5 },
  },
  {
    id: 'unpredictable',
    name: 'Unpredictable',
    description: 'Unpredictable performances, high risk/reward',
    effect: { performanceVariance: 0.4, consistencyPenalty: -0.2 },
  },
  {
    id: 'mentor',
    name: 'Mentor',
    description: 'Helps younger players develop',
    effect: { youngPlayerProgressionBoost: 0.15 },
  },
  {
    id: 'showman',
    name: 'Showman',
    description: 'Popular with fans, attracts sponsorship',
    effect: { fanAppeal: 0.3, sponsorshipBoost: 0.2 },
  },
  {
    id: 'problem_child',
    name: 'Problem Child',
    description: 'Causes discipline issues in the team',
    effect: { disruptionFactor: 0.2, teamChemistryPenalty: -0.15 },
  },
  {
    id: 'comeback_king',
    name: 'Comeback King',
    description: 'Performs better when team is losing',
    effect: { comebackBoost: 0.25 },
  },
  {
    id: 'homesick',
    name: 'Homesick',
    description: 'Struggles when away from home country',
    effect: { awayPerformancePenalty: -0.1 },
  },
];
