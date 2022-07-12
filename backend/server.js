const express = require('express');

// eslint-disable-next-line no-unused-vars
const { colors } = require('colors');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const workoutRoutes = require('./routes/workoutsRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const employeesRoutes = require('./routes/api/employees');

const PORT = process.env.PORT || 7000;

// Connect to database
connectDB();

// express app
const app = express();

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

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
app.use('/api/posts', postRoutes);
app.use('/employees', employeesRoutes);

app.all('*', (req, res) => {
  res.status(404);
  res.send(`404`);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
