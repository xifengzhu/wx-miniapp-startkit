const Config = require('../config');

const URI = Config.api.host;

/**
 * @params {Object}   params 参数
 * @params {String}   url 参数
 * @params {String}   method 类型
 * @return {Promise}  包含抓取任务的Promise
 **/
function request(url, params, method = 'get') {
  const requestUrl = URI + url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: requestUrl,
      method: method,
      data: Object.assign({}, params),
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json;charset=utf-8'
      },
      success: resolve,
      fail: reject
    })
  })
}

function get(url, params) {
  return request(url, params);
}

function post(url, params) {
  return request(url, params, 'post');
}

function destroy(url, params) {
  return request(url, params, 'delete');
}

module.exports = {
  get,
  post,
  destroy
}
