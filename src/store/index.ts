import { createStore } from 'vuex';

export default createStore({
  //存放数据
  state: {
    cartList: [],// 购物车的数据
    orderList: [],//生成订单列表数据
    orderListed: [],//生成订单后列表数据
    edit: true,//编辑按钮的状态
    userAddress: [
      {
        id: 1001,
        name: 'fjx',
        tel: '12312312323',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: 'xxxxxxxxxxx',
        isDefault: true,
        areaCode: '110101'
      },
      {
        id: 1002,
        name: 'lqq',
        tel: '12312312324',
        province: '广东省',
        city: '广州市',
        county: '天河区',
        addressDetail: 'xxxxxxxxxxx',
        isDefault: false,
        areaCode: '110101'
      },
    ]
  },

  //改变存放数据操作
  mutations: {

    // 添加购物车
    ADDCART(state, value) {
      state.cartList = value
    },
    //结算按钮
    PAY(state, value) {
      state.orderList = value
    },
    //删除
    DETELE(state, value) {
      state.cartList = value
    },
    //生成订单
    UPDATAORDER(state) {
      state.orderListed = state.orderListed.concat(state.orderList)

    },
    //编辑按钮
    EDIT(state, value) {
      if (value) {
        state.edit = true
      } else {
        state.edit = !state.edit
      }
    },

    //新增地址
    ADDADRESS(state, value) {
      state.userAddress.map((item) => {
        if (value.isDefault) {
          item.isDefault = false
        }
      })
      state.userAddress.push(value)
    },

    //编辑地址
    CHANGEADDRESS(state,value){
      state.userAddress= state.userAddress.map((item)=>{
        if(value.isDefault){
          item.isDefault=false
        }
      return item.id===value.id?value:item
      })
    },

    //删除地址
    DETELEADDRESS(state,value){
      state.userAddress= state.userAddress.filter((item)=>{
        return !(value.id===item.id)
      })

      if(value.isDefault && state.userAddress.length){
        state.userAddress[0].isDefault=true
      }
    }
  },

  //异步的方法
  actions: {

  }

})