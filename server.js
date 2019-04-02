const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
app.use(express.static(__dirname + '/dist/client'));

app.use(cors());

app.listen(process.env.PORT || 6080, () => {
  console.log(`listening at 6080`)
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/client/index.html'));
});


