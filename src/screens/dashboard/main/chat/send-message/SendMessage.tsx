import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiFillAudio } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { FaCircleStop } from 'react-icons/fa6'
import { FiPaperclip } from 'react-icons/fi'
import { IoSendSharp, IoVideocam } from 'react-icons/io5'
import { ReactMediaRecorder } from 'react-media-recorder'
import styles from './SendMessage.module.scss'
const Icons = {
	text: <IoSendSharp />,
	audio: <AiFillAudio />,
	video: <IoVideocam />,
}

const SendMessage = () => {
	const [switchTypeMessage, setSwitchTypeMessage] =
		useState<keyof typeof Icons>('text')
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const [mediaBlobUrl, setMediaBlobUrl] = useState<any>(null)

	useEffect(() => {
		document.addEventListener('click', () => setIsOpenModal(false))
		return () =>
			document.removeEventListener('click', () => setIsOpenModal(false))
	}, [])

	const [isRecording, setIsRecording] = useState(false)
	const handlerChangeType = (type: keyof typeof Icons) => {
		setSwitchTypeMessage(type)
		setIsOpenModal(false)
		setMediaBlobUrl(null)
	}
	return (
		<ReactMediaRecorder
			audio={switchTypeMessage === 'audio'}
			video={switchTypeMessage === 'video'}
			onStop={blob => setMediaBlobUrl(blob)}
			render={({ startRecording, stopRecording }) => (
				<div className={styles.sendMessage}>
					<div className={styles.file}>
						{mediaBlobUrl ? (
							<FaTrashAlt onClick={() => setMediaBlobUrl(null)} />
						) : (
							<FiPaperclip />
						)}
					</div>
					{mediaBlobUrl ? (
						<>
							{switchTypeMessage === 'audio' && (
								<audio className={styles.input} src={mediaBlobUrl} controls />
							)}
							{switchTypeMessage === 'video' && (
								<div className={styles.video}>
									<video src={mediaBlobUrl} controls />
								</div>
							)}
						</>
					) : (
						<input
							className={styles.input}
							type='text'
							placeholder='Type a message'
						/>
					)}
					<AnimatePresence>
						{isOpenModal && (
							<motion.div
								variants={variants}
								initial='init'
								animate='animate'
								exit='exit'
								transition={{ duration: 0.3 }}
								className={styles.modalSwitchType}
							>
								{Object.keys(Icons).map((key, i) => (
									<div
										key={i}
										className={clsx(styles.switchType, {
											[styles.active]: switchTypeMessage === key,
										})}
										onClick={() => handlerChangeType(key as keyof typeof Icons)}
									>
										<p>{key}</p>
										{Icons[key as keyof typeof Icons]}
									</div>
								))}
							</motion.div>
						)}
					</AnimatePresence>
					<div>
						<div
							className={styles.send}
							onMouseEnter={() => setIsOpenModal(true)}
							onClick={() => {
								if (switchTypeMessage === 'text') return
								if (isRecording) {
									setIsRecording(false)
									stopRecording()
								} else {
									setIsRecording(true)
									startRecording()
								}
							}}
						>
							{isRecording ? <FaCircleStop /> : <>{Icons[switchTypeMessage]}</>}
						</div>
					</div>
					{mediaBlobUrl && <div className={styles.send}>{Icons['text']}</div>}
				</div>
			)}
		/>
	)
}

export default SendMessage
const variants = {
	init: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
}
