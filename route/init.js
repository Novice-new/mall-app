const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// 静态文件中间件
const staticPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(staticPath));

// 跨域中间件
app.use(cors({
  origin(origin, cb) {
    if (!origin) {
      cb(null, '*');
      return;
    }
    cb(null, origin);
  },
  // 是否携带cookie
  credentials: true,
}));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());

// 处理api请求
// 商品相关api
app.use('/product', require('./api/productMid'));

// 种类相关api
app.use('/category', require('./api/categoryMid'));

// 上传文件api
app.use('/upload', require('./api/upload'));

// 用户登录api
app.use('/login', require('./api/userMid'));

// app日常使用数据
app.use('/usingdata', require('./api/usingdataMid'));

// 处理错误的中间件
app.use(require('./errorMId'));

// 监听9527端口
const port = 9527
app.listen(port, () => {
  console.log('serve listening 9527');
})