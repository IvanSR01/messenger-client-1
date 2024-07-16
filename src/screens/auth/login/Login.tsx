'use client'
import { useError } from '@/hooks/useError'
import { TypeLogin } from '@/shared/types/auth.type'
import Link from 'next/link'
import { toast } from 'react-toastify'
import Form from '../auth-components/form/Form'
import OAuth from '../auth-components/oauth/OAuth'
import { inputDataLogin as inputData } from '../input.data'
import useAuth from '../useAuth'
import styles from './Login.module.scss'
import { TypeTokens } from '@/shared/types/tokens.type'

const Login = () => {
	const { onSubmit, isPending } = useAuth<TypeLogin, TypeTokens>({
		api: 'login',
		onError: err => toast.error(useError(err)),
		onSuccess: data => {},
	})

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
