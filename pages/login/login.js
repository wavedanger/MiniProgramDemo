// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1:false,
    imageUrl:"../../images/logo.jpg",
    title:"小程序Demo",
    subTitle:"浪险科技股份有限公司"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showModal:function(options){
    let that=this
    let index = options.currentTarget.dataset.index
    if(index=="1"){
      that.setData({
        showModal1:true
      })
    }
  },
  refuse:function(options){
    let that = this
    let index = options.currentTarget.dataset.index
    if (index == "1") {
      that.setData({
        showModal1: false
      })
      wx.showToast({
        title: '已拒绝',
        duration: 2000,
        icon: "none"
      })
    }
  },
  getUserInfo:function(options){
    wx.showToast({
      title: '已成功登录',
      duration:2000,
      icon:"none"
    })
    let that = this
    let index = options.currentTarget.dataset.index
    if (index == "1") {
      that.setData({
        showModal1: false
      })
    }
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