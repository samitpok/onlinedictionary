//imports
const express = require('express');
const meaningList = require('./word');
const app = express();
const port = 3000;


//Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));


app.get('',(req,res)=>{
    res.sendFile(__dirname + '/views/dict.html');
});


app.get('/meaning/:word',(req,res) => {
    
    //console.log("before finding meaning");
    
    res.setHeader('Content-Type', 'application/json');
    meaningList.getMeanings(req.params.word).then(function(rows){
        
      
        res.end(JSON.stringify(rows));
      
        console.log("rows",rows);
      
    }).catch((err)=>setImmediate(() => {throw err;}))

});

//listen on port 3000
app.listen(port,() => console.info(`Listening on port ${port}`));