<template>
  <div id="ldq" v-menu="items">
    <div class="box1" v-menu="box1"></div>
    <div class="box2" v-menu="box2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          type: 'a', // type为a时可以点击跳转
          title: '百度一下',
          href: 'http://www.baidu.com'
        }, {
          type: 'li', // type为li是普通按钮
          title: '复制(C)', // 按钮的名称
          func: () => alert('点击了复制') // 回调函数
        }, {
          type: 'li',
          title: '粘贴(V)',
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr' // 分割线, 无需其他参数
        }, {
          type: 'ul', // type为ul是二级菜单
          title: '新建(W)',
          children: [ // children里面配置二级菜单列表, 不支持三级菜单
            {
              type: 'li',
              title: '文件夹(F)',
              func: () => alert('新建了文件夹')
            }, {
              type: 'li',
              title: '快捷方式(S)',
              func: () => alert('新建了快捷方式')
            }, {
              type: 'hr'
            }, {
              type: 'li',
              title: '文本文档'
            }, {
              type: 'li',
              title: 'Work 文档'
            }, {
              type: 'li',
              title: 'Excel 表格'
            }, {
              type: 'li',
              title: 'WinRAR 压缩文件'
            }
          ]
        }, {
          type: 'hr'
        }, {
          type: 'li',
          title: '属性(R)',
          func: () => alert('点击了属性')
        }
      ],
      box1: [
        {
          type: 'li',
          title: '粉盒子'
        }
      ],
      box2: [
        {
          type: 'li',
          title: '紫盒子'
        }, {
          type: 'ul',
          title: '技能',
          children: [
            {
              type: 'li',
              title: '隐身',
              func: (e, dom) => {
                dom.style.display = 'none'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
  #ldq {
    height: 500px;
    background-color: #82acff;
    overflow: hidden;
  }
  .box1 {
    width: 100px;
    height: 100px;
    margin: 100px;
    background-color: #ff5d9e;
    border-radius: 5px;
  }
  .box2 {
    width: 100px;
    height: 100px;
    margin-left: 100px;
    background-color: #494ca2;
    border-radius: 5px;
  }
</style>
