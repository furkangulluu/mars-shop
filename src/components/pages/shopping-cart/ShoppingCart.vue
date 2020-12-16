<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <Cart :basket="basket"/>
      <PaymentSummary :total="totalPrice"/>
    </div>
  </div>
</template>

<script>
import Cart from './Cart'
import PaymentSummary from './PaymentSummary'
import {mapGetters} from 'vuex'

export default {
  components:{
    Cart,
    PaymentSummary
  },
  computed: {
   ...mapGetters({'basket':'getBasket'}),
   totalPrice(){
     console.log(this.basket)
     let total=0;
     this.basket.products.map(x=>{total=x.price*x.count})
     return Number.parseFloat(total).toFixed(2);
   }
  },
}
</script>
