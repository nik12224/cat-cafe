import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Main } from './styles'
import { Outlet } from 'react-router-dom'

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
	return (
		<React.Fragment>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</React.Fragment>
	)
}

export default PageWrapper
