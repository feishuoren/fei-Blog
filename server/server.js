const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'..')));
app.use(express.static(path.join(__dirname,'..', 'public')));

app.get('/getTopList', async function (req, res) {
  const creeper = require('./creeper')
  const data = await creeper()
  res.send(data)  
  res.end(); 
});

app.listen(3000,function(){
  console.log('listen 3000!');
});
