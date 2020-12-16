import Products from '../components/pages/product/Products'
import ShoppingCart from '../components/pages/shopping-cart/ShoppingCart'

export default{
  routes:[
    { path: '/', component: Products },
    { path: '/sepetim', component: ShoppingCart },
  ],
  mode:'history'
}
