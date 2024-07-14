'use client'
import { useState } from 'react'
import Form from '../auth-components/form/Form'
import OAuth from '../auth-components/oauth/OAuth'
import { inputDataRegister as inputData } from '../input.data'
import styles from './Register.module.scss'
import Link from 'next/link'

const Register = () => {
	const [isPending, setIsPending] = useState(false)

	const onSubmit = (data: any) => {
		console.log(data.email, data.password)
	}

	return (
		<div className={styles.register}>
			<h2 className={styles.heading}>Register</h2>
			<Form
				name='register'
				inputData={inputData}
				onSubmit={onSubmit}
				isPending={isPending}
			/>
			<p className={styles.or}>Or</p>
			<OAuth />
			<div className={styles.footer}>
				Already have an account? <Link href='/auth/login'>Login</Link>
			</div>
		</div>
	)
}

export default Register
