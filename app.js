const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi, this is Bernard Kwame Solodzi and this is the final pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
