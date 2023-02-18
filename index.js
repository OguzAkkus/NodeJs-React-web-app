const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'THERE' });
});

const PORT = process.env.PORT || 80;
app.listen(PORT);