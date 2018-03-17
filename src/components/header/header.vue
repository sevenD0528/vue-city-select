<template>
  <div class="header">
    <img src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your City Selection'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 25px 0;
   h1, h2 {
     font-weight: normal;
   }
}
</style>
