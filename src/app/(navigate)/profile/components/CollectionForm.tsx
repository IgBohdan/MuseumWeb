import axios from 'axios'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

const CollectionForm = ({ onSubmit, museumId, collectionId, initialData }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: initialData
	})

	const submitForm = async (data) => {
		try {
			if (collectionId) {
				// Updating collection
				await axios.put(`/api/museum/${museumId}/collections/${collectionId}`, data)
			} else {
				// Adding new collection
				await axios.post(`/api/museum/${museumId}/collections`, data)
			}
			onSubmit() // Clear the form after successful operation
			reset() // Reset form values
		} catch (error) {
			console.error('Error while submitting form:', error)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 wBgColor bg-opacity-90 flex justify-center items-center z-50"
		>
			<motion.form
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				onSubmit={handleSubmit(submitForm)}
				className="wContainer flex-col wBgColor"
			>
				<h3 className="text-xl font-semibold text-center text-gray-200">{collectionId ? 'Оновити колекцію' : 'Додати колекцію'}</h3>

				<div>
					<input
						type="text"
						{...register('name')}
						className="wInput w-full"
						placeholder="Назва колекції"
					/>
				</div>

				<div>
					<textarea
						{...register('description')}
						className="wInput w-full"
						placeholder="Опис колекції"
					/>
				</div>

				<div>
					<input
						type="text"
						{...register('curatedBy')}
						className="wInput w-full"
						placeholder="Куратор колекції"
					/>
				</div>

				<div className="flex justify-end space-x-4">
					<button
						type="button"
						onClick={() => onSubmit()} // Close modal without submitting form
						className="wButton"
					>
						Закрити
					</button>

					<motion.button
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						type="submit"
						className="wButton ,"
					>
						{collectionId ? 'Оновити колекцію' : 'Додати колекцію'}
					</motion.button>
				</div>
			</motion.form>
		</motion.div>
	)
}

export default CollectionForm
