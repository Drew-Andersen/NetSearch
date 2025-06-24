const { searchLogs } = require('../services/elasticService');

exports.getLogs = async (req, res) => {
  try {
    const { q, start, end, severity } = req.query;

    const logs = await searchLogs({
      query: q,
      startDate: start,
      endDate: end,
      severity,
    });

    res.json({ logs });
  } catch (error) {
    console.error('Error fetching logs:', error.message);
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
};
