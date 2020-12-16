<template>
  <div>
    <slot name="return">
      <router-link :to="data.path"><i class="fas fa-chevron-left" :style="{'background':data.bgcolor}"></i>{{data.text}}</router-link>
    </slot>
    <slot name="order">
      <router-link :to="data.path" :style="{background:data.bgcolor}>{{data.text}}</router-link>
    </slot>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>
