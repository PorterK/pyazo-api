const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const router = express.Router();

router.use(formidable({
  encoding: 'utf-8',
  uploadDir: path.dirname('./i/*')
}));

router.post('/', (req, res) => {
  const filePath = req.files.image.path

  const newfilePath = `${_.replace(filePath, 'upload_', '')}.png`;

  fs.rename(filePath, newfilePath);

  res.send('Upload');
});

module.exports = router;
