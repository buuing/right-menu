const ldq = {
  $: (selector, context = document) => {
		if (context instanceof NodeList || context instanceof HTMLCollection) {
			return Array.from(context, node => {
				return node.querySelector(selector)
			})
		}
		return context.querySelector(selector)
  },

  css: (node, styles) => {
		node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles
	},

	width: (node) => {
		return node.getBoundingClientRect().width
	},

	height: (node) => {
		return node.getBoundingClientRect().height
	},
	
	bottom: (node) => {
		return node.getBoundingClientRect().bottom
	},
  
  x: (node) => {
		return node.getBoundingClientRect().x
  },

  y: (node) => {
		return node.getBoundingClientRect().y
  },
}

export default ldq