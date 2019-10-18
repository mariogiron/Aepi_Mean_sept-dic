let mongoose = require('mongoose');

let urlConn = 'mongodb://127.0.0.1/aepi';

mongoose.connect(urlConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});