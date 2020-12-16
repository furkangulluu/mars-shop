<template>
  <div class="col-md-4 summary">
    <h5>Sipariş Özeti</h5>
    <hr>
    <p>{{total}} ₺</p>
  </div>
</template>

<script>
  export default {
    props:['total']
  }
</script>

<style lang="scss" scoped>
.summary{
  width: 100%;
  height: 120px;
  margin-top: 50px;
  box-shadow: 0px 0px 20px -10px #5e5e5ebf;

  h5{
    font-weight: normal;
    margin-top:10px;
  }
}
</style>
