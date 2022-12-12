import express = require('express');
import cors = require('cors');

import destinationsRouter = require('./endpoints/destinations');
import searchRouter = require('./endpoints/search');

const app = express();
const port = process.env.PORT || 1337;
const clientOrigin = process.env.CLIENT_ORIGIN || '*';

app.use(express.json());
app.use(cors({
    origin: clientOrigin
}));

app.use('/destinations', destinationsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log('Running on PORT ' + port);
});