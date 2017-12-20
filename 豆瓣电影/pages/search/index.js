Page({
    data:{
        page:1,
        size:20,
        subTitle:"请输入搜索内容",
        movies:[]
    },
    // 点击此处触发事件
    handleSearch:function(e){
        var that=this
        // 获取输入框里的值
        this.inputValue=e.detail.value;
        console.log(this.inputValue);
        // 请求数据
        wx.request({
          url: 'https://api.douban.com/v2/movie/search?q='+this.inputValue,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
           header: {"Content-Type":"json"}, // 设置请求的 header
          success: function(res){
           console.log(res);
           var movies=res.data.subjects;
           that.setData({
              movies:movies,
              subTitle:movies.title
           })
          }
        })

    }
})