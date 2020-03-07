Page({
  data: {
    dataList: [],
    loadEnd: false,
    isLoading: false
  },
  totalCount: 28,
  //生命周期
  onLoad: function() {
    this.getDataList();
  },
  getDataList() {
    let { dataList, loadEnd } = this.data;
    if (dataList.length >= this.totalCount) {
      return;
    }
    this.setData({ isLoading: true });
    setTimeout(() => {
      dataList = dataList.concat([1, 2, 3, 4, 5, 6, 7, 8]);
      loadEnd = dataList.length >= this.totalCount;
      this.setData({
        loadEnd,
        dataList,
        isLoading: false
      });
    }, 1000);
  }
});
