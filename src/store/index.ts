import { createStore } from 'vuex';

export default createStore({
  //存放数据
  state: {
    cartList: [],// 购物车的数据
    orderList: [],//生成订单列表数据
    edit: true//编辑按钮的状态
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