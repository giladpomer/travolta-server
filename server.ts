import express = require('express');
import destinationsRouter = require('./endpoints/destinations');
import searchRouter = require('./endpoints/search');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use('/destinations', destinationsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log('Running on PORT ' + port);
});