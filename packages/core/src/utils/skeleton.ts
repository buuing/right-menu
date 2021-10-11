import { skeletonColor } from '../theme/index'

export const calculate = (element:HTMLElement) => {
  const { lineHeight, padding } = window.getComputedStyle(element)
  const [ paddingTop ] = padding.split(' ')
  const height = parseFloat(lineHeight)  + parseFloat(paddingTop) * 2
  return `
    height: ${height}px;
    background-image: linear-gradient(-45deg, ${skeletonColor[0]} 40%, ${skeletonColor[1]} 55%, ${skeletonColor[0]} 63%);
    background-size: 400% ${lineHeight};
    background-repeat: no-repeat;
    position: relative;
    color: transparent;
    animation: skeleton-animation 1s ease infinite;
  `
}
