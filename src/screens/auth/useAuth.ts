import authService from '@/services/auth-service/auth.service'
import { TypeLogin, TypeRegister } from '@/shared/types/auth.type'
import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'

type AuthAPI = 'login' | 'register'

const useAuth = <T = TypeLogin | TypeRegister>(
	api: AuthAPI
): {
	onSubmit: (data: T) => void
	isPending: boolean
} => {
	const { mutate, isPending } = useMutation({
		mutationFn: (credential: T) => authService[api](credential as any),
	})
	const onSubmit = (data: T) => {
		mutate(data)
	}
	return useMemo(() => ({ onSubmit, isPending }), [onSubmit, isPending])
}

export default useAuth
