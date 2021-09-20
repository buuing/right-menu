<script>
export default {
  computed: {
    sidebarItems () {
      const list = this.$themeConfig.locales[this.$localePath].sidebar
      let data = []
      for (let key in list) {
        if (this.$route.path.indexOf(key) === 0) data = list[key]
      }
      return data
    },
  },
  mounted () {
  },
  render () {
    return <div class="page-sidebar">
      {
        this.sidebarItems.map(item => <div>
          { item.title ? <div class="sidebar-title">{item.title}</div> : null }
          {
            item.children ? <ul class="sidebar-list">
              { item.children.map(side => <router-link
                to={side.path}
                tag="li"
              >{side.title}</router-link> )}
            </ul> : null
          }
        </div>)
      }
    </div>
  }
}
</script>

<style scoped>
  .page-sidebar {
    width: 260px;
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    padding: 10px 0px;
    position: fixed;
    top: 60px;
    overflow: auto;
    /* overflow-y: scroll; */
    /* overflow-x: auto; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  .sidebar-title {
    color: #333;
    font-weight: 700;
    padding: 5px;
    margin: 10px 0;
    padding-left: 20px;
  }
  .sidebar-list {
    margin: 0;
    padding: 0;
  }
  .sidebar-list li {
    list-style: none;
    padding: 5px 10px;
    padding-left: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /* .sidebar-list li:hover {
    background: #e9e8fe;
  } */
  .sidebar-list li.router-link-active::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #7171FF;
    -moz-border-radius-topright: 4px;
    border-top-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    border-bottom-right-radius: 4px;
    -webkit-box-shadow: 1px 0 12px 0 #7171FF;
    -moz-box-shadow: 1px 0 12px 0 #7171FF;
    box-shadow: 0px 0 5px 0 #7171FF;
  }
  .sidebar-list li.router-link-active {
    background: #e9e8fe;
  }
</style>