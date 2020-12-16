<template>
  <div>
    <Loader v-show="isLoading" class="mt-5"/>
    <div v-if="!isLoading">
      <div class="product-header">Tüm Ürünler</div>
      <div class="product-content">
        <Product :products="products"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import Loader from '../../shared/Loader'
import {mapGetters,mapState} from 'vuex'

export default {
  components:{
    Product,
    Loader
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapGetters({'products':'getProducts'}),
  },
  created(){
    this.$store.dispatch('fetchProducts');
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
