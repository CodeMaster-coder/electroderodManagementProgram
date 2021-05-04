// pages/jsstorage/jsstorage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    model:[],
    storage:[],
    saftyStorage:[],
    storageStatus:[]
  },

   //查询按钮功能实现
   query:function(e){
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题

    wx.request({
          url: 'https://www.zqzqsmile.xyz/jsstorage2/login',
          data:{
            order:JSON.stringify('t9.storage')},
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
         
          success: function(res) {
            console.log(res.data);
var obj = res.data;


for(var i=0;i<obj.length;i++)
{
  var model1 = obj[i].model,
  storage1 = obj[i].storage,
  saftyStorage1 = obj[i].saftyStorage,
  storageStatus1 = obj[i].storageStatus,
  model = that.data.model,
  storage = that.data.storage,
  saftyStorage = that.data.saftyStorage,
  storageStatus = that.data.storageStatus;

  model.push(model1);
  storage.push(storage1);
  saftyStorage.push(saftyStorage1);
  storageStatus.push(storageStatus1);

   that.setData({
    model: that.data.model,
    storage:that.data.storage,
  saftyStorage:that.data.saftyStorage,
  storageStatus:that.data.storageStatus
  });   
  // 调试时打开该语句
}
// console.log(obj.model);
// console.log(that.data.number);
          }
        })
   },
   //库存升序排列
   orderByStorage:function(e){
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题
    that.setData({
      model: [],
      storage:[],
    saftyStorage:[],
    storageStatus:[]
    });
    wx.request({
          url: 'https://www.zqzqsmile.xyz/jsstorage2/login',
          data:{
            order:JSON.stringify('t9.storage')},
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
         
          success: function(res) {
            console.log(res.data);
var obj = res.data;


for(var i=0;i<obj.length;i++)
{
  var model1 = obj[i].model,
  storage1 = obj[i].storage,
  saftyStorage1 = obj[i].saftyStorage,
  storageStatus1 = obj[i].storageStatus,
  model = that.data.model,
  storage = that.data.storage,
  saftyStorage = that.data.saftyStorage,
  storageStatus = that.data.storageStatus;

  model.push(model1);
  storage.push(storage1);
  saftyStorage.push(saftyStorage1);
  storageStatus.push(storageStatus1);

   that.setData({
    model: that.data.model,
    storage:that.data.storage,
  saftyStorage:that.data.saftyStorage,
  storageStatus:that.data.storageStatus
  });   
  // 调试时打开该语句
}
// console.log(obj.model);
// console.log(that.data.number);
          }
        })
   },
   //安全余量排序
   orderBySaftystorage:function(e){
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题
    that.setData({
      model: [],
      storage:[],
    saftyStorage:[],
    storageStatus:[]
    });
    wx.request({
          url: 'https://www.zqzqsmile.xyz/jsstorage2/login',
          data:{
            order:JSON.stringify('t9.saftyStorage')},
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
         
          success: function(res) {
            console.log(res.data);
var obj = res.data;


for(var i=0;i<obj.length;i++)
{
  var model1 = obj[i].model,
  storage1 = obj[i].storage,
  saftyStorage1 = obj[i].saftyStorage,
  storageStatus1 = obj[i].storageStatus,
  model = that.data.model,
  storage = that.data.storage,
  saftyStorage = that.data.saftyStorage,
  storageStatus = that.data.storageStatus;

  model.push(model1);
  storage.push(storage1);
  saftyStorage.push(saftyStorage1);
  storageStatus.push(storageStatus1);

   that.setData({
    model: that.data.model,
    storage:that.data.storage,
  saftyStorage:that.data.saftyStorage,
  storageStatus:that.data.storageStatus
  });   
  // 调试时打开该语句
}
// console.log(obj.model);
// console.log(that.data.number);
          }
        })
   },

   //按状态排序
   orderByStoragestatus:function(e){
    var that = this;//把this对象复制到临时变量that，解决作用域不够的问题
    that.setData({
      model: [],
      storage:[],
    saftyStorage:[],
    storageStatus:[]
    });
    wx.request({
          url: 'https://www.zqzqsmile.xyz/jsstorage2/login',
          data:{
            order:JSON.stringify('t9.storageStatusCode')},
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
         
          success: function(res) {
            console.log(res.data);
var obj = res.data;


for(var i=0;i<obj.length;i++)
{
  var model1 = obj[i].model,
  storage1 = obj[i].storage,
  saftyStorage1 = obj[i].saftyStorage,
  storageStatus1 = obj[i].storageStatus,
  model = that.data.model,
  storage = that.data.storage,
  saftyStorage = that.data.saftyStorage,
  storageStatus = that.data.storageStatus;

  model.push(model1);
  storage.push(storage1);
  saftyStorage.push(saftyStorage1);
  storageStatus.push(storageStatus1);

   that.setData({
    model: that.data.model,
    storage:that.data.storage,
  saftyStorage:that.data.saftyStorage,
  storageStatus:that.data.storageStatus
  });   
  // 调试时打开该语句
}
// console.log(obj.model);
// console.log(that.data.number);
          }
        })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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