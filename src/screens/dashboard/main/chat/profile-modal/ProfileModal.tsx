import styles from './ProfileModal.module.scss'
const item = {
	avatar: 'https://avatars.githubusercontent.com/u/108341880?v=4',
	fullName: 'John Doe',
	lastSession: '1 min ago',
	username: '@johndoe',
}
const ProfileModal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.containerAvatar}>
				<img src={item.avatar} alt='' />
				<div className={styles.blur}></div>
			</div>
			<div className={styles.container}>
				<div>
					<div className={styles.fullName}>{item.fullName}</div>
					<div className={styles.username}>{item.username}</div>
					<div className={styles.lastSession}>{item.lastSession}</div>
				</div>
				<div className={styles.toContact}>Add to contact</div>
			</div>
		</div>
	)
}

export default ProfileModal
