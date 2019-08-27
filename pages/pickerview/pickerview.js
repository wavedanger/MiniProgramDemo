//引入地区数据
var $citys = require('../../utils/pickerview-citys.js');
var cityData = $citys.data;
var provinces = [];
var citys = [];
var countys = [];
//初始化为第一个区域数据，作为picker的第一项
for (let i = 0; i < cityData.length; i++) {
  provinces.push(cityData[i].name);
}
for (let i = 0; i < cityData[0].sub.length; i++) {
  citys.push(cityData[0].sub[i].name)
}
for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
  countys.push(cityData[0].sub[0].sub[i].name)
}
//初始化地区名称
var provinceName = cityData[0].name
var cityName = cityData[0].sub[0].name
var countyName = cityData[0].sub[0].sub[0].name
var address = cityData[0].name + '' + cityData[0].sub[0].name + '' + cityData[0].sub[0].sub[0].name;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCity: true,
    cityValue: [0, 0, 0], //pickerview索引值
    provinces: provinces,
    citys: citys,
    countys: countys,
    address: "这里将显示地区"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  bindCityChange: function(e) {
    //每次滑动都会改变索引值
    var val = e.detail.value
    console.log(val)
    //滑动前的索引值
    var t = this.data.cityValue;
    // 更改时重置address
    address = '';
    // 如果更改的为第一列，那么第二、三列需对应改变
    if (val[0] != t[0]) {
      citys = [];
      countys = [];
      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }
      // 重置pickerview,改变列为当前项，其它列默认为第一项
      this.setData({
        citys: citys,
        countys: countys,
        cityValue: [val[0], 0, 0]
      })
      //重置当前地区名称
      provinceName = cityData[val[0]].name;
      cityName = cityData[val[0]].sub[0].name;
      countyName = cityData[val[0]].sub[0].sub[0].name;
      address += cityData[val[0]].name + "" + cityData[val[0]].sub[0].name + "" + cityData[val[0]].sub[0].sub[0].name;
      return;
    }
    // 如果更改的为第二列，那么第三列需对应改变
    if (val[1] != t[1]) {
      countys = [];
      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      this.setData({
        countys: countys,
        cityValue: [val[0], val[1], 0]
      })
      cityName = cityData[val[0]].sub[val[1]].name;
      countyName = cityData[val[0]].sub[val[1]].sub[0].name;
      address += cityData[val[0]].name + "" + cityData[val[0]].sub[val[1]].name + "" + cityData[val[0]].sub[val[1]].sub[0].name;
      return;
    }
    // 如果更改的为第三列，直接改变
    if (val[2] != t[2]) {
      this.setData({
        county: this.data.countys[val[2]],
        cityValue: val
      })
      countyName = cityData[val[0]].sub[val[1]].sub[val[2]].name;
      address += cityData[val[0]].name + "" + cityData[val[0]].sub[val[1]].name + "" + cityData[val[0]].sub[val[1]].sub[val[2]].name;
      return;
    }
  },
  //操作pickerview
  ideChoice: function(e) {
    var that = this;
    //获取点击的dataset
    var $act = e.currentTarget.dataset.act;
    var $mold = e.currentTarget.dataset.mold;
    //判断操作类型
    if ($act == 'confirm' && $mold == 'city') {
      that.setData({
        isCity: true,
        address: address,
        province: provinceName,
        city: cityName,
        county: countyName
      })
    }
    if ($act == 'cancel' && $mold == 'city') {
      that.setData({
        isCity: true
      })
    }
  },
  // 展示pickerview
  showCity: function(e) {
    this.setData({
      isCity: false
    })
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