const express = require('express');
const path = require('path');
const cors = require('cors');
const IncomingForm = require('formidable').IncomingForm

const app = express();

var fs = require('fs');
var fileDir = './files';

//TODO Replace with db 
if (!fs.existsSync(fileDir)) {
  console.log("Making file Directory");
  fs.mkdirSync(fileDir);
}

var corsOptions = {
  origin: '*',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.post('/api/upload', (req, res) => {
    var form = new IncomingForm()
  

    form.on('fileBegin', (field, file) => {
      console.log("File upload Started")
      file.path = fileDir + "/" + file.name
    })

    form.on('file', (field, file) => {
      console.log('file finished')
    })
    form.on('end', () => {
      res.json();
    })
  
    form.parse(req)
    console.log("POST: upload");
});

app.get('/api/download', (req, res) => {
  res.json(['download']);
  console.log("GET: download")
});

app.get('/api/download/getFiles', (req, res) => {
  fs.readdir(fileDir, (err, files) => {
    if (err) {
      console.log(err)
      return
    }
    res.json(files)
  })
  console.log("GET: downloadable Files");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
