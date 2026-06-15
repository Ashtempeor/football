import { Router, Request, Response } from 'express';
import Player from '../models/Player';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newPlayer = new Player({
      userId: `user_${Date.now()}`,
      ...req.body,
      currentClub: 'Unsigned',
      marketValue: 5000000,
      attributes: {
        pace: 75,
        shooting: 75,
        passing: 75,
        dribbling: 75,
        defense: 75,
        physical: 75,
      },
    });
    await newPlayer.save();
    res.status(201).json({ success: true, player: newPlayer });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ success: false, message: 'Player not found' });
    res.json({ success: true, player });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const players = await Player.find();
    res.json({ success: true, players });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
