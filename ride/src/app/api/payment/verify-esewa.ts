// pages/api/verify-esewa.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { transaction_uuid } = req.body;

  if (!transaction_uuid) {
    return res.status(400).json({ success: false, message: 'Missing UUID' });
  }

  // Always succeed for testing
  return res.status(200).json({
    success: true,
    transaction_id: transaction_uuid,
    amount: 250.86, // Example amount
  });
}
