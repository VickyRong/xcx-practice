Page({
  data: {
    couponList:[
      {
        price:168,
        iconText:"代",
        title:"168元代金券",
        time:"2014.12.15 ～ 2014.12.30",
        info:"(满128元可用)",
        cId:1021,
      },
      {
        price:20,
        iconText:"兑",
        title:"哈根达斯兑换券",
        time:"2010.12.15 ～ 2012.12.30",
        info:"(满999元可用)",
        cId:2039,
      },
      {
        price:100,
        iconText:"折",
        title:"折扣券",
        time:"2018.12.15 ～ 2018.12.30",
        info:"(满1000元可用)",
        cId:1999
      },
    ],
    checkedList:[2039,1999]
  },
  //生命周期
  onLoad:function(){

  },
  //事件处理函数
  onMyEvent: function(e) {
    let cId = e.detail.cId;
    let checkedArr = [...this.data.checkedList];
    if(checkedArr.includes(cId)){ //也可以用indexOf === -1 判断元素是否在数组
      checkedArr.pop(cId);
    }else{
      checkedArr.push(cId);
    }
    this.setData({checkedList:checkedArr})
  },
  onPickChange:function(e){
    console.log("引用页面：",e)
  }
})
