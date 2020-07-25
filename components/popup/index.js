Component({
  properties:{
    show:{          //是否展示
      type:Boolean,
      value:false
    }
  },
  data: {
  },
  methods:{
    onClose:function(e){
      this.triggerEvent('close',e)
    },
    noop:function(){}
  },
})
