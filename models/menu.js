const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String
    },
    price: {
        type: Currency,
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;