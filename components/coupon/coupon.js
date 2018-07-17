Component({
    properties: {
      price: {
        type: Number,
        value: 0,
      },
      title:{
        type: String,
        value:''
      },
      time:{
        type:String,
        value:''
      },
      info:{
        type:String,
        value:''
      },
      iconText:{
        type:String,
        value:'代'
      },
      cId:{
        type:Number,
        value:0
      },
      checkedList:{
        type:Array,
        value:[]
      }
    },
    data:{
      selectStatus:false,
    },
    //生命周期
    attached:function(e){
      let checkedArr = this.data.checkedList;
      let cId = this.data.cId;
      this.setData({
        selectStatus: checkedArr.includes(cId) ? true : false
      })
    },
    methods: {
      onTap: function(e){
        let myEventDetail = {} // detail对象，提供给事件监听函数
        let cId = this.data.cId;
        this.setData({
          selectStatus: !this.data.selectStatus,
        })
        myEventDetail.cId = cId;
        this.triggerEvent('myevent', myEventDetail)
      }
    }
  })