// pages/cinema/index.js
Page({
  data:{},
  onLoad:function(){
    var that=this;
    //发送请求
    wx.request({
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=cinema',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         "Accept":"application-json"
       }, // 设置请求的 header
      success: function(res){
          console.log(res);
        var data=res.data.cinemas;
        that.setData({
          items:data
          })
        // success
      },
    })
  }
})