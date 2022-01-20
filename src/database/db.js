const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Visit:6T1FCvFOTpDPoLWj@cluster0.qec6n.mongodb.net/appvisit?retryWrites=true&w=majority',
{ useUnifiedTopology: true,
 useNewUrlParser: true }
,()=> console.log('mongodb running'))

module.exports = mongoose;