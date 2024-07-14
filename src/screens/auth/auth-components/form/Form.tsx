import Input from '@/shared/ui/input/Input'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormProps } from './Form-type'
import styles from './Form.module.scss'

const Form: FC<FormProps> = ({ inputData, onSubmit, isPending, name }) => {
	type ExtractNames<T> = T extends { name: infer U } ? U : never
	type InputNames = ExtractNames<(typeof inputData)[number]>

	type FormValues = {
		[key in InputNames]: string
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{inputData.map((input, i) => (
				<div key={i}>
					<Input
						type={input.type}
						placeholder={input.placeholder}
						pending={isPending}
						helperText={errors[input.name as InputNames]?.message}
						error={!!errors[input.name as InputNames]?.message}
						{...register(input.name as InputNames, {
							required: input.required && `This ${input.name} is required`,
						})}
					/>
				</div>
			))}
			<button className={styles.formButton} type='submit' disabled={isPending}>
				{name}
			</button>
		</form>
	)
}

export default Form
