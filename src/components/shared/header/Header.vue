<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container">
        <div class="navbar-collapse collapse">
          <div class="navbar-nav mr-auto logo">
            <router-link to="/">
              <img src="../../../assets/logo.png" width="50" alt="">
              <span>Mars Shop</span>
            </router-link>
          </div>
          <div class="navbar-nav shopping-cart" @mouseover="toggle(true)" @mouseleave="toggle(false)" >
            <a @click.prevent="show()" class="button btn-cart" >
              <span>Sepetim</span>
              <img src="../../../assets/shopping-cart.png">
            </a>
            <transition name="fade" mode="in-out">
              <div class="count-popup" v-show="basketLength>0"><span>{{basketLength}}</span></div>
            </transition>
            <transition name="fade" mode="out-in">
              <Popup v-show="hover"/>
            </transition>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Popup from './CartPopup'
export default {
  components:{
    Popup
  },
  data() {
    return {
      hover:false
    }
  },
  computed: {
    basketLength(){
      var count=0;
      this.$store.state.basket.products.map(x=>{
        count+=x.count
      })
      return count;
    }
  },
  methods: {
    toggle(e){
      this.hover=e;
    }
  },
}
</script>

<style lang="scss">
nav{
  font-size: 18px;
  border-bottom: 7px solid #dadada;

  .logo{
    a{
      color: #000;
      text-decoration: none;
      transition: 0.3s ease;

      &:hover{
        color: #3a3a3a;
      }

      span{
        margin-left: 5px;
      }
    }
  }

  .shopping-cart{
    position: relative;
    cursor: default;

    .btn-cart{
      text-decoration: none;
      color:#000;
      padding: 3px;
      transition: 0.3s ease;
      text-decoration: none;
      display: inline-block;
      position: relative;

      &::after{
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #000;
        transition: width .3s;
      }

      &:hover{
        color: #3a3a3a;

        &::after {
         width: 100%;
        }
      }

      img{
        width: 30px;
        margin: 5px 0;
      }
    }

    .count-popup{
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      border-radius: 100%;
      background-color: #FF5019;
      color: #fff;
      line-height: 18px;
      text-align: center;
      right: -5px;
      animation: jumpopup 0.8s ease-in-out 0 0 direction fill-mode;

      span{
        font-size: 12px;
        margin: 0 !important;
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

@keyframes jumpopup {
  0%   {transform: scale(.8);}
  100% {transform: scale(1.5);}
}
</style>
