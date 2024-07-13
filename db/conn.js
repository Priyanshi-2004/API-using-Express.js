const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Tours", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.error("No connection", e);
});
