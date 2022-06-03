const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('App guide')
});

app.use('/static2', express.static('public'))





const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('server listening on port', PORT)
})