const express = require('express');
const router = express.Router();
const { searchLogs } = require('../services/elasticService');

router.get('/search', async (req, res) => {
  const { q, startDate, endDate, severity } = req.query;
  console.log('🔍 Search request received:', req.query);

  try {
    const logs = await searchLogs({ query: q, startDate, endDate, severity });
    console.log(`✅ Found ${logs.length} logs`);
    res.json({ logs });
  } catch (err) {
    console.error('❌ Failed to fetch logs:', err.message);
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

module.exports = router;