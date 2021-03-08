// pages/demo04/demo04.js
// pcity/pcity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //wxml页面显示数组
    area: [],
    model: [],
    modelNum: [],
    del: [],
    //当前选中数组的下标值
    customIndex: [0, 0, 0],
    //当前选中数组
    onlyArray: [
      [],
      [],
      []
    ],
    //customArray假设为我们从后台获取到的json数据
    customArray: [
      //2.2总拼
      {
        name: '2.2总拼',
        product: [
          { name: '378167' }, 
          { name: '347819' }, 
          { name: '358860' }, 
          { name: '360063' }, 
          { name: '367369' }, 
          { name: '372008' }, 
          { name: '378160' }, 
          { name: '378167' }, 
          { name: '378197' }, 
          { name: '378198' }, 
          { name: '378204' }, 
          { name: '378223' }, 
          { name: '378229' }, 
          { name: '378230' }, 
          { name: '378236' }, 
          { name: '380306' }, 
          { name: '380380' }, 
          { name: '389212' }, 
          { name: '389247' }, 
          { name: '389248' }, 
          { name: '389286' }, 
          { name: '393123' }, 
          { name: '395847' }, 
          { name: '397824' }, 
          { name: '401767' }, 
          { name: '401771' }, 
          { name: '401779' }, 
          { name: '401780' }, 
          { name: '401783' }, 
          { name: '401787' }, 
          { name: '1973-1' }, 
          { name: '1973-4' }, 
          { name: '1973-7' }, 
          { name: '1973-8' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-6' }, 
          { name: '333612' }, 
          { name: '344431' }, 
          { name: '354631' }, 
          { name: '389351' }, 
          { name: 'H-22' }, 
          { name: 'H-23' }, 
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2底板分拼
      {
        name: '2.2底板分拼',
        product: [
          { name: '374889' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1973-8' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '323901' }, 
          { name: '324918-1' }, 
          { name: '324918-2' }, 
          { name: '324918-3' }, 
          { name: '324918-5' }, 
          { name: '324918-6' }, 
          { name: '324918-7' }, 
          { name: '333595' }, 
          { name: '347819' }, 
          { name: '358799' }, 
          { name: '359870' }, 
          { name: '367369' }, 
          { name: '372008' }, 
          { name: '374889' }, 
          { name: '376523' }, 
          { name: '378154' }, 
          { name: '378155' }, 
          { name: '378160' }, 
          { name: '380313' }, 
          { name: '380323' }, 
          { name: '380326' }, 
          { name: '380327' }, 
          { name: '384593' }, 
          { name: '389149' }, 
          { name: '389230' }, 
          { name: '389251' }, 
          { name: '389264' }, 
          { name: '389269' }, 
          { name: '389286' }, 
          { name: '389297' }, 
          { name: '389298' }, 
          { name: '393115' }, 
          { name: '393134' }, 
          { name: '393136' }, 
          { name: '393138' }, 
          { name: '393140' }, 
          { name: '393150' }, 
          { name: '393152' }, 
          { name: '393154' }, 
          { name: 'H-21' }, 
          { name: 'H-23' }, 
          { name: 'H-24' }, 
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2底板主线
      {
        name: '2.2底板主线',
        product: [
          { name: '359087' }, 
          { name: '360063' }, 
          { name: '378130' }, 
          { name: '378150' }, 
          { name: '381735' }, 
          { name: '389303' }, 
          { name: '397805' }, 
          { name: '409271' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '314918-6' }, 
          { name: '324918-1' }, 
          { name: '324918-2' }, 
          { name: '324918-3' }, 
          { name: '324918-5' }, 
          { name: '324918-7' }, 
          { name: '333612' }, 
          { name: '347819' }, 
          { name: '348463' }, 
          { name: '370902' }, 
          { name: '370903' }, 
          { name: '374887' }, 
          { name: '374889'}, 
          { name: '376523' }, 
          { name: '380236' }, 
          { name: '381735' }, 
          { name: '389233' }, 
          { name: '389266' }, 
          { name: 'H-22' }, 
          { name: 'H-24'}, 

        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2门盖
      {
        name: '2.2门盖',
        product: [
          { name: '378167' }, 
          { name: '389233' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-12' }, 
          { name: '324918-5' }, 
          { name: '324918-6' }, 
          { name: '324918-7' }, 
          { name: '324918-8' }, 
          { name: '333612' }, 
          { name: '354631' }, 
          { name: '358799' }, 
          { name: '367369' }, 
          { name: '374964' }, 
          { name: '376523' }, 
          { name: '378206' }, 
          { name: '380306' }, 
          { name: '389124' }, 
          { name: '389125' }, 
          { name: '389212' }, 
          { name: '389227' }, 
          { name: '389238' }, 
          { name: '389239'}, 
          { name: '389243'}, 
          { name: '389266' }, 
          { name: '389288' }, 
          { name: '389291' }, 
          { name: '393097' }, 
          { name: '393106' }, 
          { name: '393111' }, 
          { name: '409263' }, 
          { name: 'H-20' }, 
          { name: 'H-22'}, 
          { name: 'H-23' }, 
          { name: 'H-24'}, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.2侧围
      {
        name: '2.2侧围',
        product: [
          { name: '378186' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1973-8' }, 
          { name: '1974-1' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-2' }, 
          { name: '324918-3' }, 
          { name: '324918-6' }, 
          { name: '333612' }, 
          { name: '347819' }, 
          { name: '358799' }, 
          { name: '367369' }, 
          { name: '374889' }, 
          { name: '376437' }, 
          { name: '378186' }, 
          { name: '380306' }, 
          { name: '380326' }, 
          { name: '380327' }, 
          { name: '389260' }, 
          { name: '389269' }, 
          { name: '389275' }, 
          { name: '389276' }, 
          { name: '389277' }, 
          { name: '389297' }, 
          { name: '389298' }, 
          { name: '392181' }, 
          { name: '392182' }, 
          { name: '393077' }, 
          { name: '393079' }, 
          { name: '393085' }, 
          { name: '393129' }, 
          { name: '393157' }, 
          { name: '397669' }, 
          { name: '397671' }, 
          { name: 'H-23' }, 
          { name: 'H-24' }, 
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1侧围
      {
        name: '2.1侧围',
        product: [
          { name: '344431' }, 
          { name: '378130' }, 
          { name: '378177' }, 
          { name: '378206' }, 
          { name: '378243' }, 
          { name: '381735' }, 
          { name: '389284' }, 
          { name: '389303' }, 
          { name: '395849' }, 
          { name: '395852' }, 
          { name: '401773' }, 
          { name: '401791' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-3' }, 
          { name: '324918-5' }, 
          { name: '324918-7' }, 
          { name: '324918-8' }, 
          { name: '358873' }, 
          { name: '359870' }, 
          { name: '378164' }, 
          { name: '378165' }, 
          { name: '378177' }, 
          { name: '378183' }, 
          { name: '378206' }, 
          { name: '378243' }, 
          { name: '381737' }, 
          { name: '389118'}, 
          { name: '389214' }, 
          { name: '389235' }, 
          { name: '395825' }, 
          { name: '395838'}, 
          { name: '401769' }, 
          { name: 'H-21' }, 
          { name: 'H-23' }, 
          { name: 'H-24' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1门盖
      {
        name: '2.1门盖',
        product: [
          { name: '10313' }, 
          { name: '10977' }, 
          { name: '378167' }, 
          { name: '378206' }, 
          { name: '389233' }, 
          { name: '389243' }, 
          { name: '389275' }, 
          { name: '389276' }, 
          { name: '389277' }, 
          { name: '389281' }, 
          { name: '389282' }, 
          { name: '395838' }, 
          { name: '395840' }, 
          { name: '1973-1' }, 
          { name: '1973-7' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-14' }, 
          { name: '324918-3' }, 
          { name: '324918-6' }, 
          { name: '324918-7' }, 
          { name: '324918-8' }, 
          { name: '347819' }, 
          { name: '351512' }, 
          { name: '358799' }, 
          { name: '367369' }, 
          { name: '374964' }, 
          { name: '378160' }, 
          { name: '381174' }, 
          { name: '389233' }, 
          { name: '389239' }, 
          { name: '389260' }, 
          { name: '389273' }, 
          { name: '389288' }, 
          { name: '389291' }, 
          { name: '393097'}, 
          { name: '393109'}, 
          { name: '393111' }, 
          { name: '401776'}, 
          { name: '401777' }, 
          { name: '401789' }, 
          { name: 'H-20' }, 
          { name: 'H-22' }, 
          { name: 'H-23' }, 
          { name: 'H-24' }, 
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1底板主线
      {
        name: '2.1底板主线',
        product: [
          { name: '11376' }, 
          { name: '17694' }, 
          { name: '347819' }, 
          { name: '348463' }, 
          { name: '363103' }, 
          { name: '374887' }, 
          { name: '376523' }, 
          { name: '381354' }, 
          { name: '1074-11' }, 
          { name: '1973-1' }, 
          { name: '1973-2' }, 
          { name: '1973-7' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11'}, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '1976-1' }, 
          { name: '1976-9' }, 
          { name: '314918-5' }, 
          { name: '324918-1' }, 
          { name: '324918-2' }, 
          { name: '324918-3' }, 
          { name: '324918-5' }, 
          { name: '324918-6' }, 
          { name: '344431' }, 
          { name: '347819' }, 
          { name: '359087' }, 
          { name: '359870' }, 
          { name: '360063' }, 
          { name: '374889' }, 
          { name: '376523' }, 
          { name: '378130'}, 
          { name: '378150' }, 
          { name: '378183' }, 
          { name: '380236'}, 
          { name: '381735' }, 
          { name: '389149' }, 
          { name: '389214' }, 
          { name: '389230' }, 
          { name: '389269'}, 
          { name: '389301' }, 
          { name: '389303' }, 
          { name: '393225' }, 
          { name: '401756' }, 
          { name: '401759' }, 
          { name: '401762' }, 
          { name: 'H-22' }, 
          { name: 'H-23' }, 
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1底板分拼
      {
        name: '2.1底板分拼',
        product: [
          { name: '10108' }, 
          { name: '11376' }, 
          { name: '11421' }, 
          { name: '11891' }, 
          { name: '11921' }, 
          { name: '12616' }, 
          { name: '13164' }, 
          { name: '14736' }, 
          { name: '15643' }, 
          { name: '15644' }, 
          { name: '15991' }, 
          { name: '17691' }, 
          { name: '17692' }, 
          { name: '17693'}, 
          { name: '17694' }, 
          { name: '318130' }, 
          { name: '341403' }, 
          { name: '342324' }, 
          { name: '342541' }, 
          { name: '347819' }, 
          { name: '359870' }, 
          { name: '367369' }, 
          { name: '374889' }, 
          { name: '376523' }, 
          { name: '378130' }, 
          { name: '380236' }, 
          { name: '380313' }, 
          { name: '380380' }, 
          { name: '384593' }, 
          { name: '389225' }, 
          { name: '389227' }, 
          { name: '389230' }, 
          { name: '389233' }, 
          { name: '389235' }, 
          { name: '389238' }, 
          { name: '389239' }, 
          { name: '389251' }, 
          { name: '389254' }, 
          { name: '389255' }, 
          { name: '389257' }, 
          { name: '389258' }, 
          { name: '389260' }, 
          { name: '389263' }, 
          { name: '389264' }, 
          { name: '389266' }, 
          { name: '389269' }, 
          { name: '389271' }, 
          { name: '389294' }, 
          { name: '389297'}, 
          { name: '389298' }, 
          { name: '389307' }, 
          { name: '11891' }, 
          { name: '1973-1' }, 
          { name: '1973-3' }, 
          { name: '1973-5' }, 
          { name: '1973-7'}, 
          { name: '1973-8' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: 'H-21'}, 
          { name: 'H-22'}, 
          { name: 'H-23' }, 
          { name: 'H-24' },
          { name: 'H-25' }, 
        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
      //2.1总拼
      {
        name: '2.1总拼',
        product: [
          { name: '347819' }, 
          { name: '358860' }, 
          { name: '360063' }, 
          { name: '367369' }, 
          { name: '372008' }, 
          { name: '378160' }, 
          { name: '378167' }, 
          { name: '378197' }, 
          { name: '378198' }, 
          { name: '378204' }, 
          { name: '378223' }, 
          { name: '378229' }, 
          { name: '378230' }, 
          { name: '378236' }, 
          { name: '380306' }, 
          { name: '380380' }, 
          { name: '389212' }, 
          { name: '389247' }, 
          { name: '389248' }, 
          { name: '389286' }, 
          { name: '393123' }, 
          { name: '395847' }, 
          { name: '397824' }, 
          { name: '401767' }, 
          { name: '401771' }, 
          { name: '401779' }, 
          { name: '401780' }, 
          { name: '401783' }, 
          { name: '401787' }, 
          { name: '1973-1' }, 
          { name: '1973-4' }, 
          { name: '1973-7' }, 
          { name: '1973-8' }, 
          { name: '1974-1' }, 
          { name: '1974-10' }, 
          { name: '1974-11' }, 
          { name: '1974-12' }, 
          { name: '1974-13' }, 
          { name: '1974-9' }, 
          { name: '324918-6' }, 
          { name: '333612' }, 
          { name: '344431' }, 
          { name: '354631' }, 
          { name: '389351'}, 
          { name: 'H-22'}, 
          { name: 'H-23'}, 
          { name: 'H-25'}, 

        ],
        num: [
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
        ]
      },
    ]
  },

  //多列自定义选择器改变value的方法
  bindCustomPickerChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray,
      area1 = this.data.onlyArray[0][customIndex[0]],
      model1 = this.data.onlyArray[1][customIndex[1]],
      modelNum1 = this.data.onlyArray[2][customIndex[2]],
      del1 = '删除',
      del = this.data.del,
      area = this.data.area,
      model = this.data.model,
      modelNum = this.data.modelNum;

    area.push(area1);
    model.push(model1);
    modelNum.push(modelNum1);
    del.push(del1);



    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]
    console.log(area1);
    console.log(model1);
    console.log(modelNum1);
    console.log(del1);


    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]]);
    this.setData({
      customIndex: e.detail.value,
      area,
      model,
      modelNum,
      del
    })

  },

  //多列自创选择器换列方法
  bindCustomPickerColumnChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    customIndex[e.detail.column] = e.detail.value;
    // console.log(onlyArray);

    var searchColumn = () => {
      for (var i = 0; i < customArray.length; i++) {
        var arr1 = [];
        if (i == customIndex[0]) {
          for (var j = 0; j < customArray[i].product.length; j++) {
            arr1.push(customArray[i].product[j].name);
          }
          onlyArray[1] = arr1;
        }
      };
    }

    switch (e.detail.column) {
      case 0:
        customIndex[1] = 0;
        customIndex[2] = 0;
        searchColumn();
        break;
      case 1:
        customIndex[2] = 0;
        searchColumn();
        break;
    }
    this.setData({
      onlyArray: onlyArray,
      customIndex: customIndex
    });
  },

  //删除按钮功能实现
  delelement: function (e) {
    const that = this
    const delid = e.currentTarget.dataset.index
    that.data.del.splice(delid, 1),
      that.data.area.splice(delid, 1),
      that.data.model.splice(delid, 1),
      that.data.modelNum.splice(delid, 1)
    that.setData({
      area: that.data.area,
      model: that.data.model,
      modelNum: that.data.modelNum,
      del: that.data.del
    })
    console.log(that.data.area);
    console.log(that.data.model);
    console.log(that.data.modelNum);
  },
   //表单提交按钮
   formSubmit: function (e) {
     var that = this,
     area = that.data.area,
     model = that.data.model,
     modelNum = that.data.modelNum;
      wx.request({
        url: 'https://www.zqzqsmile.xyz/lingyong/login',
        data:{
            area:JSON.stringify(that.data.area),
            model:JSON.stringify(that.data.model),
            modelNum:JSON.stringify(that.data.modelNum)
          },
            method:'POST',
            header:{'content-type': 'application/x-www-form-urlencoded'},
            success:function(res){
              console.log(res.data);
              if (area != '' & model != '' & modelNum != '' & res.data.status == true) {
                wx.showToast({
                  title: '提交成功！！！',
                  icon: 'none',
                  duration: 2000
                })
                that.setData({
                  area: [],
                  model: [],
                  modelNum: [],
                  del: []
                })
              } else {
                wx.showToast({
                  title: '数据不能为空，提交失败！！！',//这里打印出登录成功
                  icon: 'none',
                  duration: 1000
                })
            }    
        }
            })
     
},

  //表单重置按钮
  formReset: function (e) {
    this.setData({
      area: [],
      model: [],
      modelNum: [],
      del: []
    })

    console.log('form发生了reset事件')
  },






  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
    }
    for (var j = 0; j < data.customArray[data.customIndex[0]].product.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].product[j].name);
    }
    for (var k = 0; k < data.customArray[data.customIndex[0]].num.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].num[k].name);
    }
    this.setData(data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})