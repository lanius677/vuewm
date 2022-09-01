import { createStore } from 'vuex';

export default createStore({
  //存放数据
  state: {
    cartList: [],// 购物车的数据
    orderList: [],//生成订单列表数据
    edit: true,//编辑按钮的状态
    userAddress:[
      {
      id:1001,
      name:'fjx',
      tel:'123123123',
      province:'广东省',
      city:'广州市',
      county:'天河区',
      addressDetail:'xxxxxxxxxxx',
      isDefault:true,
      areaCode:'110101'
    },
    {
      id:1001,
      name:'lqq',
      tel:'123123123',
      province:'广东省',
      city:'广州市',
      county:'天河区',
      addressDetail:'xxxxxxxxxxx',
      isDefault:false,
      areaCode:'110101'
    },
  ]
  },

  //改变存放数据操作
  mutations: {
    ADDCART(state, value) {
      state.cartList = value
    },
    PAY(state, value) {
      state.orderList = value
    },
    DETELE(state, value) {
      state.cartList = value
    },
    EDIT(state, value) {
      if (value) {
        state.edit = true
      } else {
        state.edit = !state.edit
      }
    }
  },

  //异步的方法
  actions: {

  }

})