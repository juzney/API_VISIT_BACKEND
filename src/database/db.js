const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://webjuzney:neynine@cluster0.xkoov.mongodb.net/appVisit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(() =>
{
    console.log('DB is connected')
}).catch((error) =>
{
    console.log('Something is wrong', error)
})

module.exports = mongoose;

