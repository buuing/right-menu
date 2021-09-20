<template>
  <div>
    <Header></Header>
    <el-container>
      <img class="img404" :src="require('../imgs/404.svg')" width="100%">
    </el-container>
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
export default {
  components: { Header, Footer }
}
</script>

<style scoped>
  .img404 {
    padding: 0 100px 100px 100px;
  }
</style>
