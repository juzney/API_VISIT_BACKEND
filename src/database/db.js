const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tongaat',
{ useUnifiedTopology: true,
 useNewUrlParser: true,
 useCreateIndex: true,  }
,()=> console.log('mongodb running'))

module.exports = mongoose;

