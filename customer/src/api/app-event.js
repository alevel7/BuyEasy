const CustomerService = require('../services/customer-service');


module.exports = (app) => {

    const customerService  = new CustomerService();

    app.use("/app-event", async (req, res, next) => {

        const data = req.body
        const payload = data.payload.data
        
        customerService.SubscribeEvents(payload)
        return res.status(200).json(data)
    });
}