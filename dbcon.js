const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/express-mongoose';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));