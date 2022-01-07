const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const items = ["Buy Food", " Cook Food ", "Eat Food"];

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    const today = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const day = today.toLocaleDateString("en-us", options);

    res.render('list', {kindOfDay: day, newListItems: items});
});


app.post('/', (req, res)=>{

   const item = req.body.newItem;    
    items.push(item);

    res.redirect("/");
});


const port = 3000;
app.listen(process.env.PORT || port, ()=>{
    console.log(`server listening on port ${port}`);
});


