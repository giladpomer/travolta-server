import express = require('express');
import destinationsRouter = require('./endpoints/destinations');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use('/destinations', destinationsRouter);

app.listen(port, () => {
    console.log('Running on PORT ' + port);
});