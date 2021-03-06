const express = require('express');
const api = require('./api');
const app = express();

app.use('/api', api);

app.use(express.static('screenshots'));

//possibly create some sort of authentication so the client can communicate with the API (and other clients can't)

app.listen(3000, (e) => {
  if(e) {
    console.log('Failed to bing port')
    process.exit(1);
  }

  console.log('📸 Ready to intake screenshots.');
});
