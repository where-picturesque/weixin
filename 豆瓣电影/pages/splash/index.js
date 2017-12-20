//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  // 请求数据

  onLoad:function(){
    var that=this 
    wx.request({
    url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming_soon',
    data: {},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
   header: {
     "Content-Type":"json"
   }, // 设置请求的 header
    success: function(res){
      // success
      console.log(res);
      var moviesComing=res.data.result;
      console.log(moviesComing);
      // 截取其中的三个电影信息
      var moviesC=moviesComing.slice(3,6);
      console.log(moviesC);
      // 将逻辑层数据赋值给视图层
      that.setData({
        movies:moviesC
      })
    }
  })
  },
  // 添加按钮点击事件
  handleStart:function(){
    // 跳转到tabBar页面
    wx.switchTab({
      url: '../board/index'
      
    })
  }

 

})
