const express = require('express');
const workoutRoutes = require('./routes/workoutsRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 7000;

// express app
const app = express();

// middleware
app.use(logger);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('req.method: ', req.method);
  console.log('req.path: ', req.path);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the file2firebase' });
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/posts', workoutRoutes);

function logger(req, res, next) {
  console.log('------------------');
  console.log(req.originalUrl);
  console.log('------------------');
  next();
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
