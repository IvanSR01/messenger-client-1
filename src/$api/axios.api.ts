import axios from 'axios'

const defaultApi = axios.create({
	baseURL: process.env.NEST_PUBLIC_API_URL,
})
console.log(process.env.NEST_PUBLIC_API_URL)
const accessApi = axios.create({
	baseURL: process.env.NEST_PUBLIC_API_URL,
})

export { defaultApi, accessApi }
