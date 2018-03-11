// pages/index/chooseCourse/chooseCourse.js

var util = require('../../../utils/util.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//    console.log(options.course)
    var temp = JSON.parse(options.course)
    console.log(temp)
    this.setData({
      course: temp
    })
  },

  chooseNext: function(e) {
  //console.log(e.currentTarget.dataset.categoryid)
  //console.log(e.currentTarget.dataset.index)
    if (this.data.course[e.currentTarget.dataset.index].isHidden ) {
  this.data.course[e.currentTarget.dataset.index].isHidden = false
    } else {
      this.data.course[e.currentTarget.dataset.index].isHidden = true     
    }
    this.setData({
      course: this.data.course
    })
 
  // wx.checkSession({
  //   success: res => {
  //     var categoryId = e.currentTarget.dataset.categoryid
  //     var url = app.globalData.url + 'wxlogin/getuserInfo.php?which=subType&categoryId=' + categoryId + '&userId=' + app.globalData.userId + '&session_key=' + app.globalData.session_key
  //     // console.log('cc:'+url)
  //     util.httpRequire(url, this.callback)
  //   },
  //   fail: res=> {
  //     wx.showToast({
  //       title: '登录状态异常',
  //     })
  //     wx.redirectTo({
  //       url: '../index',
  //     })
  //   }
  // })

  },
  callback: function (res) {
//        console.log('cc:'+res.data)
    wx.navigateTo({
      url: 'subType?course=' + JSON.stringify(res.data),
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})