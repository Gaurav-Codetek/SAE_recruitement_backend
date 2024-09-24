const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    "Timestamp": {
        type: String, // You can change this to Date if you want to store it as a Date
        required: true
    },
    "Email Address": {
        type: String,
        required: true
    },
    "Name": {
        type: String,
        required: true
    },
    "Contact Number": {
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
    "Roll Number": {
        type: String,
        required: true
    },
    "What is SAE? What do you understand by SAE?": {
        type: String,
        required: true
    },
    "How do you wish to contribute to SAE? Do you wish to contribute in technical department, non technical department or both?": {
        type: String,
        required: true
    },
    "What would be your preference order for the Technical Teams? [Team Garuda - The Motorsports Team of SAE]": {
        type: String,
        required: true
    },
    "What would be your preference order for the Technical Teams? [Team VayuVeer - The Aerospace Team of SAE]": {
        type: String,
        required: true
    },
    "What would be your preference order for the Technical Teams? [Team Alpha One - The Software Team of SAE]": {
        type: String,
        required: true
    },
    "What would be your preference order for the Technical Teams? [Team Prahaar - The Robotics Team of SAE]": {
        type: String,
        required: true
    },
    "What would be your preference for the Non-Tech Teams?": {
        type: String,
        required: true
    },
    "Why do you want to join SAE?": {
        type: String,
        required: true
    },
    "What are your expectations from SAE?": {
        type: String,
        required: true
    },
    "What's your favourite Car/Plane/Combat Robot?": {
        type: String,
        required: true
    },
    "Any suggestions/comments?": {
        type: String,
        default: "None"
    }
});

// Create the model
module.exports  = mongoose.model('users', userSchema);

// Export the model

