
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewShowed: false, //显示结果view的状态
    inputVal: "", // 搜索框值
    inputNum: "",//数量输入值
    catList: [], //搜索渲染推荐数据
    list1: ["389238",
    "374964",
    "378206",
    "324918-4",
    "378167",
    "351512",
    "374889",
    "378229",
    "1974-9",
    "389266",
    "381174",
    "350303-9",
    "324918-6",
    "360063",
    "350303-17",
    "380323",
    "389298",
    "324918-5",
    "381735",
    "H-22",
    "389235",
    "333612",
    "350303-11",
    "393104",
    "389125",
    "389124",
    "376437",
    "378155",
    "378191",
    "378215",
    "378154",
    "389247",
    "358860",
    "374887",
    "378130",
    "376523",
    "389286",
    "389230",
    "11376",
    "348463",
    "1973-5",
    "1973-8",
    "378198",
    "359870",
    "378197",
    "389261",
    "344431",
    "378165",
    "381354",
    "1976-9",
    "378230",
    "378236",
    "17694",
    "378237",
    "384593",
    "341403",
    "389303",
    "389275",
    "389277",
    "389281",
    "359087",
    "389254",
    "389257",
    "10108",
    "15991",
    "15643",
    "378160",
    "389291",
    "389248",
    "347819",
    "10977",
    "H-25",
    "380306",
    "378243",
    "389233",
    "389239",
    "380236",
    "389284",
    "389260",
    "378177",
    "378164",
    "389251",
    "380380",
    "389225",
    "389269",
    "389227",
    "401780",
    "389149",
    "401779",
    "389288",
    "389276",
    "389241",
    "389212",
    "389118",
    "401782",
    "393138",
    "378183",
    "372008",
    "354631",
    "401767",
    "380313",
    "378192",
    "393145",
    "370903",
    "342324",
    "11891",
    "17691",
    "392182",
    "389282",
    "389243",
    "378204",
    "401783",
    "363103",
    "378150",
    "389255",
    "389258",
    "389271",
    "389294",
    "389301",
    "389307",
    "342541",
    "17693",
    "13164",
    "14736",
    "11421",
    "389351",
    "401773",
    "27760",
    "H-20",
    "H-21",
    "H-23",
    "H-24",
    "401756",
    "350303-35",
    "401777",
    "401769",
    "378246",
    "401759",
    "393109",
    "393079",
    "380327",
    "393125",
    "401789",
    "401776",
    "393123",
    "380326",
    "350303-16",
    "1974-12",
    "393085",
    "393089",
    "393157",
    "389088",
    "393129",
    "393077",
    "393111",
    "395849",
    "393106",
    "393212",
    "393100",
    "1974-1",
    "378143",
    "393154",
    "393115",
    "393150",
    "333595",
    "393140",
    "389297",
    "393152",
    "350303-12",
    "350303-5",
    "395838",
    "395840",
    "389214",
    "395852",
    "397843",
    "397671",
    "397669",
    "392181",
    "324918-7",
    "11921",
    "395174",
    "395172",
    "1974-13",
    "395847",
    "324918-3",
    "395169",
    "323901",
    "393102",
    "324918-A=210",
    "370902",
    "389264",
    "367369",
    "378223",
    "393134",
    "401762",
    "17692",
    "324918-12",
    "324918-8",
    "1973-2",
    "1973-4",
    "393097",
    "393136",
    "324918-1",
    "324918-2",
    "401791",
    "1973-7",
    "1974-10",
    "401787",
    "401771",
    "324918-14",
    "1974-11",
    "397805",
    "393225",
    "1973-1",
    "395171",
    "405490",
    "389273",
    "10313",
    "389263",
    "1973-3",
    "397824",
    "14833",
    "358873",
    "17690"    
      ],
      model:[],
      modelNumber:[],
      del:[]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {},
  inputNumber:function(e){this.setData({inputNum:e.detail.value})},
  //添加按钮功能实现
  addition:function(e){
var model1 = this.data.inputVal,
modelNumber1 = this.data.inputNum,
del1 = '删除',
del = this.data.del,
model = this.data.model,
modelNumber = this.data.modelNumber;
if(!model1 || !modelNumber1){
  wx.showToast({
    title: '数据不能为空，添加失败！！！',
    icon: 'none',
    duration: 2000
  })
}else{model.push(model1);
  modelNumber.push(modelNumber1);
  del.push(del1);
  
  this.setData({
    model: this.data.model,
    modelNumber:this.data.modelNumber,
    del:this.data.del
  });
  console.log(this.data.model);
  console.log(this.data.modelNumber);
  console.log(this.data.del);}
  },
 // 清空按钮功能实现
 hideInput: function() {
  this.setData({
    inputVal: "",
    inputNum:'',
    viewShowed: false,
  });
},
 //删除按钮功能实现
 delelement: function (e) {
  const that = this
  const delid = e.currentTarget.dataset.index
  that.data.del.splice(delid, 1),
    that.data.model.splice(delid, 1),
    that.data.modelNumber.splice(delid, 1)
  that.setData({

    model: that.data.model,
    modelNumber: that.data.modelNumber,
    del: that.data.del
  })
  console.log(that.data.model);
  console.log(that.data.modelNumber);
},


  // 键盘抬起事件2
  inputTyping: function(e) {
    var value = e.detail.value
    var that = this;
    var list1 = that.data.list1
    if (value == '') {
      that.setData({
        viewShowed: false,
      });
    } else {
    //“这里需要特别注意，不然在选中下拉框值的时候，下拉框又出现”
      if (e.detail.cursor) { //e.detail.cursor表示input值当前焦点所在的位置
        var arr = [];
        for (var i = 0; i < list1.length; i++) {
          if (list1[i].indexOf(value) >= 0) {
            arr.push(list1[i]);
          }
        }
        that.setData({
          viewShowed: true,
          carList: arr
        });
      }
    }
  },

   // 获取选中推荐列表中的值
   name: function(res) {
    console.log(res.currentTarget.dataset.index);
    var index = res.currentTarget.dataset.index
    var that = this;
    that.setData({
      inputVal: that.data.carList[index],
      viewShowed: false,
    });
    console.log(that.data.inputVal);
  },
 //表单提交按钮
 formSubmit: function (e) {
  var that = this,
  model = that.data.model,
  modelNumber = that.data.modelNum;
   wx.request({
     url: 'https://www.zqzqsmile.xyz/buku/login',
     data:{
         model:JSON.stringify(that.data.model),
         modelNum:JSON.stringify(that.data.modelNumber)
       },
         method:'POST',
         header:{'content-type': 'application/x-www-form-urlencoded'},
         success:function(res){
           console.log(res.data);
           if (model != '' & modelNumber != '' & res.data.status == true) {
             wx.showToast({
               title: '提交成功！！！',
               icon: 'none',
               duration: 2000
             })
             that.setData({
              model: [],
              modelNumber: [],
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
   model: [],
   modelNumber: [],
   del: []
 })

 console.log('form发生了reset事件')
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