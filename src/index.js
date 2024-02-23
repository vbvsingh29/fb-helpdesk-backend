const express = require('express');
const bodyParser = require('body-parser');
const db = require('./service/db.service');
const passportMiddleware = require('./middleware/passport');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

passportMiddleware(app);

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('FB Helpdesk Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
