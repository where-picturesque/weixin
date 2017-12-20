
var app = getApp();
Page({
    data: {
        userInfo: {},
        y_menus:[
            {title:"观影记录"},
            {title:"上映电影"},
            {title:"消息通知"},
            {title:"我的卡券"},
            {title:"吐槽一下"},

        ], 
        x_menus:[
            {title:"收藏",icon:"../../image/collection.png"},
            {title:"夜间",icon:"../../image/eve.png"},
            {title:"设置",icon:"../../image/set.png"}

        ],

    },
    onLoad:function (options) {
        var that = this
        //获取用户的微信信息
        app.getUserInfo(function(userInfo) {
            //打印用户信息
            console.log(userInfo);
            //将逻辑层的数据赋值给视图层
            that.setData({
                userInfo:userInfo
            })
        })
    },
      onShareAppMessage: function (res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123',
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
    }
})