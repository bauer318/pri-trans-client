const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8081/api/users',
    methods: ['PUT'],
    allowedHeaders: ['Content-Type'],
};

module.exports = cors(corsOptions);
