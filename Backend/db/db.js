const mongoose= require('mongoose');

// function fo connecting the temp mongodb to the server which will used while
// requesting the data
function connectToDB(){

    mongoose.connect(process.env.DB_CONNECT, {
        // useNewUrlParser: true, 
        // useUnifiedTopology: true
    }).then(()=>{
        console.log('Connect to DB!');
    }).catch(err=> console.log(err))
}

module.exports= connectToDB;