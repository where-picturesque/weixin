Page({
    data: {
    motto: 'Hello World',
    userInfo: {}
  },
  // 请求数据 轮播图

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
      var sliderData=res.data.result;
      // 将逻辑层数据赋值给视图层
      that.setData({      
        sliderData:sliderData
      })
    }
  }),
  // 请求正在上映
  wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=in_theaters',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
       "Content-Type":"json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        // 调试的object的data的result对应
        var film = res.data.result;
        console.log(film);
        //将逻辑层的数据赋值给视图层 moviesOn是 wx:for-items="{{moviesOn}}" 
        that.setData({
         moviesOn: film
        })

      }
    }),
    
   // 请求即将上映
      wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming_soon',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
       "Content-Type":"json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        // 调试的object的data的result对应
        var film = res.data.result;
        console.log(film);
        //将逻辑层的数据赋值给视图层 moviesOn是 wx:for-items="{{moviesOn}}" 
        that.setData({
         movieswillOn: film
        })

      }
    }),
    // 请求top250
      wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=top250',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
       "Content-Type":"json"
      }, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        // 调试的object的data的result对应
        var film = res.data.result;
        console.log(film);
        //将逻辑层的数据赋值给视图层 moviesOn是 wx:for-items="{{moviesOn}}" 
        that.setData({
         moviesTop: film
        })

      }
    })

  }
     })
    
