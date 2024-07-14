'use client'
import { FC } from 'react'
import styles from './Dashboard.module.scss'
import NavBar from './nav-bar/NavBar'
import Main from './main/Main'

interface IDashBoardPage {
	page: 'Main' | 'Search' | 'Settings'
}
const pages: any = {
	Main: () => <Main />,
}

const Dashboard: FC<IDashBoardPage> = ({ page }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<NavBar />
				{pages[page]()}
			</div>
		</div>
	)
}

export default Dashboard
