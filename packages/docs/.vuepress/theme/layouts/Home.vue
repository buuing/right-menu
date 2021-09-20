<template>
  <div v-menu class="home-page">
    <Header />
    <div class="home-page-banner">
      <el-container style="align-items: center">
        <el-main>
          <div>
            <img :src="require('../../public/logo.png')" width="200px">
            <h1>right-menu</h1>
            <p>一个右键菜单插件</p>
          </div>
        </el-main>
      </el-container>
    </div>
    <div class="home-page-content">
      <el-container>
        <div class="panel">
          <div class="img">
            <img :src="require('../imgs/feeling_proud.svg')" width="60%" />
          </div>
          <h1>xxx</h1>
          <p>可实现多级菜单配置, 菜单内的文字 / 图标 / 点击回调均可自定义逻辑</p>
        </div>
        <div class="panel">
          <div class="img">
            <img :src="require('../imgs/JavaScript_frameworks.svg')" width="60%" />
          </div>
          <h1>xxx</h1>
          <p>支持 Js / Vue / React 等框架；并且多端使用 / 配置 / 表现形式完全一致</p>
        </div>
        <div class="panel">
          <div class="img">
            <img :src="require('../imgs/designer_life.svg')" width="60%" />
          </div>
          <h1>xxx</h1>
          <p>自动适配 windows / mac 系统菜单样式, 也可以自定义主题样式</p>
        </div>
      </el-container>
      <el-container class="home-page-wrapper" style="margin-top: 50px">
        <div class="text-wrapper">
          <h1>贡献者</h1>
          <table>
            <tr>
              <td align="center"><a href="https://github.com/buuing" target="_blank"><img width="60px" src="https://avatars.githubusercontent.com/u/36689704"></a><div><span title="核心开发">🤖</span> <span title="修复bug">🚧</span> <span title="维护文档">📚</span></div></td>
              <td align="center"><a href="https://github.com/yushen7" target="_blank"><img width="60px" src="https://avatars.githubusercontent.com/u/35678187"></a><div><span title="核心开发">🤖</span></div></td>
              <td align="center"><a href="https://github.com/qingtiantongxie" target="_blank"><img width="60px" src="https://avatars.githubusercontent.com/u/24731632"></a><div><span title="逻辑优化">🦄</span><span title="修复bug">🚧</span></div></td>
              <td align="center"><a href="https://github.com/dora1995" target="_blank"><img width="60px" src="https://avatars.githubusercontent.com/u/53267289"></a><div><span title="修复bug">🚧</span></div></td>
            </tr>
          </table>
        </div>
        <div class="img-wrapper" style="max-width: 30rem;">
          <img :src="require('../imgs/Developer_activity.svg')" width="100%" />
        </div>
      </el-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
export default {
  components: { Header, Footer },
}
</script>

<style scoped>
  .home-page {
    margin-top: 60px;
    overflow: hidden;
    background: #fff;
  }
  .home-page-banner {
    padding-top: 50px;
    text-align: center;
    color: #444;
    align-items: center;
    padding-bottom: 350px;
    background: #e9f3fc;
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANAgMAAAAPhQzvAAAADFBMVEVfV/ZUTPRVTfRLQ/L3YHYbAAAAGUlEQVQI12NgYGFgwCA4YKzQuVMdUMQwCABBYAIAV5t6PAAAAABJRU5ErkJggg==); */
    /* background-size: 6.5px 6.5px; */
    position: relative;
  }
  .home-page-banner::after {
    content: '';
    display: block;
    position: absolute;
    top: 85%;
    width: 100%;
    height: 350px;
    background: #fff;
    -webkit-transform: skewY(-7deg);
    -moz-transform: skewY(-7deg);
    -ms-transform: skewY(-7deg);
    transform: skewY(-5deg);
  }
  .home-page-banner h1 {
    margin: 20px 0 20px 0;
    font-size: 3rem;
  }
  .home-page-banner p {
    font-size: 1.08rem;
    letter-spacing: 1.3px;
  }
  .home-page-banner b {
    margin: 0 5px;
    padding: 2px 5px;
    font-weight: 500;
    font-size: 0.9rem;
    color: #5e56f6;
    background: #f8faff;
    border-radius: 4px;
  }
  .home-page-content {
    position: relative;
    margin-top: -300px;
    margin-bottom: 80px;
    /* background: #fff; */
  }
  .home-page-content .panel {
    flex: 1;
    margin: 20px;
    padding: 30px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    text-align: center;
  }
  .home-page-content .panel .img {
    height: 10rem;
  }
  .home-page-content .panel h1 {
    font-size: 24px;
    color: #111;
    font-weight: 400;
  }
  .home-page-content .panel p {
    font-size: 16px;
    color: #444;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0.5rem 0;
  }
  .home-page-wrapper {
    padding: 15px;
    align-items: center;
  }
  .home-page-wrapper div {
    margin: 10px;
    flex: 1;
  }
  .text-wrapper h1 {
    margin: 0 0 40px 0;
    font-weight: 400;
  }
  .text-wrapper li {
    line-height: 26px;
    margin: 10px 0;
    font-weight: 500;
  }
  .text-wrapper li img {
    vertical-align: text-bottom
  }
  .home-page-wrapper table tr {
    /* background: #f1f7ff; */
  }
  @media (max-width: 719px) {
    .home-page-banner p {
      font-size: 1rem;
    }
    .home-page-banner .el-container, .home-page-content .el-container {
      flex-direction: column;
    }
    .home-page-banner img {
      width: 90%;
    }
    .home-page-content .img-wrapper {
      margin-bottom: -2rem;
    }
  }
  @media (max-width: 419px) {
    .home-page-banner h1 {
      font-size: 3rem;
    }
  }
</style>
