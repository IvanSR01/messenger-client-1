'use client'
import { TypeLogin } from '@/shared/types/auth.type'
import Link from 'next/link'
import Form from '../auth-components/form/Form'
import OAuth from '../auth-components/oauth/OAuth'
import { inputDataLogin as inputData } from '../input.data'
import useAuth from '../useAuth'
import styles from './Login.module.scss'

const Login = () => {
	const { onSubmit, isPending } = useAuth<TypeLogin>('login')

	return (
		<div className={styles.login}>
			<h2 className={styles.heading}>Login</h2>
			<Form
				name='login'
				inputData={inputData}
				onSubmit={onSubmit}
				isPending={isPending}
			/>
			<p className={styles.or}>Or</p>
			<OAuth />
			<div className={styles.footer}>
				You dont have an account? <Link href='/auth/register'>Register</Link>
			</div>
		</div>
	)
}

export default Login
