const mongoose = require("mongoose");

async function connectionDb(mongourl) {
    return mongoose.connect(mongourl);
}

module.exports = connectionDb;