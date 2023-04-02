const { model , Schema } = require('mongoose');

const contactSchema = new Schema({
    name: String,
    email: String,
    comment: String,
    createdAt: String
});

module.exports = model('Contact',contactSchema);