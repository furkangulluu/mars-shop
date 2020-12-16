<template>
  <div class="row">
    <div class="col-lg-3 mb-3" v-for="product in products" :key="product.id">
      <div class="p-card">
        <div class="p-img">
          <img :src="product.image" alt="foto">
        </div>
        <div class="p-body">
          <h6 class="p-title">{{ product.name }}</h6>
          <div class="p-bottom">
            <p>{{ setPrice(product.price) }} ₺</p>
            <AddBasket :id="product.id"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddBasket from './AddBasket'

export default {
  components:{
    AddBasket
  },
  props:{
    products:{
      type:Array,
      required:true
    }
  },
  methods: {
    setPrice(price){
      return Number.parseFloat(price).toFixed(2)
    }
  }
}
</script>

<style lang="scss">
.p-card{
  font-size: 15px;
  cursor: pointer;
  transition: 0.8s ease;
  border: 0.4px solid #eeeeee;

  &:hover{
    -webkit-box-shadow: 0px 0px 20px -5px #5e5e5ebf;
    -moz-box-shadow: 0px 0px 20px -5px #5e5e5ebf;
    box-shadow: 0px 0px 20px -10px #5e5e5ebf;
  }

  .p-img{
    overflow: hidden;

    img{
      width: 100%;
      transition: transform 0.5s ease;
      overflow: hidden;

      &:hover{
        transform: scale(1.05);
      }
    }
  }

  .p-title{
    text-align: center;
    color: #4b4b4b;
    margin: 20px 0;
    font-weight:400;
  }

  .p-bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    margin: 10px;

    p{
      width: 35%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0;
      font-weight:400;
    }

  }
}
</style>
