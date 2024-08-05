const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            autoIndex: false,
            serverSelectionTimeoutMS: 4000,
            socketTimeoutMS: 45000
        });
        console.log(colors.green('Connected MongoDB successfully!!'));
    } catch (error) {
        console.log('Message error: ' + error.message);
        console.log(colors.red('Connected MongoDB failed!!'));
        process.exit(0);
    }
};

const disconnectDB = async () => {
    console.log(colors.red('You are performing a server shutdown!'));
    await mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
