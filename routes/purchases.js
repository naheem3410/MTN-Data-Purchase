// backend/routes/purchases.js
const express = require('express');
const router = express.Router();
const Purchase = require('../models/Purchase');

router.post('/', async (req, res) => {
  const { package, userId } = req.body;

  console.log('Received package:', package);
  console.log('Received userId:', userId);

  if (!package || !userId) {
    return res.status(400).json({ message: 'Package and userId are required' });
  }

  const newPurchase = new Purchase({
    package,
    userId,
  });

  try {
    const savedPurchase = await newPurchase.save();
    res.status(201).json(savedPurchase);
  } catch (err) {
    console.error('Error saving purchase:', err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
