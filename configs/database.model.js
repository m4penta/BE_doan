const mongoose = require('mongoose');

try {
  mongoose.set('strictQuery', true);
  mongoose.connect(process.env.DB_HOST);
  console.log('Connect successfully😊');
  
} catch (error) {
  console.log('Connect failure😢', error);
}

module.exports = { connect: mongoose };
