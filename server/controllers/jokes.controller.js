const { update } = require("../models/jokes.model");
const Joke = require("../models/jokes.model")

module.exports = {
    create: function(req,res){
        console.log("create method executed");
        
        Joke.create(req.body)
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    findAll: function(req,res){
        Joke.find()
        .then((allJokes)=> {
            res.json({jokes:allJokes})
        })
        .catch((err) => {
            res.json(err);
        });
    },
    getOne(req,res){
        Joke.findById(req.params.id)
        .then((oneJoke)=> {
            res.json({joke:oneJoke})
        })
        .catch((err) => {
            res.json(err);
        });
    },
    delete(req,res){
        Joke.findByIdAndDelete(req.params.id)
        .then((joke)=> {
            res.json(joke)
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update(req,res){
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators:true,
            new: true
        })
        .then((updatedJoke) => {
            res.json(updatedJoke);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}