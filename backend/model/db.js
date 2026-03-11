const mongoose =require('mongoose');
const mongo_url="mongodb+srv://vikramhere258_db_user:qwerty1234@cluster0.qvfo013.mongodb.net/sample?appName=Cluster0"
mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongo connected");
    
}).catch((err)=>{
    console.log('mongodb connection failed',err);
    
})