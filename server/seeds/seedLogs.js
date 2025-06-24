const client = require('../config/elasticConfig');

async function seedLogs() {
  const logs = [
    {
      timestamp: new Date().toISOString(),
      message: 'User login successful',
      severity: 'INFO',
    },
    {
      timestamp: new Date().toISOString(),
      message: 'Failed login attempt from IP 10.0.0.3',
      severity: 'ERROR',
    },
    {
      timestamp: new Date().toISOString(),
      message: 'Unauthorized login attempt to admin panel',
      severity: 'ERROR',
    },
  ];

  for (const log of logs) {
    await client.index({
      index: 'logs-dev',
      document: log,
    });
  }

  await client.indices.refresh({ index: 'logs-dev' });
  console.log('Logs seeded');
}

seedLogs().catch(console.error);