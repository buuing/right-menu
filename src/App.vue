<template>
  <div id="app" v-menu="items">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [{
        type: 'a',
        title: '百度一下',
        href: 'http://www.baidu.com'
      }, {
        type: 'li',
        title: '复制(C)',
        disabled: false,
        func: () => {
          alert('点击了复制')
        }
      }, {
        type: 'li',
        title: '粘贴(V)',
        disabled: true,
        func: () => {
          alert('点击了粘贴')
        }
      }, {
        type: 'hr'
      }, {
        type: 'ul',
        title: '新建(W)',
        // children: [{
        //   type: 'li',
        //   title: '文件夹(F)',
        //   disabled: true,
        //   func: () => {
        //     alert('新建了文件夹')
        //   }
        // }, {
        //   type: 'li',
        //   title: '快捷方式(S)',
        //   disabled: true,
        //   func: () => {
        //     alert('新建了快捷方式')
        //   }
        // }]
      }, {
        type: 'hr'
      }, {
        type: 'li',
        title: '属性(R)',
        disabled: false,
        func: () => {
          alert('点击了属性')
        }
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  height: 100%;
}
.ldq-menu {
  width: 140px;
  font-size: 14px;
  margin: 0;
  padding: 5px 0;
  z-index: 9999999;
  position: fixed;
  display: block;
  overflow: hidden;
  border: 0.3px solid #aaa;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.ldq-menu li {
  list-style: none;
}
.ldq-menu-hr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 5px 0;
}
.ldq-menu-li {
  padding: 3px 10px;
  cursor: default;
}
.ldq-menu-li:hover {
  background-color: #409eff;
}
.ldq-menu-disabled {
  color: rgba(0, 0, 0, 0.6);
  cursor: not-allowed;
}
.ldq-menu-disabled:hover {
  background-color: #fff;
}
.ldq-menu-a {
  cursor: pointer;
}
.ldq-menu-a a {
  display: block;
  width: 100%;
  height: 100%;
  color: #222;
  text-decoration: none;
}
</style>
