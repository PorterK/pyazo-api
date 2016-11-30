const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const router = express.Router();

//all current comments are notes-to-self

router.use(formidable({
  encoding: 'utf-8',
  uploadDir: path.dirname('./i/*')
}));

router.post('/', (req, res) => {
  const filePath = req.files.image.path

  //shorten the filenames and move them to different paths soon
  const newfilePath = `${_.replace(filePath, 'upload_', '')}.png`;

  fs.rename(filePath, newfilePath);

  //send back the link to the image eventually.
  res.send('Upload');
});

module.exports = router;
