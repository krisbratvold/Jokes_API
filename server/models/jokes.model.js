const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [10, "{PATH} must be longer than {MINLENGTH} characters"]
        },
        punchline: {
            type: String,
            required: [true],
            minlength: [3, "{PATH} must be longer than {MINLENGTH} characters"]
    }
    }, 
    {timestamps:true}
    );

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke; 

