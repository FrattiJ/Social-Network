const { connect, connection } = require('mongoose');

let connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost/social-network';

connect(connectionString), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports = connection;