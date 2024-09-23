// imports from packages
const express = require('express');
const mongoose = require('mongoose');

// imports from other files
const authRouter = require("./routes/auth");
const adminRouter = require('./routes/admin');
const productRouter = require('./routes/product');

// init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://romankliakhin:3L2SKqYii2Mf2phj@cluster0.tezog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);

// connections
mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});  

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});