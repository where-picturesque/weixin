//index.js
//获取应用实例
var app = getApp()
Page({
  //按钮事件的处理
  bindButton:function(){
    var that=this
    //选择本地视频播放方法,本质调用系统方法
    wx.chooseVideo({
      sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
      // maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
      camera: ['front', 'back'],
      success: function(res){
        // success
        //赋值数据
        that.setData({
          src:res.tempFilePath
        })


      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
