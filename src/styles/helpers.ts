import theme from './theme'

export function fontType(type: 'l' | 'r' | 'm' | 'b' = 'r') {
  if (type === 'l') {
    return `font-family: 'Roboto Light', sans-serif;
            font-weight: 300;
          `
  } else if (type === 'r') {
    return `font-family: 'Roboto Regular', sans-serif;
            font-weight: 400;
		`
  } else if (type === 'm') {
    return `font-family: 'Roboto Medium', sans-serif;
		    font-weight: 500;
		`
  } else if (type === 'b') {
    return `font-family: 'Roboto Bold', sans-serif;
		    font-weight: 700;
		`
  }
}

export function mediaQuery(size: keyof typeof theme.breakPoints) {
  return (style: TemplateStringsArray | String) => {
    return `@media (min-width: ${theme.breakPoints[size]}em) {${style}}`
  }
}

export function transition(seconds = 0.3) {
  return `-webkit-transition: all ${seconds}s;
	-moz-transition: all ${seconds}s;
	transition: all ${seconds}s;`
}
