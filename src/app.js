const path = require('path');
const express = require('express');
const hbs=require('hbs');
const app = express();
const port = 4001;
//  process.env.PORT || 3000; //if not processing in the port given by the host,dn it will run on port number 3000



const staticPath= path.join (__dirname,"../public");
const tamplatePath= path.join (__dirname,"../templates/views");
const partialsPath= path.join (__dirname,"../templates/partials");


app.set('view engine', 'hbs');
app.set('views',tamplatePath)
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));



//routing
app.get('/', (req, res) =>
res.render('index'));

app.get('/about', (req, res) =>
res.render('about'));

app.get('/weather', (req, res) =>
res.render('weather'));

app.get('/*', (req, res) =>
res.render('404error',{
    errorMsg:"Opps! Page Not Found"
})
);

app.listen(port, () =>
 console.log(`Example app listening on port ${port}!`));