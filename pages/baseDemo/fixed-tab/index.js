// import _Page from "../../../../../common/basePage/basePage";

// src/pages/tabbar/customer/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
      isFixed:false,    //导航菜单是否吸顶
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function(event) {
  },
  /**
   * 用户滑动页面事件
   */
  onPageScroll:function(distance){
    let { scrollTop } = distance;
    this.setData({  isFixed : scrollTop >= 110 })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
