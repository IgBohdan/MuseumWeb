import axios from 'axios'
import { useForm } from 'react-hook-form'
import style from "../style.module.scss"

const RegistrationForm = ({ onAuth }) => {
	const { register, handleSubmit, formState: { errors } } = useForm()

	const onSubmit = async (data) => {
		try {
			const response = await axios.post('http://localhost:4000/api/users', data, {
				headers: {
					'Content-Type': "application/json"
				}
			})
			console.log(response)
			if (response.data) {
				onAuth({ token: response.data.token, user: response.data })

			}
		} catch (error) {
			console.error('Registration failed', error)
			alert('Registration failed: ' + error || 'Unknown error')
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<input {...register('name', { required: 'Name is required' })} placeholder="Name" className={style.inputfield} />
			{errors.name && <p className="text-red-500">{errors.name?.message}</p>}

			<input {...register('email', { required: 'Email is required' })} placeholder="Email" className={style.inputfield} />
			{errors.email && <p className="text-red-500">{errors.email?.message}</p>}

			<input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" className={style.inputfield} />
			{errors.password && <p className="text-red-500">{errors.password?.message}</p>}

			<button type="submit" className={style.buttonprimary}>Register</button>
		</form>
	)
}

export default RegistrationForm