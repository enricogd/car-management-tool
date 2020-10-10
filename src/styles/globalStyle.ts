import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		}	

	html {
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
		@media (max-width: 768px) {
		font-size: 14px;
		}
	}
	body {
    -webkit-font-smoothing: antialiased !important;
	}
	
	body html #root {
		height: 100%;
	}

	img {
		vertical-align: middle;
		border-style: none;
		max-width: 100%;
		object-fit: cover;
		object-position: center;
	}
`
