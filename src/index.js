require('dotenv').config();
const app = require('./app');
const colors = require('colors');
const { connectDB } = require('./configs/db');
const port = process.env.PORT || 3000;
let server;
const startServer = () => {
    server = app
        .listen(port, function () {
            console.log(colors.green(`Server listening on http://localhost:${port}`));
        })
        .on('error', function (err) {
            console.log(colors.red(err.message));
        });
};

if (process.env.NODE_ENV === 'test') {
    startServer();
} else {
    connectDB().then(() => startServer());
}

const closeServer = () => {
    if (server) {
        server.close();
    } else {
        console.log(colors.red('Server is not running'));
    }
};

module.exports = closeServer;
