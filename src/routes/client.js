import express from 'express';
import * as clientController from '../controllers/client.js'

const router = express.Router();

router.get('/', clientController.findAll);
router.post('/', clientController.create);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.remove);

export default router;