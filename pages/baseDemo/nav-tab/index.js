// import _Page from "../../../../../common/basePage/basePage";

// src/pages/tabbar/customer/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
      currentIndex:0,    //选中tab,Index值
      tabData:['销售属性','营销活动','商品档案','商城详情'],
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
   * 切换导航tab
   */
  switchTab(e){
    let idx = e.currentTarget.dataset.idx;
    this.setData({ currentIndex:idx })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
