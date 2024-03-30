
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('Files')); 
require('./routes')(app);

app.listen(port,()=>{
    console.log('Server work on '+port)
});