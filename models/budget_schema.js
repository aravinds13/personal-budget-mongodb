const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    budget: {
        type: Number,
        require: true
    },
    backgroundColor: {
        type: String,
        require: true,
        match: /^#([0-9A-Fa-f]{6})$/,
        message: props => `${props.value} is not a valid hexadecimal color code!`
    }
}, {collection: 'myBudget'});

module.exports = mongoose.model('myBudget', budgetSchema);

