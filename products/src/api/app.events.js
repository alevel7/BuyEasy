
module.exports = (app) => {


    app.use("/app-event", async (req, res, next) => {

        const { payload } = req.body

        console.log("Product service recieve events ========")
        return res.status(200).json(payload)
    });
}