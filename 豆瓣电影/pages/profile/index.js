var app = getApp();
Page({

    // 初始化数据
    data: {
        userInfo: {},
        y_menus: [
            { title: "观影记录" },
            { title: "消息通知" },
            { title: "我的卡券" },
            { title: "吐槽一下" },
        ],
        x_menus:[
            {title:"收藏",icon:"../../images/collection.png"},
            {title:"夜间",icon:"../../images/eve.png"},
            {title:"设置",icon:"../../images/set.png"}
        ]


    },
    onLoad: function (options) {
        var that = this
        // 获取用户的微信信息
        app.getUserInfo(function (userInfo) {
            //   打印用户信息
            console.log(userInfo);
            // 将逻辑层数据赋值给视图层
            that.setData({
                userInfo: userInfo
            })
        })

    }

})