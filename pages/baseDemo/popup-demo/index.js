Page({
  data: {
    pupopStatus:false
  },
  onPopupHide(){
    this.setData({ pupopStatus: false });
  },
  onPopupShow(){
    this.setData({ pupopStatus: true });
  }
})
