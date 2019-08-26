//logs.js
const {
  formatTime
} = require('../../utils/util.js')
Page({
  data: {
    text: "我是快乐的跑马灯，一起么老铁，跑起来",
    textLength: 0,
    marqueePace: 1, //滚动速度
    marqueeDistance: 0, //边距
    fontSize: 14, //字体大小
    orientation: "left", //滚动方向，跑灯3为先行方向
    interval: 20, //滚动时间
    marqueeDistance2: 0, //边距
    marquee2copy_status: false, //是否显示非第一段文本
    marquee2_margin: 60, //距第一段文本距离
    color: "black",
    marqueeDistance3: 0,
    marqueeDistanceStatus3: "add"
  },
  onShow: function() {
    var that = this
    // 拿到文本宽度
    var query = wx.createSelectorQuery()
    // 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。
    query.select('.marquee-text').boundingClientRect(function(rect) {
      that.setData({
        textLength: rect.width
      })
    }).exec();
    //拿到可使用窗口宽度
    var windowWidth = wx.getSystemInfoSync().windowWidth
    that.setData({
      windowWidth: windowWidth
    })
    that.runMarquee()
    that.runMarquee2()
    that.runMarquee3()
  },
  runMarquee: function() {
    var that = this
    var interval = setInterval(function() {
      if (-that.data.marqueeDistance < that.data.textLength) {
        that.setData({
          marqueeDistance: that.data.marqueeDistance - that.data.marqueePace
        })
      } else {
        clearInterval(interval)
        that.setData({
          marqueeDistance: that.data.windowWidth
        })
        that.runMarquee()
      }
    }, that.data.interval);
  },
  runMarquee2: function() {
    var that = this;
    var interval = setInterval(function() {
      if (-that.data.marqueeDistance2 < that.data.textLength) {
        that.setData({
          marqueeDistance2: that.data.marqueeDistance2 - that.data.marqueePace,
          marquee2copy_status: true,
        });
      } else {
        that.setData({
          marqueeDistance2: that.data.marquee2_margin // 第一段文本滚动完，替换到第二段继续滚动，如果文本过短，会出现留白，可在wxml复制多份文本
        });
        clearInterval(interval);
        that.runMarquee2();
      }
    }, that.data.interval);
  },
  runMarquee3: function() {
    var that = this
    var interval = setInterval(function() {
      if (that.data.windowWidth < that.data.textLength) {
        //要想走位，文本不能大于可用宽度
        wx.showToast({
          title: '跑马灯3文本过长',
          icon: 'none',
          duration: 2000
        })
        clearInterval(interval)
      }
      if (that.data.marqueeDistance3 == that.data.windowWidth - that.data.textLength) {
        that.setData({
          marqueeDistanceStatus3: "reduce"
        })
      }
      if (that.data.marqueeDistance3 == 0) {
        that.setData({
          marqueeDistanceStatus3: "add"
        })
      }
      if (that.data.marqueeDistanceStatus3 == "add") {
        that.setData({
          marqueeDistance3: that.data.marqueeDistance3 + that.data.marqueePace
        })
      }
      if (that.data.marqueeDistanceStatus3 == "reduce") {
        that.setData({
          marqueeDistance3: that.data.marqueeDistance3 - that.data.marqueePace
        })
      }
    }, that.data.interval)
  }
})