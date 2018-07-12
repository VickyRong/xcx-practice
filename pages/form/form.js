Page({
    data:{
        switchColor:"red"
    },
    switch1Change:function(e){
        console.log(e);
    },
    switch2Change:function(e){
        console.log(e);
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function() {
      console.log('form发生了reset事件')
    }
  })