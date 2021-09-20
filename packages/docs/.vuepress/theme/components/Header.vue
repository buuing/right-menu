<template>
  <div class="home-page-head">
    <el-container class="header-box">
      <div class="mobile mobile-nav">移动端菜单栏未开启</div>
      <router-link class="logo hidden-719" to="/" tag="div">
        &emsp;right-menu 右键菜单插件
      </router-link>
      <div class="nav-bar hidden-719">
        <NavLinks></NavLinks>
      </div>
    </el-container>
  </div>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'
export default {
  components: { NavLinks },
  data() {
    return {
      activeIndex: '/',
    };
  },
  computed: {
    navList () {
      return this.$themeConfig.locales[this.$localePath].nav
    }
  },
}
</script>

<style scoped>
  .home-page-head {
    width: 100%;
    height: 60px;
    background: #6666e2;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    user-select: none;
  }
  .logo {
    color: #fff;
    cursor: pointer;
    font-size: 18px;
  }
  .mobile-nav {
    padding: 0 20px;
  }
  .nav-bar {
    float: right;
  }
  .header-box {
    justify-content: space-between;
  }
  /deep/ .header-box {
    /* color: #f8faff; */
    line-height: 60px;
  }
  /deep/ .dropdown-title {
    color: #f8faff;
  }
  /deep/ .nav-item>a {
    color: #f8faff;
    padding: 17px 10px;
  }
  /deep/ .nav-item>a:hover, /deep/ .nav-item>a.router-link-active {
    color: #f8faff;
    border-bottom: 3px solid #f8faff;
  }
  /deep/ .dropdown-title {
    font-size: 16px;
  }
  /deep/ .dropdown-item>a.router-link-active {
    color: #fff !important;
    background: #7171FF;
  }
  /deep/ .dropdown-item>a.router-link-active::after {
    border-left: 5px solid #fff !important;
  }
  /deep/ .dropdown-wrapper .nav-dropdown .dropdown-item a {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  /deep/ .dropdown-wrapper .nav-dropdown .dropdown-item a:hover {
    background: #7171FF;
    color: #fff;
  }
</style>
