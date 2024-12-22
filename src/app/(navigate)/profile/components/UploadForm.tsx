import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import CollectionForm from './CollectionForm'

interface FormValues {
	name: string
	description: string
	origin: string
	history: string
	owner: string
	age?: number
	active: boolean
	photos: FileList
	collectionId?: number
}

const UploadForm = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()
	const [uploading, setUploading] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [showCollectionForm, setShowCollectionForm] = useState(false)
	const [collections, setCollections] = useState<any[]>([])
	const [selectedCollection, setSelectedCollection] = useState<number | null>(null)

	const [activeTab, setActiveTab] = useState<number>(0)

	useEffect(() => {
		const fetchCollections = async () => {
			try {
				const response = await fetch('http://localhost:4000/api/collections')
				const data = await response.json()
				setCollections(data)
			} catch (error) {
				console.error('Error fetching collections:', error)
			}
		}

		fetchCollections()
	}, [])

	const handleTabChange = (index: number) => {
		setActiveTab(index)
	}

	const handleAddCollection = () => {
		setShowCollectionForm(true)
	}

	const handleCollectionSelect = (id: number) => {
		setSelectedCollection(id)
	}

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const formData = new FormData()

		formData.append('name', data.name)
		formData.append('description', data.description)
		formData.append('origin', data.origin)
		Array.from(data.photos).forEach(file => formData.append('photos', file))
		formData.append('history', data.history)
		formData.append('owner', data.owner)
		if (data.age) formData.append('age', data.age.toString())
		formData.append('active', data.active.toString())
		if (selectedCollection) formData.append('collectionId', selectedCollection.toString())

		try {
			setUploading(true)
			const response = await fetch('http://localhost:4000/api/exponats', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData
			})

			if (!response.ok) {
				throw new Error('Error uploading exponat')
			}

			const result = await response.json()
			reset()
			alert(`Exponat created with ID: ${result.exponatId}`)
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
		} finally {
			setUploading(false)
		}
	}

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="w-[50em]"
		>
			<h2 className="text-3xl font-bold mb-6 text-center text-white">Upload Exponat</h2>

			{errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

			{/* Tabs Navigation */}
			<div className="flex justify-center mb-4">
				<button
					className={`py-2 px-4 ${activeTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'} rounded-l-lg`}
					onClick={() => handleTabChange(0)}
				>
					Exponat Information
				</button>
				<button
					className={`py-2 px-4 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}
					onClick={() => handleTabChange(1)}
				>
					Photos
				</button>
				<button
					className={`py-2 px-4 ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'} rounded-r-lg`}
					onClick={() => handleTabChange(2)}
				>
					Collection
				</button>
			</div>

			{/* Tabs Content */}
			<form onSubmit={handleSubmit(onSubmit)} className="wContainer flex-wrap	">
				{/* Tab 1: Exponat Information */}
				{activeTab === 0 && (
					<div className="space-y-4 w-full">
						{/* Name */}
						<input
							{...register('name', { required: 'Name is required' })}
							placeholder="Name"
							className="w-full wInput"
						/>
						{errors.name && <p className="text-red-500">{errors.name.message}</p>}

						{/* Description */}
						<textarea
							{...register('description', { required: 'Description is required' })}
							placeholder="Description"
							className="w-full wInput"
							rows={4}
						/>
						{errors.description && <p className="text-red-500">{errors.description.message}</p>}

						{/* Origin */}
						<input
							{...register('origin', { required: 'Origin is required' })}
							placeholder="Origin"
							className="w-full wInput"
						/>
						{errors.origin && <p className="text-red-500">{errors.origin.message}</p>}

						{/* History */}
						<input
							{...register('history', { required: 'History is required' })}
							placeholder="History"
							className="w-full wInput"
						/>
						{errors.history && <p className="text-red-500">{errors.history.message}</p>}

						{/* Owner */}
						<input
							{...register('owner', { required: 'Owner is required' })}
							placeholder="Owner"
							className="w-full wInput"
						/>
						{errors.owner && <p className="text-red-500">{errors.owner.message}</p>}

						{/* Age */}
						<input
							type="number"
							{...register('age', { valueAsNumber: true, min: 1 })}
							placeholder="Age (optional)"
							className="w-full wInput"
						/>
						{errors.age && <p className="text-red-500">{errors.age.message}</p>}

						{/* Active */}
						<div className="flex items-center">
							<label htmlFor="active" className="mr-2 text-white">Active</label>
							<input
								type="checkbox"
								{...register('active')}
								defaultChecked
								id="active"
								className="w-5 h-5"
							/>
						</div>
					</div>
				)}

				{/* Tab 2: Photos */}
				{activeTab === 1 && (
					<div className='w-full'>
						{/* Photos */}
						<input
							{...register('photos', { required: 'At least one photo is required' })}
							type="file"
							className="w-full wInput"
							multiple
						/>
						{errors.photos && <p className="text-red-500">{errors.photos.message}</p>}
					</div>
				)}

				{/* Tab 3: Collection */}
				{activeTab === 2 && (
					<div className="wBgColor2 wContainer justify-between w-full">
						<h3 className="text-xl flex items-center justify-center text-white">Select or Add Collection</h3>
						<select							{...register('collectionId')}
							value={selectedCollection ?? ''}
							onChange={(e) => setSelectedCollection(Number(e.target.value))}
							className="wInput"
						>
							<option value="">Select Collection</option>
							{collections.map((collection) => (
								<option key={collection.id} value={collection.id}>
									{collection.name}
								</option>
							))}
						</select>

						<button
							type="button"
							className="wButton"
							onClick={handleAddCollection}
						>
							Add New Collection
						</button>

						{showCollectionForm && (
							<CollectionForm
								onSubmit={() => setShowCollectionForm(false)} // Close the form after creation
							/>
						)}
					</div>
				)}

				{/* Submit Button */}
				<button
					type="submit"
					className="wButton"
					disabled={uploading}
				>
					{uploading ? 'Uploading...' : 'Upload'}
				</button>
			</form>
		</motion.section>
	)
}

export default UploadForm
