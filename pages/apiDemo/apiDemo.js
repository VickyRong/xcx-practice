//获取应用实例
const app = getApp();

Page({
  data: {
    latitude: "",
    longitude: ""
  },
  onLoad: function(option) {},
  //获取地理位置
  getLocation: function() {
    let _this = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        _this.setData({ latitude, longitude });
      }
    });
  },
  //显示消息提示窗
  showLoading: function() {
    wx.showLoading({
      title: "加载中"
    });
    setTimeout(function() {
      wx.hideLoading();
    }, 2000);
  },
  //显示模态窗
  showModal: function() {
    wx.showModal({
      title: "提示",
      content: "这是一个模态弹窗",
      success: function(res) {
        if (res.confirm) {
          console.log("用户点击确定");
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      }
    });
  },
  //显示操作菜单
  showActionSheet:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  }
});
