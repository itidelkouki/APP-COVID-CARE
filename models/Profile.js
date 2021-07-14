const mongoose=require("mongoose")

const ProfileSchema=new mongoose.Schema({
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },

    tel:{
        type:Number
    },
    clinic: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    /*dateOfCreactionProfile:{
        type:Date,
        default:Date.now()
    },*/
    
})
module.exports=mongoose.model("Profile",ProfileSchema)