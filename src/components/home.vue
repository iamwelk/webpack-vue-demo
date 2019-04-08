<template>
  <div>
    <h2>{{msg}}</h2>
    <p>
      Hello everyone!Welcome to my home.
    </p>
    <img class="img" src="../assets/talkingdata.png" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
          msg: 'Home'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
</style>
