import { Router, Request, Response } from 'express';
import Competition from '../models/Competition';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const competitions = await Competition.find();
    res.json({ success: true, competitions });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (!competition) return res.status(404).json({ success: false, message: 'Competition not found' });
    res.json({ success: true, competition });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
