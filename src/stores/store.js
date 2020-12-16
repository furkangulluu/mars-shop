import axios from 'axios'
axios.defaults.baseURL = "https://nonchalant-fang.glitch.me"

const state={
  products:[],
  basket:{
    totalPrice:0.00,
    products:[]
  },
}

const getters={
  getProducts(state){
    return state.products;
  },
  getBasket(state){
    return state.basket;
  },
}

const mutations={
  setProducts(state,payload){
    state.products=payload
  },
  setProductToBasket(state,{id,count}){
    let product=state.products.find(x=>x.id==id)
    state.basket.totalPrice += product.price
    state.basket.products.push({...product,count:count})
  },
  setProductCount(state,{id,count}){
    state.basket.products.filter(x=>x.product.id==id?x.count=count:null)
  },
  removeProduct(state,data){
    let index=state.basket.products.findIndex(x=>x.id==data.id)
    state.basket.products.splice(index,1)
  }
}

const actions={
  fetchProducts(context){
    axios.get("/listing").then(res=>{
      context.commit('setProducts',res.data)
    })
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
