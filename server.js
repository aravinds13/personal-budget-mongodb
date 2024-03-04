// Budget API

const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
const budgetModel = require('./models/budget_schema');

const port = 3000;

const url = 'mongodb://localhost:27017'

app.use(cors());
app.use(express.json());


app.get('/budget', (req, res) => {
    var budget;
    mongoose.connect(url)
        .then(() => {
            console.log("success");
            budgetModel.find({})
                .then((data) => {
                    budget = data;
                    res.json(budget);
                    // console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                    res.json(error);
                })
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

app.post('/budget',(req, res) => {
    const {title, budget, backgroundColor} = req.body;
    // console.log(req.body);
    mongoose.connect(url)
        .then(() => {
            console.log("success");
            budgetModel.insertMany({
                title,
                budget,
                backgroundColor
            })
                .then(() => {
                    res.json({
                        message: "successfully added data"
                    });
                })
                .catch((error) => {
                    res.json(error);
                })
        })
        .catch((err) => {
            res.json(err);
        });
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
