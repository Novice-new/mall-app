const express = require('express');
const router = express();
const multer = require('multer');
const { getResult } = require('../resultHelp');
const path = require('path');

const storage = multer.diskStorage({
  // 保存路径
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../client/public/img'));
  },
  filename(req, file, cb) {
    const timeStamp = Date.now();
    const randomStr = Math.random().toString(36).slice(-6);
    const ext = path.extname(file.originalname);
    const filename = `${timeStamp}-${randomStr}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);
    const allowedFile = ['.jpg', '.png'];
    if (allowedFile.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`暂不支持${file.originalname}类型`))
    }
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  // 图片路径
  const imgPath = `/img/${req.file.filename}`;
  res.send(getResult(imgPath));
});


module.exports = router;
