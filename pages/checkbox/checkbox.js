const Mock = require('../../utils/mock.js')
const moreList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    status: 0,
    currentList1: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    that.buildMock()
  },
  buildMock: function() {
    //生成模拟数据
    let that = this
    var mockData = Mock.mock({
      'list|1-20': [{
        'id|+1': 1,
        'name|+1': 1,
        'check': false
      }]
    })
    var arr = mockData.list
    arr = arr.map(obj => {
      const name = "list" + obj.name
      return Object.assign(obj, {
        name
      })
    })
    that.setData({
      list: arr
    })
  },
  switch1Change: function(e) {
    //切换单多选
    let that = this
    moreList.splice(0,moreList.length)
    that.setData({
      currentList1: ""
    })
    that.buildMock()
    if (e.detail.value) {
      that.setData({
        status: 1
      })
    } else {
      that.setData({
        status: 0
      })
    }
  },
  checkChange1: function(e) {
    // console.log(e)
    let that = this
    //单选
    if (that.data.status == 0) {
      that.data.list.forEach((val, index) => {
        var check = 'list[' + index + '].check'
        if (val.id == e.currentTarget.id) {
          that.setData({
            [check]: !that.data.list[index].check
          })
          if (val.check) {
            that.setData({
              currentList1: val.name
            })
          } else {
            that.setData({
              currentList1: ""
            })
          }
        } else {
          that.setData({
            [check]: false
          })
        }
      })
    }
    // 多选
    else if (that.data.status == 1) {
      that.data.list.forEach((val, index) => {
        var check = 'list[' + index + '].check'
        if (val.id == e.currentTarget.id) {
          that.setData({
            [check]: !that.data.list[index].check
          })
          if (val.check && moreList.indexOf(val.name)==-1){
            moreList.push(val.name)
          }else if(!val.check){
            moreList.splice(moreList.indexOf(val.name), 1)
          }
        }
      })
      that.setData({
        currentList1:moreList.join(",")
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})