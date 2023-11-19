let express = require('express');
let app = express();
let port = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', express.static('views'));


app.get('/', (req, res)=>{
  res.render('views/index');

})


    // FOR SERVER

 app.listen(80)