'use client'
import { FC } from 'react'
import styles from './Dashboard.module.scss'
import NavBar from './nav-bar/NavBar'
import Main from './main/Main'

interface IDashBoardPage {
	screen: 'mainpage' | 'Search' | 'Settings'
}
const screens: any = {
	mainpage: () => <Main />,
}

const Dashboard: FC<IDashBoardPage> = ({ screen }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				<NavBar />
				{screens[screen]()}
			</div>
		</div>
	)
}

export default Dashboard
