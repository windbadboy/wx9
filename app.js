//app.js


var util = require('utils/util.js');

App({
  onLaunch: function () {
  var that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var code = ''

    //console.log(that)
    // 登录


   // this.globalData.userId="111"

    
  },



  globalData: {
    userInfo: null,
    userId : '',
    currentCourse : '',
    url:'http://140.143.87.178/',
    session_key: '',
  },

  callback: function (res) {
 //   this.globalData.userId = res
    console.log('onlaunchSessionKey:'+wx.getStorageSync('session_key'))
  }
})

