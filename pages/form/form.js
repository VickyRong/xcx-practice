Page({
    data: {
        switchColor:"#ff9800",
        inputValue:"",
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
          {
            id: 0,
            name: '美国'
          },
          {
            id: 1,
            name: '中国'
          },
          {
            id: 2,
            name: '巴西'
          },
          {
            id: 3,
            name: '日本'
          }
        ],
        checkBoxList:[
          {name: '北京', value: '北京'},
          {name: '上海', value: '上海', checked: 'true'},
          {name: '广州', value: '广州'},
          {name: '深圳', value: '深圳'},
          {name: '苏州', value: '苏州'},
          {name: '南京', value: '南京'},
        ],
        checkedData:[],
        pickIndex: 0,
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        multiIndex: [0, 0, 0],
        objectMultiArray: [
          [
            {
              id: 0,
              name: '无脊柱动物'
            },
            {
              id: 1,
              name: '脊柱动物'
            }
          ], [
            {
              id: 0,
              name: '扁性动物'
            },
            {
              id: 1,
              name: '线形动物'
            },
            {
              id: 2,
              name: '环节动物'
            },
            {
              id: 3,
              name: '软体动物'
            },
            {
              id: 3,
              name: '节肢动物'
            }
          ], [
            {
              id: 0,
              name: '猪肉绦虫'
            },
            {
              id: 1,
              name: '吸血虫'
            }
          ]
        ],
        date: '2016-09-01',
        time: '12:01',
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部',
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国', checked: 'true'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ],
        height:100,
        focus:false

    },
    switch1Change:function(e){
        console.log(e);
    },
    switch2Change:function(e){
        console.log(e);
    },
    bindKeyInput:function(e){
        this.setData({
            inputValue : e.detail.value
        })
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            pickIndex: e.detail.value
        })
    },    
    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          multiIndex: e.detail.value
        })
    },
    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
        var data = {
          multiArray: this.data.multiArray,
          multiIndex: this.data.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            switch (data.multiIndex[0]) {
              case 0:
                data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
            }
            data.multiIndex[1] = 0;
            data.multiIndex[2] = 0;
            break;
          case 1:
            switch (data.multiIndex[0]) {
              case 0:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                    break;
                  case 1:
                    data.multiArray[2] = ['蛔虫'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                    break;
                  case 3:
                    data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                    break;
                  case 4:
                    data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                    break;
                }
                break;
              case 1:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['鲫鱼', '带鱼'];
                    break;
                  case 1:
                    data.multiArray[2] = ['青蛙', '娃娃鱼'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                    break;
                }
                break;
            }
            data.multiIndex[2] = 0;
            console.log(data.multiIndex);
            break;
        }
        this.setData(data);
      },
    bindTimeChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          time: e.detail.value
        })
    },
    bindDateChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          region: e.detail.value
        })
    },
    radioChange: function(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    checkboxChange: function(e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
      this.setData({
        checkedData : e.detail.value
      })
    },
    bindButtonTap: function() {
      this.setData({
        focus: true
      })
    },
    bindTextAreaBlur: function(e) {
      console.log(e.detail.value)
    },
    
    bindFormSubmit: function(e) {
      console.log(e.detail.value.textarea)
    },
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function() {
      console.log('form发生了reset事件')
    }
  })