import {createStore} from 'vuex';

export default createStore({
//存放数据
state:{
  cartList:[],// 购物车的数据
},

//改变存放数据操作
mutations:{
  ADDCART(state,value){
    state.cartList=value
  }
},

//异步的方法
actions:{

}

})