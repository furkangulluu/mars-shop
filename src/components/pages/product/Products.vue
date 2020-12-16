<template>
  <div>
    <Loader v-show="isLoading" />
    <div v-if="!isLoading">
      <div class="product-header">Tüm Ürünler</div>
      <div class="product-content">
        <div class="row">
          <Product v-for="product in products" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import Loader from '../../shared/Loader'
import {mapGetters} from 'vuex'

export default {
  components:{
    Product,
    Loader
  },
  data() {
    return {
      isLoading:true
    }
  },
  computed: {
    ...mapGetters({'products':'getProducts'}),
  },
  created(){
    this.$store.dispatch('fetchProducts').then(()=>{
      this.isLoading=false
    });
  }
}
</script>

<style lang="scss">
.product-header{
  font-weight: 300;
  font-size: 15px;
  margin: 15px 5px;
}
</style>
