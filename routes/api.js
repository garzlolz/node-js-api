var express = require('express');
var router = express.Router();

const data = [{ id: 1, name: "小明" }];
// 設置請求路徑為 /products 請求方法為 get
router.get("/products", function (req, res, next) {
  res.send({ success: true, data }).end();
});

router.post("/product", function (req, res) {
  // req.body 是前端傳來的資料
  const product = req.body;
  // 後端要處理新增 id
  product.id = data.length+1;
  // 把資料加到 data 中
  data.push(product);
  // 傳響應告訴前端已新增成功
  res.send({ success: true, data }).end();
  // console.log 看一下 data, 確認是否新增成功
  console.log(data);
});

// 設置請求路徑為 /product/:id 請求方法為 delete
router.delete("/product/:id", function (req, res) {
  // 首先通過 req.params.id 獲取傳入的 id
  const id = req.params.id;
  // 然後遍歷 data 找出 id 符合的那筆資料 將它刪除
  data.forEach((item, key) => {
    if (item.id == id) {
      data.splice(key, 1);
    }
  });
  // 最後傳送響應告訴前端已刪除成功
  res.send({ success: true, data }).end();
});
module.exports = router;
