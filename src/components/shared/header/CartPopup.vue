<template>
  <div class="popup">
    <div class="header">Sepetim</div>
    <div class="body">
      <div class="content" v-for="product in basket.products" :key="product.id">
        <img :src="product.image">
        <div>
          <p>{{product.name}}</p>
          <p>{{product.count}} Adet</p>
          <p><strong>{{Number.parseFloat(product.price* product.count).toFixed(2)}} ₺</strong></p>
        </div>
      </div>
      <p class="text-center m-2" v-if="!basket.products.length>0">Sepetinizde ürün bulunmamaktadır</p>
    </div>
    <div class="bottom">
      <router-link to="/sepetim" v-if="basket.products.length>0">SEPETE GİT</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({'basket':'getBasket'})
    },
  }
</script>

<style lang="scss" scoped>

.popup {
  position: absolute;
  width: 250px;
  visibility: visible;
  display: inline-block;
  top: 50px;
  right: -3px;
  border: 1px solid #cccccc;
  background-color: #ebebeb;
  z-index: 1;
  font-size: 12px;
  -webkit-box-shadow: 0px 0px 20px -5px #5e5e5ebf;
  -moz-box-shadow: 0px 0px 20px -5px #5e5e5ebf;
  box-shadow: 0px 0px 20px -10px #5e5e5ebf;

  .header {
    padding: 7px;
    border-bottom: 1px solid #d6d6d6;
  }
  .body{
    max-height: 250px;
    overflow: scroll;

    .content{
      display: flex;
      overflow: scroll;
      padding: 7px;
      border-bottom: 1px solid #d6d6d6;

        img{
        width: 70px;
        height: 70px;
        border-radius: 5px;
      }
      div{
        margin-left: 10px;
        p{
          margin:3px;
        }
      }
    }
  }
  .bottom{
    a{
      width: 100px;
      height: 25px;
      line-height: 25px;
      color: #ebebeb;
      background: #FF5019;
      text-decoration: none;
      display: block;
      float: right;
      text-align: center;
      margin: 7px;
    }
  }

  .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }
}

@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
