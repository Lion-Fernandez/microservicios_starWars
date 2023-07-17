const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

server.use("*", (req, res)=> {
    res.status(404).send ("Not Found");
});

server.use((err, req, res, next) => {
    res.status(err.satus || 500).send({
        error: true,
        messenge: err.messege
    })
})

module.exports = server;


