Page({
    // 初始化数据
     data: {
        //  加载失败
         loading:false
  },
  // 请求数据

onLoad:function(options){
var that=this
// 传递id
console.log(options.id);
wx.request({
  url: 'https://api.douban.com/v2/movie/subject/'+options.id,
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
     "Content-Type":"json"
   }, // 设置请求的 header
  success: function(res){
    // success
    console.log(res.data);
    // var moviesDetail=res.data;
    // console.log(moviesDetail);
    // 将逻辑层的数据赋值给视图层
    that.setData({
        // 加载消失
        loading:true,
        moviesDetail:res.data
    })
    wx.setNavigationBarTitle({
      title:res.data.title
      
    })
  }
})
}
})