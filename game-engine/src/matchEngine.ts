/**
 * Match Simulation Engine
 * Handles realistic football match simulations
 */

export interface PlayerPerformance {
  playerId: string;
  rating: number;
  goals: number;
  assists: number;
  shotsOnTarget: number;
  passes: number;
  passAccuracy: number;
  tackles: number;
  interceptions: number;
}

export interface MatchResult {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  duration: number; // minutes
  playerPerformances: {
    home: PlayerPerformance[];
    away: PlayerPerformance[];
  };
  keyEvents: Array<{
    minute: number;
    type: 'goal' | 'injury' | 'substitution' | 'yellow_card' | 'red_card';
    player: string;
    team: string;
    description: string;
  }>;
}

export class MatchEngine {
  /**
   * Simulates a football match
   */
  simulateMatch(
    homeTeamStrength: number,
    awayTeamStrength: number,
    homeTeamFormFactor: number = 1.0,
    awayTeamFormFactor: number = 1.0
  ): MatchResult {
    const homeAdjusted = homeTeamStrength * homeTeamFormFactor;
    const awayAdjusted = awayTeamStrength * awayTeamFormFactor;

    // Simplified simulation - in production, this would be much more complex
    const totalStrength = homeAdjusted + awayAdjusted;
    const homeProbability = homeAdjusted / totalStrength;

    // Generate random goals
    const homeScore = this.generateGoals(homeProbability, 0.5);
    const awayScore = this.generateGoals(1 - homeProbability, 0.5);

    return {
      homeTeam: 'Home Team',
      awayTeam: 'Away Team',
      homeScore,
      awayScore,
      duration: 90,
      playerPerformances: {
        home: [],
        away: [],
      },
      keyEvents: [],
    };
  }

  private generateGoals(probability: number, baseGoalRate: number): number {
    const expectedGoals = probability * baseGoalRate * 4;
    const random = Math.random();

    if (random < expectedGoals * 0.1) return 3;
    if (random < expectedGoals * 0.3) return 2;
    if (random < expectedGoals * 0.6) return 1;
    return 0;
  }

  /**
   * Calculate player rating based on performance metrics
   */
  calculatePlayerRating(
    goals: number,
    assists: number,
    shotsOnTarget: number,
    passAccuracy: number,
    defensiveActions: number
  ): number {
    let rating = 6.0; // Base rating

    rating += goals * 0.5; // Goals boost rating
    rating += assists * 0.3; // Assists boost rating
    rating += shotsOnTarget * 0.15; // Shots on target
    rating += passAccuracy * 0.002; // Pass accuracy
    rating += defensiveActions * 0.05; // Defensive actions

    // Cap rating between 1 and 10
    return Math.min(10, Math.max(1, rating));
  }
}
