import clsx from 'clsx'
import { useState } from 'react'
import styles from './Main.module.scss'
import Chat from './chat/Chat'

const Main = () => {
	const [selectedChat, setSelectedChat] = useState<any>(null)
	const vremDataChats: any[] = []
	const item = {
		avatar: 'https://avatars.githubusercontent.com/u/108341880?v=4',
		name: 'John Doe',
		messages: [
			...Array(40).fill(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
			),
		],
	}
	for (let i = 1; i < 20; i++) {
		vremDataChats.push({ ...item, id: i })
	}

	return (
		<div className={styles.main}>
			<div
				className={clsx(styles.chats, {
					[styles.selectChat]: selectedChat,
				})}
			>
				{vremDataChats.map((chat, i) => (
					<div
						key={i}
						className={clsx(styles.chatsChat, {
							[styles.active]: i + 1 === selectedChat?.id,
						})}
						onClick={() => setSelectedChat(chat)}
					>
						<div className={styles.containerAvatar}>
							<img src={chat.avatar} alt={chat.name} />
						</div>
						<div className={styles.info}>
							<div className={styles.name}>{chat.name}</div>
							<div className={styles.lastMessage}>{chat.messages[0]}</div>
						</div>
					</div>
				))}
			</div>
			{selectedChat ? (
				<Chat {...selectedChat} closeChat={() => setSelectedChat(null)} />
			) : (
				<div
					className={clsx(styles.noChat, {
						[styles.selectChat]: !selectedChat,
					})}
				>
					No chat selected
				</div>
			)}
		</div>
	)
}

export default Main
