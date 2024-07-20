import { getTokens } from '@/shared/cookie/tokens.cookie'
import axios from 'axios'

const defaultApi = axios.create({
	baseURL: process.env.NEST_PUBLIC_API_URL,
})
const accessApi = axios.create({
	baseURL: process.env.NEST_PUBLIC_API_URL,
})

accessApi.interceptors.request.use((config) => {
	const accessToken = getTokens().accessToken
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

export { defaultApi, accessApi }
