//index.js
//获取应用实例
var app = getApp()
Page({
  //初始化数据
  data: {
  },
  //页面加载的方法，页面加载时请求数据
  onLoad: function () {
    var that = this;
    //通过后端接口请求轮播图数据
    wx.request({
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=image',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //请求头文件
      header: {
        "Accept": "Application-json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        var ll = res.data.images;
        console.log(ll);
        //将逻辑层里面的数据赋值给视图层
        that.setData({
          images: ll
        })
      }
    })

    //请求电影信息数据
    wx.request({
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=wp',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Accept": "Application-json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);//打印请求数据
        var ii = res.data.result;
        console.log(ii);
        that.setData({
          //将逻辑层里面的数据赋值给视图层
          items: ii
        })
      }
    })
  }
})
