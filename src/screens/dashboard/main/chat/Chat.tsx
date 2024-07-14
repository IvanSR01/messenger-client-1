import React, { FC, useEffect, useState } from 'react'
import Modal from '@/components/modal/Modal'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillAudio } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { FaCircleStop } from 'react-icons/fa6'
import { FiPaperclip } from 'react-icons/fi'
import { IoChevronBack, IoSendSharp, IoVideocam } from 'react-icons/io5'
import { ChatProps } from './Chat-type'
import styles from './Chat.module.scss'
import ProfileModal from './profile-modal/ProfileModal'
import { ReactMediaRecorder } from 'react-media-recorder'
import SendMessage from './send-message/SendMessage'

const Chat: FC<ChatProps> = ({ avatar, name, messages, closeChat }) => {
	const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false)

	return (
		<div className={styles.chat}>
			<div className={styles.heading}>
				<div className={styles.info}>
					<IoChevronBack className={styles.close} onClick={closeChat} />
					<div className={styles.info} onClick={() => setIsProfileOpen(true)}>
						<div className={styles.containerAvatar}>
							<img src={avatar} alt={name} />
						</div>
						<div className={styles.item}>
							<div className={styles.name}>{name}</div>
							<div className={styles.session}>1 min ago</div>
						</div>
					</div>
				</div>
				<FaUser />
			</div>
			<div className={styles.messages}>
				{messages.map((message, i) => (
					<div
						key={i}
						className={clsx(styles.container, { [styles.right]: i % 2 })}
					>
						<div className={styles.message}>{message}</div>
					</div>
				))}
			</div>
			<SendMessage />
			<Modal showModal={isProfileOpen} setShowModal={setIsProfileOpen}>
				<ProfileModal />
			</Modal>
		</div>
	)
}

export default Chat
