import { defineComponent } from 'vue-demi'
import h from "./utils/h-demi"
import { default as Menu, ConfigType, OptionsType } from '@right-menu/core'

export default defineComponent({
  name: 'RightMenu',
  abstract: true,
  props: {
    options: {
      type: Array,
      require: true,
    },
    theme: {
      type: String
    },
    minWidth: {
      type: [String, Number]
    },
    maxWidth: {
      type: [String, Number]
    },
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  render() {
    let vnode = (this.$slots.default as any)[0]
    if (vnode) {
      this.$nextTick(() => {
        const menu = new Menu({
          el: vnode.elm,
          theme: this.theme,
          minWidth: this.minWidth,
          maxWidth: this.minWidth,
          beforeInit: () => this.$emit('beforeInit'),
          afterInit: () => this.$emit('afterInit'),
        }, this.options as OptionsType)
      })
    }
    return vnode
  }
})
