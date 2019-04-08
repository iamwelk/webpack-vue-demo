<template>
  <div>
    <h2>{{msg}}</h2>
    <p class="content">
      Here's my infomation
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          msg: 'about'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    font-size: 20px;
  }
</style>
