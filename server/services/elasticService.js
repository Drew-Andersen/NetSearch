const client = require('../config/elasticConfig');

async function searchLogs({ query, startDate, endDate, severity }) {
  const must = [];

  if (query) {
    must.push({
      match_phrase: { message: query }
    });
  }

  if (startDate && endDate) {
    must.push({
      range: {
        timestamp: {
          gte: startDate,
          lte: endDate
        }
      }
    });
  }

  if (severity && severity !== 'all') {
    must.push({
      match: { severity }
    });
  }

  const body = {
    query: {
      bool: {
        must
      }
    },
    size: 100, // adjust as needed
    sort: [{ timestamp: 'desc' }]
  };

  const result = await client.search({
    index: 'logs-*', // adjust if using different index names
    body
  });

  return result.hits.hits.map(hit => hit._source);
}

module.exports = { searchLogs };
