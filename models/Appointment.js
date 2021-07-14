// require mongoose
const mongoose = require('mongoose');
// Require Schema from mongoose
const Schema = mongoose.Schema;
// Create the user schema
const AppointmentSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        }, 
            // bookingId: {
            //     type: Number
            // },
            patientname: {
                type: String,
                required: true
            },
            time : {type: Date, default: (new Date().getTime()) },
            // time :{   type: Number,
            //     enum: [09, 10, 11,12,14,15,16,17,18],
            //   },
            date: {
                type: Date,
                default: new Date(),
            },
            });
            module.exports = Appointment= mongoose.model('Appointment', AppointmentSchema);