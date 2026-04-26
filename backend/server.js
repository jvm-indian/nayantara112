const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const gitaAiRouter = require('./routes/gitaAi');
const claudeAiRouter = require('./routes/claudeAi');

app.use('/api/gita', gitaAiRouter);
app.use('/api/claude', claudeAiRouter);

app.get('/', (req, res) => {
  res.send('Nayanthara Backend Server is running.');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
