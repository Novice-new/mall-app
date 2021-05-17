const Product = require('../model/Product');
const CItem = require('../model/CItem');
const Category = require('../model/Category');
const validate = require('validate.js');
const { pick } = require('../utils/propHelp');
const { Op } = require('sequelize');
const requiredProp = ['title', 'desc', 'CItemId', 'tags', 'images', 'price', 'price_off', 'unit', 'state', 'inventory', 'sale'];

exports.add = async function (obj) {
  obj = pick(obj, ...requiredProp);
  validate.validators.cItemExits = async function (value) {
    const isExits = await CItem.findByPk(value);
    if (isExits) {
      return;
    } else {
      return 'is not exist';
    }
  };
  const addProductRule = {
    title: {
      presence: {
        allowEmpty: false,
      },
      type: "string",
      length: {
        minimum: 1,
        maximum: 10,
      },
    },
    desc: {
      presence: {
        allowEmpty: true,
      },
      type: "string",
      length: {
        minimum: 1,
        maximum: 20,
      }
    },
    CItemId: {
      presence: true,
      // 只允许整数
      numericality: {
        onlyInteger: true,
        // 不开启严格匹配
        strict: false,
      },
      // 验证该子类是否存在
      cItemExits: true,
    },
    tags: {
      presence: {
        allowEmpty: false,
      },
      type: "array",
    },
    images: {
      presence: {
        allowEmpty: true,
      },
      type: "array",
    },
    price: {
      presence: {
        allowEmpty: false,
      },
      numericality: true,
    },
    price_off: {
      presence: false,
      numericality: true,
    },
    unit: {
      presence: {
        allowEmpty: false,
      },
      type: 'string',
    },
    // 0为未上架，1位下架
    state: {
      presence: true,
      numericality: {
        onlyInteger: true,
        // 不开启严格匹配
        strict: false,
      },
    },
    inventory: {
      presence: {
        allowEmpty: false,
      },
      numericality: true,
    },
    sale: {
      presence: false,
      numericality: true,
    }
  }
  await validate.async(obj, addProductRule);
  obj.tags = obj.tags.join(',');
  if (obj.images) {
    obj.images = obj.images.join(',');
  }
  const result = await Product.create(obj);
  return result.toJSON();
}
exports.delete = async function (id) {
  return await Product.destroy({
    where: {
      id,
    }
  });
}
exports.update = async function (id, obj) {
  obj = pick(obj, ...requiredProp);
  if (obj.tags) {
    obj.tags = obj.tags.join(',');
  };
  if (obj.images) {
    obj.images = obj.images.join(',');
  };
  // await validate.async(obj, addProductRule);
  const result = await Product.update(obj, {
    where: {
      id,
    }
  })
  return result;
};
exports.getProduct = async function (limit, page, title, CategoryId) {
  const productWhere = {};
  const categoryWhere = {};
  if (title) {
    productWhere.title = {
      [Op.like]: `%${title}%`
    }
  }
  if (CategoryId) {
    categoryWhere.CategoryId = CategoryId;
  }
  const result = await Product.findAndCountAll({
    where: productWhere,
    attributes: ['title', 'desc', 'tags', 'images', 'price', 'price_off', 'unit', 'state', 'inventory', 'id', 'CItemId'],
    offset: (page - 1) * limit,
    limit: +limit,
    include: {
      where: categoryWhere,
      attributes: ['name', 'CategoryId'],
      model: CItem,
    }
  });
  let data = JSON.parse(JSON.stringify(result.rows));
  data = data.map(item => {
    return {
      ...item,
      tags: item.tags.split(','),
      images: item.images.split(','),
    }
  });
  return {
    total: result.count,
    data,
  };
};
exports.getProductById = async function (id) {
  const result = await Product.findByPk(id, {
    attributes: [...requiredProp],
    include: {
      model: CItem,
      attributes: ['name', 'CategoryId'],
    }
  });
  let data = result.toJSON();
  data.images = data.images.split(',');
  data.tags = data.tags.split(',');
  return data;
}