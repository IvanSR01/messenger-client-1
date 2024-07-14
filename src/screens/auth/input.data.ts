export type IInput = {
	name: string
	type: string
	placeholder: string
	required?: boolean
}

export const inputDataLogin: IInput[] = [
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		required: true,
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Password',
		required: true,
	},
]

export const inputDataRegister: IInput[] = [
	{
		name: 'fullName',
		type: 'text',
		placeholder: 'Full Name',
		required: true,
	},
	{
		name: 'username',
		type: 'text',
		placeholder: 'Username',
		required: true,
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'Email',
		required: true,
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Password',
		required: true,
	},
]
