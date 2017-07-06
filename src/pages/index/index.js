//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function() {
    // console.log('onLoad');
    //调用应用实例的方法获取全局数据
    app.wechat.getUserInfo().then(res => {
      this.setData({ userInfo: res.userInfo });
    });
  }
})
