// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  let msg = encodeURIComponent(event.key)
  return rp(`http://api.qingyunke.com/api.php?key=free&appid=0&msg=${msg}`)
    .then(function (res) {
      console.log(res);
      return res;
    })
    .catch(function (err) {
      console.error(err);
    });
}