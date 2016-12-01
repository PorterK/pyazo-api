const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const config = require('./config');

const router = express.Router();
//all current comments are notes-to-self

router.use(formidable({
  encoding: 'utf-8',
  uploadDir: path.dirname('./screenshots/*')
}));

router.post('/', (req, res) => {
  if(req.files) {
    const filePath = req.files.image.path

    const newfilePath = `${_.replace(filePath, 'upload_', '')}.png`;

    const uploadURL = `http://${config.url}/${_.split(newfilePath, '/', 2)[1]}`

    fs.rename(filePath, newfilePath);

    console.log(`SCREENSHOT RECIEVED @ ${new Date()}: ${uploadURL}`);

    res.send(uploadURL);
  } else {
    res.status(422).send('File not found or file type not supported.')
  }
});

module.exports = router;
