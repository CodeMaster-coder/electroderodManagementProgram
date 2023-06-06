//这两行写在page({})外面
const app = getApp()
var util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewShowed: false, //显示结果view的状态
    inputVal: "", // 搜索框值
    inputNum: "",//数量输入值
    catList: [], //搜索渲染推荐数据
    list1: [
    "H-25",
    "H-24",
    "H-23",
    "H-22",
    "H-21",
    "H-20",
    "409310",
    "409305",
    "409301",
    "409298",
    "409295",
    "409292",
    "409268",
    "409266",
    "409265",
    "409263",
    "406385",
    "405490",
    "401789",
    "401777",
    "401776",
    "401769",
    "401762",
    "401759",
    "401756",
    "397671",
    "397669",
    "395838",
    "395825",
    "395174",
    "395172",
    "395171",
    "393225",
    "393157",
    "393154",
    "393152",
    "393150",
    "393145",
    "393140",
    "393138",
    "393136",
    "393134",
    "393129",
    "393123",
    "393115",
    "393111",
    "393109",
    "393106",
    "393104",
    "393102",
    "393097",
    "393085",
    "393079",
    "393077",
    "392182",
    "392181",
    "389351",
    "389303",
    "389301",
    "389298",
    "389297",
    "389291",
    "389288",
    "389286",
    "389277",
    "389276",
    "389275",
    "389273",
    "389269",
    "389266",
    "389264",
    "389260",
    "389251",
    "389243",
    "389239",
    "389238",
    "389235",
    "389233",
    "389230",
    "389227",
    "389214",
    "389212",
    "389149",
    "389125",
    "389124",
    "389118",
    "384593",
    "381737",
    "381735",
    "381174",
    "380327",
    "380326",
    "380323",
    "380313",
    "380306",
    "380236",
    "378243",
    "378233",
    "378206",
    "378192",
    "378191",
    "378186",
    "378183",
    "378177",
    "378167",
    "378165",
    "378164",
    "378160",
    "378159",
    "378156",
    "378155",
    "378154",
    "378150",
    "378130",
    "376523",
    "376437",
    "374964",
    "374889",
    "374887",
    "372008",
    "370903",
    "370902",
    "368551",
    "367369",
    "363200",
    "360063",
    "359870",
    "359087",
    "358873",
    "358799",
    "354631",
    "351512",
    "348463",
    "347819",
    "344431",
    "333612",
    "333595",
    "324918-9",
    "324918-8",
    "324918-7",
    "324918-6",
    "324918-5",
    "324918-3",
    "324918-2",
    "324918-14",
    "324918-12",
    "324918-11",
    "324918-1",
    "323901",
    "314918-6",
    "314918-5",
    "1987-12",
    "1976-9",
    "1976-1",
    "1974-9",
    "1974-13",
    "1974-12",
    "1974-11",
    "1974-10",
    "1974-1",
    "1973-8",
    "1973-7",
    "1973-6",
    "1973-5",
    "1973-4",
    "1973-3",
    "1973-2",
    "1973-1",
    "11891",
    "1074-11",
    "409271",
    "401791",
    "401787",
    "401783",
    "401780",
    "401779",
    "401773",
    "401771",
    "401767",
    "397824",
    "397805",
    "395852",
    "395849",
    "395847",
    "395840",
    "395838",
    "395169",
    "393123",
    "393100",
    "389307",
    "389303",
    "389298",
    "389297",
    "389294",
    "389286",
    "389284",
    "389282",
    "389281",
    "389277",
    "389276",
    "389275",
    "389271",
    "389269",
    "389266",
    "389264",
    "389263",
    "389260",
    "389258",
    "389257",
    "389255",
    "389254",
    "389251",
    "389248",
    "389247",
    "389243",
    "389239",
    "389238",
    "389235",
    "389233",
    "389230",
    "389227",
    "389225",
    "389212",
    "384593",
    "381735",
    "381354",
    "380380",
    "380313",
    "380306",
    "380236",
    "378243",
    "378236",
    "378230",    
    "378229",    
    "378223",    
    "378206",    
    "378204",    
    "378198",    
    "378197",    
    "378186",    
    "378177",    
    "378167",    
    "378160",    
    "378150",    
    "378130",    
    "376523",    
    "374889",    
    "374887",    
    "372008",    
    "367369",    
    "363103",    
    "360063",    
    "359870",    
    "359087",    
    "358860",    
    "348463",    
    "347819",    
    "344431",    
    "342541",    
    "342324",    
    "341403",    
    "378130",    
    "17694",    
    "17693",    
    "17692",    
    "17691",    
    "15991",    
    "15644",    
    "15643",    
    "14736",    
    "13164",    
    "12616",    
    "11921",    
    "11891",    
    "11421",    
    "11376",    
    "10977",    
    "10313",    
    "10108",
    '389278',
    '000001',
    '000007',
    '000008',
    '000013',
    '000015',
    '000018',
    '000021',
    '000026',
    '000032',
    '000045',
    '000039',
    '000004',
    '000014',
    '000022',
    '000025',
    '000029',
    '000033',
    '324918-11',
    
      ],
      model:[],
      modelNumber:[],
      del:[],
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
 formSubmit:  util.throttle(function (ev) {

  var that = this,
  model = that.data.model,
  modelNumber = that.data.modelNum;
  if (model != '' & modelNumber != '') {
   wx.request({
     url: 'https://www.liuke.xyz/electrode/login',
     data:{
         code:'replenishment',
         model:JSON.stringify(that.data.model),
         modelNum:JSON.stringify(that.data.modelNumber)
       },
         method:'POST',
         header:{'content-type': 'application/x-www-form-urlencoded'},
         success:function(res){
           console.log(res.data);
           if (model != '' & modelNumber != '' & res.data.status == true){
             wx.showToast({
               title: '提交成功！！！',
               icon: 'none',
               duration: 2000
             })
             that.setData({
              model: [],
              modelNumber: [],
              del: [],
            })}
           
     }
         })} else {
          wx.showToast({
            title: '数据不能为空，提交失败！！！',//这里打印出登录成功
            icon: 'none',
            duration: 1000
          })
      }    
  
}),

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