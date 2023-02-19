const express = require('express');
const app = express();
const router = require('./app/router/router')

const PORT = process.env.PORT || 3000;

const spells = require('./app/data/spells.json')


app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.locals.spells = spells


app.use(router);





app.listen(PORT, ()=>{
    console.log(`Server launched on http://localhost:${PORT}`)
})