<template>
  <div class="wrapper">
    <Header />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Header from './components/shared/header/Header'

export default {
  components:{
    Header
  }
}
</script>

<style lang="scss">
.wrapper{
  font-family: 'Poppins', sans-serif;
}
</style>
