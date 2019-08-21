// SERVER DEPENDENCIES ---------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');

// DEV DEPENDENCIES ------------------------------------------------
const morgan = require('morgan');

// MONGODB CONNECTION ----------------------------------------------
// const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);

// connect to prod server if MONGODB_URI provided, else connect to local DB
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mtr-helper';
// mongoose.connect(MONGODB_URI, { useNewURLParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'))
// db.once('open', () => { console.log('Database connected'); });
// mongoose.Promise = global.Promise;

// INITIALIZE HTTP SERVER -------------------------------------------
const app = express();
const PORT = process.env.PORT || 8000;

// SERVER MIDDLEWARE ------------------------------------------------
// FORMAT
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ROUTING
// app.use('/', routes);
// DEVELOPMENT ONLY - comment out before publishing to production
app.use(morgan('dev'));

// LAUNCH SERVER ----------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server now listening on http://localhost:${PORT}`);
});