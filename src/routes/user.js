import express from 'express';
import * as userController from '../controllers/user.js'

const router = express.Router();

router.get('/', userController.findAll);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/:username', userController.remove);

export default router;