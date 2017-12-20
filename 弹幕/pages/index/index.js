//index.js
//获取应用实例
var app = getApp()
Page({
  // 初始化内容设置
  data: {
    src: "",
    // 设置弹幕列表
    danmuList: [
      {
        text: "你好厉害",
        color: "red",
        time: 1
      },
      {
        text: "加油",
        color: "blue",
        time: 2
      },
      {
        text: "送你花",
        color: "yellow",
        time: 3
      }
    ]

  },
  // 取得video标签
  onReady: function () {
    //取得video变量
    this.videoContext = wx.createVideoContext("myVideo");
  },
  // 输入框初始化值
  inputValue: "",
  // 取得输入框的值
  bindInput: function (e) {
    //打印这个e 
    console.log(e);
    // 将输入框中的值赋值给inputValue
    this.inputValue = e.detail.value
    console.log(this.inputValue);
  },
  // 
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      //赋值
      text: this.inputValue,
      color: "green",
    })
  }
})
