// main.js
const path = require('path'); 

module.exports = function(app){
    app.get('/',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Files/Index.html')); 
    });
    app.get('/get1', (req, res) => { 
        const file = path.resolve(__dirname, 'files/Index.html');
        res.download(file); 
    });
    app.get('/get2', (req, res) => { 
        const file = path.resolve(__dirname, 'files/Index.json');
        res.download(file); 
    });
    app.get('/get3', (req, res) => { 
        const file = path.resolve(__dirname, 'files/Index.xml');
        res.download(file); 
    });
    app.get('/get-text', (req, res) => { 
        res.json({ text: 'GET REQUEST TEXT' });
    });

    app.post('/post-text', (req, res) => { 
        res.json({ text: 'POST REQUEST TEXT' });
    });
}