const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({ 
    customer_id: Number, 
    customer_name: String
}, 
    {
        collection: 'my_collection'
    });
module.exports = mongoose.model('Customer', customerSchema);