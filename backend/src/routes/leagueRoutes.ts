import { Router, Request, Response } from 'express';
import League from '../models/League';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const leagues = await League.find();
    res.json({ success: true, leagues });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const league = await League.findById(req.params.id);
    if (!league) return res.status(404).json({ success: false, message: 'League not found' });
    res.json({ success: true, league });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
