//获取应用实例
const app = getApp()

Page({
    data:{
      latitude:'',
      longitude:''
    },
    onLoad: function(option){
      
    },
    getLocation:function(){
      let _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          var latitude = res.latitude
          var longitude = res.longitude
          _this.setData({latitude,longitude})
        }
      })
    }
})