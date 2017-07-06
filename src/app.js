import * as api from './utils/request';
import * as wechat from './utils/wechat';

//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  api: api,
  wechat: wechat,
  globalData: {
    userInfo: null
  }
})
