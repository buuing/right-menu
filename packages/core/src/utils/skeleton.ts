export const calculate = (element:HTMLElement) => {
  const { lineHeight, padding } = window.getComputedStyle(element)
  const [ paddingTop ] = padding.split(' ')
  const height = parseFloat(lineHeight)  + parseFloat(paddingTop) * 2
  return `
    height: ${height}px;
    background-image: linear-gradient(-45deg, #f5f5f5 40%, #fff 55%, #f5f5f5 63%);
    background-size: 400% ${lineHeight};
    background-repeat: no-repeat;
    position: relative;
    color: transparent;
    animation: skeleton-animation 1s ease infinite;
  `
}
