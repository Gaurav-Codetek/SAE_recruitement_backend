const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    "Timestamp": {
        type: String, // You can change this to Date if you want to store it as a Date
        required: true
    },
    "Email": {
        type: String,
        required: true
    },
    "Name": {
        type: String,
        required: true
    },
    "ContactNumber": {
        type: Number,
        required: true
    },
    "Department": {
        type: String,
        required: true
    },
    "Branch": {
        type: String,
        required: true
    },
    "Year": {
        type: Number,
        required: true
    },
    "RollNumber": {
        type: String,
        required: true
    },
});

// Create the model
module.exports  = mongoose.model('selectedusers', userSchema);

// Export the model

