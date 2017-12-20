//index.js
//获取应用实例
var app = getApp()
Page({
  //
  bindLocation: function () {
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        //打开内置地图
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例
          name: '天水师范', // 位置名
          address: '天水师范', // 地址的详细说明
          success: function (res) {
            // success
            console.log(res);

          }
        })
      }
    })
  }
})
