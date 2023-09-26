const express = require("express");
const cors = require('cors');
const chatRouters = require("./routers/chat.routers");
const prendasRouters = require("./routers/prenda.routers");
const userRouters = require("./routers/user.routers")
const errorHandling = require("./error/errorHandling");
const app = express();

// app.set("port", 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(prendasRouters);
app.use(chatRouters);
app.use(userRouters);
app.use(function(req, res, next)
{
    res.status(404).json({error:true,
                          codigo: 404,
                          message: "Endpoint doesnt found"})
});

app.use(errorHandling);

module.exports = app;