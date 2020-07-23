Component({
  options: {
      addGlobalClass: true,
  },
  properties: {
      loadEnd:Boolean,     //是否加载完成,
      isLoading:Boolean    //是否正在加载数据
  },
  data: {
      
  },
  attached:function(e){
      
  },
  methods: {
    onScrollToBottom(e){
      this.triggerEvent("toEnd");
    },
  }
})