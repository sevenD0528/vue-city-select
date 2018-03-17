<template>
  <div class="footer">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'created by Jason'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 50px 0;
  color: #000;
}
</style>
