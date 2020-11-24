// components/Taps/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
//接收nav父组件传递的数据
price:{
  type:String,
  value:"",
},
tabs:{
  type:Array,
  value:""
}
  },

  
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      console.log(e) 
      const {index}=e.currentTarget.dataset;
      //触发父组件中的自定义事件同时传递数据给
      this.triggerEvent("itemChange",{index});
//       let tabs =JSON.parse(JSON.stringify(this.data.tabs))
//       //严谨let tabs =JSON.parse(JSON.stringify(this.data.tabs))
//       // 普通写法let{tabs}=this.data;
//       tabs.forEach((v,i)=>i === index ? v.isActive=true : v.isActive=false);
// this.setData({
//   tabs
// })
      
      
    }
  }
})
