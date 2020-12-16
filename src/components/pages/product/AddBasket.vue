<template>
  <div class="add-basket" @mouseover="toggle(true)" @mouseleave="toggle(false)">
      <a href="#" v-if="!hover">SEPETE EKLE</a>
      <a href="#" v-if="hover">
        <div class="basket-text" @click.prevent="addToBasket(id)">EKLE</div>
        <div class="basket-counter">
          <a @click.prevent="decrease">-</a>
          <input type="text" :value="chosenCount"/>
          <a @click.prevent="increase">+</a>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  props:['id'],
  data() {
    return {
      chosenCount:1,
      hover:false
    }
  },
  methods: {
    addToBasket(id){
      const count=this.chosenCount;
      this.$store.commit('setProductToBasket',{id,count})
      this.chosenCount=1
    },
    increase(){
      this.chosenCount++
    },
    decrease(){
      this.chosenCount!=0 ? this.chosenCount-- : null
    },
    toggle(e){
      this.hover=e;
    }
  },
}
</script>

<style lang="scss">
.add-basket{
  width: 65%;

  a{
    height: 40px;
    line-height: 40px;
    background: #FF5019;
    text-decoration: none;
    text-align: center;
    color: #fff;
    font-weight:500;
    display: flex;
    justify-content: center;

   .basket-text{
      width: 50%;
    }

    .basket-counter{
      width: 50%;
      display: flex;

     a{
        width: 33.3%;
        background: #e2e2e2;
        color: #000;
        justify-content: center;
      }

      input{
        width: 33.3%;
        text-align: center;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
