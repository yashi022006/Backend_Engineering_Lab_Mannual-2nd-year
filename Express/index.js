const exp = require('express');
const app = exp();
// (Express) this is third party module so first has to include it in node then require it then make a object of express module to use the functionality of express js
app.get('/', (req, res) => {
    res.send(`<h1> Hello express! </h1>${req.query.id} ${req.query.name}`);
});
app.get('/Home',(req, res) => {
    res.send("<h1><a href='/contact'> Contact </a></h1>");
});
app.get('/about', (req, res) => {
    res.send("About Page");
});
app.get('/contact', (req, res) => {
    res.send("Contact Page");
});
app.get('/search', (req, res) => {
    let data=req.query.name;
    if(data){
        res.send(`Search result for ${data}`);
    }
    console.log(req.query);
    res.send("search not found");
    
});
app.post()
// app.get('/*', (req, res) => {
//     res.send("404 Not Found");
// });

app.listen(3000);