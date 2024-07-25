const cors = require('cors');

const corsOptions = {
    origin: 'http://193.187.174.234:8080/api/users',
    methods: ['PUT','GET','POST','OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type','Authorization'],
};

module.exports = cors(corsOptions);
