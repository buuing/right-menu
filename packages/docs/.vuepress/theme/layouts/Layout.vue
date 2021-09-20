<template>
  <div v-if="show" v-menu>
    <Header />
    <el-container style="margin-top: 60px; max-width: none; background: #f3f4fa">
      <el-aside class="hidden-719" style="width: 260px">
        <Sidebar />
      </el-aside>
      <div style="margin: 0 auto; min-width: calc(100% - 260px)">
        <el-container>
          <el-main style="padding: 20px 40px 50px">
            <Content />
          </el-main>
        </el-container>
        <Footer />
      </div>
    </el-container>
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import Sidebar from '@theme/components/Sidebar.vue'

export default {
  components: { Header, Footer, Sidebar },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>

</style>
