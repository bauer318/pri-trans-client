const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080/api/users',
    methods: ['PUT','GET','POST','OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type','Authorization'],
};

module.exports = cors(corsOptions);
