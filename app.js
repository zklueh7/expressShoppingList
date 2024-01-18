const express = require('express');
const ExpressError = require('./expressError');
const app = express();
const itemRoutes = require('./routes/items');

app.use(express.json());

//  apply a prefix to every route in itemRoutes
app.use("/items", itemRoutes);

// 404 handler
app.use(function(req, res) {
    return new ExpressError("Not Found", 404);
});

// generic error handler
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;

    //set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

// start server on port 3000
app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});