<template>
  <div class="col-md-8 cart">
      <div class="header">Sepetim</div>
      <div class="body">
        <div class="product" v-for="product in basket.products" :key="product.id">
          <div class="content">
            <img :src="product.image" alt="">
            <div class="ml-4 mt-1">
              <p>{{product.name}}</p>
              <p><strong>{{Number.parseFloat(product.price * product.count).toFixed(2)}} ₺</strong></p>
            </div>
          </div>
          <div class="counter">
            <a @click.prevent="decrease(product.id,product.count)">-</a>
            <input type="text" :value="product.count"/>
            <a @click.prevent="increase(product.id,product.count)">+</a>
            <a
              class="btn-remove"
              @click.prevent="remove(product.id)">Sil</a>
          </div>
        </div>
        <p
        class="text-center m-2"
        v-if="!basket.products.length>0">
        Sepetinizde ürün bulunmamaktadır
        </p>
      </div>
      <div class="bottom d-flex justify-content-center">
        <router-link to="/">
          <i class="fas fa-chevron-left"></i> ALIŞVERİŞE DEVAM ET
        </router-link>
        <router-link to="/" v-if="basket.products.length>0">ÖDEMEYE GEÇ</router-link>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      basket:{
        type:Object,
        required:true
      }
    },
    methods: {
      remove(id){
        this.$store.commit('removeProduct',{id})
      },
      increase(id,count){
        count++
        this.$store.commit('setProductCount',{id,count})
      },
      decrease(id,count){
        if(count>1){
          count--
          this.$store.commit('setProductCount',{id,count})
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

.cart {
  .header {
    padding: 15px 5px;
    border-bottom: 1px solid #d6d6d6;
  }
  .body{
    .product{
      overflow: scroll;
      padding: 7px;
      border-bottom: 1px solid #d6d6d6;

      img{
        width: 120px;
        height: 120px;
        border-radius: 5px;
      }

      .content{
        display: flex;
      }

      .counter{
        display: flex;
        margin: 15px 5px;

        a:not(.btn-remove){
          width: 30px;
          height: 30px;
          border-radius: 100%;
          border: 1px solid #e2e2e2;
          color: #000;
          text-align: center;
          line-height: 30px;
          cursor: pointer;

          &:hover{
            background:#f1f1f1;
          }
        }

        input{
          width: 50px;
          height: 30px;
          text-align: center;
          margin: 0 5px;
        }

        .btn-remove{
          color: #d60000;
          cursor: pointer;
          line-height: 30px;
          margin-left: 30px;
        }
      }
    }
  }
  .bottom{
    a{
      width: 50%;
      height: 50px;
      line-height: 50px;
      color: #ebebeb;
      background: #FF5019;
      text-decoration: none;
      display: block;
      text-align: center;
      font-size: 17px;
      font-weight:500;
      margin: 10px;
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
