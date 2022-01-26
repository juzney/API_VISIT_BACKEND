const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webjuzney:L4ypVafHJ715OS5J@cluster0.xkoov.mongodb.net/appVisit?retryWrites=true&w=majority',
{ useUnifiedTopology: true,
 useNewUrlParser: true,
 useCreateIndex: true,  }
,()=> console.log('mongodb running'))

module.exports = mongoose;

