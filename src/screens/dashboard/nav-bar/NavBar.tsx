'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { BsChatSquareDots, BsChatSquareDotsFill } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa6'
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { RiUserSearchFill, RiUserSearchLine } from 'react-icons/ri'
import styles from './NavBar.module.scss'
const pages = [
	{
		DefaultIcon: () => <BsChatSquareDots />,
		ActiveIcon: () => <BsChatSquareDotsFill />,
		path: '/dashboard/main',
	},
	{
		DefaultIcon: () => <RiUserSearchLine />,
		ActiveIcon: () => <RiUserSearchFill />,
		path: '/search',
	},
	{
		DefaultIcon: () => <FaRegBell />,
		ActiveIcon: () => <FaRegBell />,
		path: '/search',
	},
	{
		DefaultIcon: () => <IoSettingsOutline />,
		ActiveIcon: () => <IoSettingsSharp />,
		path: '/setting',
	},
]

const NavBar: FC = () => {
	const pathname = usePathname()
	return (
		<div className={styles.navBar}>
			{pages.map((page, i) => (
				<Link href={page.path} key={i}>
					<div className={styles.navBar__item}>
						{pathname.includes(page.path)
							? page.ActiveIcon()
							: page.DefaultIcon()}
					</div>
				</Link>
			))}
		</div>
	)
}

export default NavBar
