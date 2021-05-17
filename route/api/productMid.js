const express = require('express');
const router = express.Router();
const { getResult, asynchandler } = require('../resultHelp');
const productSev = require('../../service/productSev');

// 查询所有商品
router.get('/all', asynchandler(
  async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const title = req.query.title || null;
    const CategoryId = req.query.CategoryId || null;
    const result = await productSev.getProduct(limit, page, title, CategoryId);
    return result;
  }
));

// 添加商品
router.post('/add', asynchandler(
  async (req, res) => {
    const result = await productSev.add(req.body);
    return result;
  }
));

// 编辑产品接口
router.put('/edit:id', asynchandler(
  async function (req, res) {
    const result = await productSev.update(req.params.id, req.body);
    return result;
  }
));

// 查看商品详情
router.get('/:id', asynchandler(
  async function (req, res) {
    const result = await productSev.getProductById(req.params.id);
    return result;
  }
));

// 删除商品
router.delete('/:id', asynchandler(
  async function (req, res) {
    const result = await productSev.delete(req.params.id);
    return result;
  }
))


module.exports = router;