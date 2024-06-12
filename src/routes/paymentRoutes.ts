import express from 'express';
import { createPayment, getPaymentById } from '../controllers/paymentController';
import  auth  from '../middleware/authMiddleware';

const router = express.Router();

router.post('/payments', auth, createPayment);
router.get('/payments/:id', auth, getPaymentById);

export default router;
