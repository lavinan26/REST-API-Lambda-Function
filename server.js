const customer_profile = require('./app/models/customer_profile_model.js');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
exports.handler =  function(event, context) {
    let customer_id = event.customerID;
    console.log(event)
    if (customer_id) {
    mongoose.connect(dbConfig.url).then (()=> {
        customer_profile.findOne({customer_id : customer_id})
        .then(response => {
            if (!response) {
                context.fail(JSON.stringify({Status : 404, Data: "Customer does not exist"}));
            } else {
                context.succeed({Status : 200, Data: response});
            }
        }).catch(err => {
            context.fail(JSON.stringify({Status : 500, Error_message: err}));
        });
    }).catch(err => {
        context.fail(JSON.stringify({Status : 500, Error_message: err}));
    });
    } else {
        context.fail(JSON.stringify({Status : 400}));
    }

}