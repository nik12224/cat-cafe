import React from 'react'
import PageWrapper from '../layout/page-wrapper/page-wrapper'
import gallery from '../../mocks/gallery'
import buyOptions from '../../mocks/buyOptions'
import { GlobalStyle } from './styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import starList from '../../mocks/starList.js'
import MainPage from '../pages/main-page.jsx'
import BuyPage from '../pages/buy-page.jsx'

export default function App({ prop }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PageWrapper />}>
					<Route path="" element={<MainPage stars={starList} />}></Route>
					<Route path="buy" element={<BuyPage slides={gallery} buyOptions={buyOptions} />}></Route>
				</Route>
			</Routes>
			<GlobalStyle />
		</BrowserRouter>
	)
}
