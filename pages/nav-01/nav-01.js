// pages/nav-01/nav-01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {id:0,   name:"首页",   isActive:true},
      {id:1,   name:"原创",   isActive:false},
      {id:2,   name:"分类",   isActive:false},
      {id:3,   name:"关于",   isActive:false}
     
    ]
  },
  // 自定义事件 用来接收 子组件传递的数据
  handleItemChange(e){
const {index} =e.detail;
const {tabs}=this.data;
 // 普通写法let{tabs}=this.data;
//let tabs =JSON.parse(JSON.stringify(this.data.tabs))
tabs.forEach((v,i)=>i === index ? v.isActive=true : v.isActive=false);
this.setData({
  tabs
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