exports.pick = function (obj, ...props) {
  // 如果数据不存在或者不是对象则直接返回原数据
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  const newObj = {};
  // 筛选数据
  for (const key in obj) {
    if (props.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};