/**
 * Career Progression Engine
 * Handles player career events, achievements, and progression
 */

export interface CareerEventData {
  type: 'transfer' | 'injury' | 'achievement' | 'drama' | 'interview';
  probability: number; // 0-1
  description: string;
  impact: 'negative' | 'neutral' | 'positive';
}

export class CareerEngine {
  private eventProbabilities: Map<string, number> = new Map([
    ['transfer', 0.05],
    ['injury', 0.02],
    ['achievement', 0.1],
    ['drama', 0.03],
    ['interview', 0.08],
  ]);

  /**
   * Generate random career events for a player
   */
  generateCareerEvents(playerAge: number, playerRating: number): CareerEventData[] {
    const events: CareerEventData[] = [];

    for (const [eventType, baseProbability] of this.eventProbabilities) {
      const adjustedProbability = baseProbability * (playerRating / 5) * (playerAge < 25 ? 1.5 : 1);

      if (Math.random() < adjustedProbability) {
        events.push({
          type: eventType as any,
          probability: adjustedProbability,
          description: this.getEventDescription(eventType),
          impact: this.getEventImpact(eventType),
        });
      }
    }

    return events;
  }

  private getEventDescription(eventType: string): string {
    const descriptions: Record<string, string> = {
      transfer: 'A top club is interested in signing you',
      injury: 'You suffered a minor injury during training',
      achievement: 'You scored a hat-trick in the last match',
      drama: 'The media is creating a controversy',
      interview: 'You are invited for a media interview',
    };
    return descriptions[eventType] || 'Career event';
  }

  private getEventImpact(eventType: string): 'negative' | 'neutral' | 'positive' {
    const impacts: Record<string, 'negative' | 'neutral' | 'positive'> = {
      transfer: 'positive',
      injury: 'negative',
      achievement: 'positive',
      drama: 'negative',
      interview: 'neutral',
    };
    return impacts[eventType] || 'neutral';
  }

  /**
   * Calculate player progression based on match performance
   */
  updatePlayerAttributes(
    currentAttributes: Record<string, number>,
    matchRating: number,
    minutesPlayed: number
  ): Record<string, number> {
    const updated = { ...currentAttributes };

    // Only improve if player played significant minutes
    if (minutesPlayed > 45) {
      const improvementFactor = (matchRating - 6.5) * 0.05; // Improve if rating > 6.5

      for (const attribute in updated) {
        const improvement = improvementFactor * (Math.random() * 0.5);
        updated[attribute] = Math.min(99, updated[attribute] + improvement);
      }
    }

    return updated;
  }
}
