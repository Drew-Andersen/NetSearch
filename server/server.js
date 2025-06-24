const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const logsRoutes = require('./routes/logs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/logs', logsRoutes);

// test
app.get('/ping-elastic', async (req, res) => {
  console.log('🔍 Hit /ping-elastic route');
  const client = require('./config/elasticConfig');

  try {
    const info = await client.info();
    console.log('✅ Elasticsearch info retrieved');
    res.json(info);
  } catch (err) {
    console.error('❌ Elasticsearch connection failed:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// end test

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.listen(PORT, () => {
  console.log(`Server now listening on localhost:${PORT}`);
});