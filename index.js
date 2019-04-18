const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/upload', (req, res) => {
  //logic about uploading items
  res.json(['upload']);
  console.log("POST: upload");
});

app.get('/api/download', (req, res) => {
  //logic about fetching item urls for download
  res.json(['download']);
  console.log("GET: download")
});

app.get('/api/download/getFiles', (req, res) => {
  res.json(['file1', 'file2', 'file3']);
  console.log("GET: downloadable Files");
});

// Redirect users to main page if requests dont match any of the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
