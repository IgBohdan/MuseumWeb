import { motion } from 'framer-motion'
import { useState } from 'react'

const Modal = ({ selectedItem, handleClose, handleEditItem, handleDeleteItem }: { selectedItem: Artifact, handleClose: () => void, handleEditItem: (item: Artifact) => void, handleDeleteItem: (id: number) => void }) => {
	const [activeTab, setActiveTab] = useState<'details' | 'photos' | 'description'>('details')
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState({ ...selectedItem }) // Copy initial data to edit
	const [newPhotos, setNewPhotos] = useState<File[]>([]) // For uploading new photos

	// Handle change in form fields
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
		setFormData({ ...formData, [field]: e.target.value })
	}

	// Handle photo upload
	const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setNewPhotos([...newPhotos, ...Array.from(e.target.files)])
		}
	}

	// Handle deleting a photo
	const handleDeletePhoto = (index: number) => {
		setNewPhotos(newPhotos.filter((_, i) => i !== index))
	}

	// Handle saving the changes
	const handleSave = () => {
		// Ensure the form data is valid
		if (!formData.name || !formData.age || !formData.origin) {
			alert("Please fill out all required fields.")
			return
		}
		// Pass the updated item and new photos to the parent
		handleEditItem({ ...formData, details: { ...formData.details, morePhotos: newPhotos } })
		setIsEditing(false)
	}

	// Handle the "Clear" button (reset form data to the initial values)
	const handleClear = () => {
		setFormData({ ...selectedItem })
		setNewPhotos([]) // Clear new photos
	}

	const handleTabChange = (tab: 'details' | 'photos' | 'description') => {
		setActiveTab(tab)
	}

	return (
		<motion.div
			className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div
				className="bg-gray-900 p-8 rounded-xl w-[95%] shadow-lg overflow-y-auto h-full max-h-[90vh]"
				onClick={(e) => e.stopPropagation()}
			>

				<div className="flex justify-between items-center mb-6">
					<h2 className="text-3xl font-semibold text-white">{isEditing ? "Редагувати" : selectedItem.name}</h2>

					<div className='flex ml-auto w-auto gap-3'>
						{isEditing ? (
							<>
								<button
									className="text-gray-400  hover:text-white w-full"
									onClick={handleSave}
								>
									Зберегти
								</button>
								<button
									className="text-gray-400 hover:text-white w-full"
									onClick={handleClear}
								>
									Скасувати
								</button>
							</>
						) : (
							<>
								<button
									className="text-gray-400 hover:text-white"
									onClick={() => setIsEditing(true)}
								>
									Редагувати
								</button>
								<button
									className="text-gray-400 hover:text-white"
									onClick={() => handleDeleteItem(selectedItem.id)}
								>
									Видалити
								</button>
							</>
						)}
						<button
							onClick={handleClose}
							className="text-gray-400 hover:text-white w-full"
						>X
						</button>
					</div>
				</div>

				{/* Tab Navigation */}
				<div className="flex border-b mb-6">
					<button
						className={`py-2 px-4 flex-1 text-center ${activeTab === 'details' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-400'}`}
						onClick={() => handleTabChange('details')}
					>
						Деталі
					</button>
					<button
						className={`py-2 px-4 flex-1 text-center ${activeTab === 'photos' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-400'}`}
						onClick={() => handleTabChange('photos')}
					>
						Фотографії
					</button>
					<button
						className={`py-2 px-4 flex-1 text-center ${activeTab === 'description' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-400'}`}
						onClick={() => handleTabChange('description')}
					>
						Опис
					</button>
				</div>

				{/* Tab Content */}
				<motion.div
					key={activeTab}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					{/* Details Tab */}
					{activeTab === 'details' && (
						<div className="space-y-4 mb-6 text-white">
							<h4 className="text-xl font-semibold">Додаткові дані</h4>
							<div className="space-y-2">
								{isEditing ? (
									<>
										<input
											type="text"
											className="w-full p-3 border rounded-md bg-gray-800 text-white"
											value={formData.name}
											onChange={(e) => handleInputChange(e, 'name')}
										/>
										<input
											type="number"
											className="w-full p-3 border rounded-md bg-gray-800 text-white"
											value={formData.age}
											onChange={(e) => handleInputChange(e, 'age')}
										/>
										<input
											type="text"
											className="w-full p-3 border rounded-md bg-gray-800 text-white"
											value={formData.origin}
											onChange={(e) => handleInputChange(e, 'origin')}
										/>
										<input
											type="text"
											className="w-full p-3 border rounded-md bg-gray-800 text-white"
											value={formData.owner}
											onChange={(e) => handleInputChange(e, 'owner')}
										/>
										<textarea
											className="w-full p-3 border rounded-md bg-gray-800 text-white"
											value={formData.description}
											onChange={(e) => handleInputChange(e, 'description')}
										/>
									</>
								) : (
									<>
										<p>Рік створення: <span className="font-semibold">{selectedItem.age}</span></p>
										<p>Автор: <span className="font-semibold">{selectedItem.author || "Невідомий"}</span></p>
										<p>Походження: <span className="font-semibold">{selectedItem.origin || "Невідомо"}</span></p>
										<p>Власник: <span className="font-semibold">{selectedItem.owner || "Невідомо"}</span></p>
										<p>Дата надходження: <span className="font-semibold">{selectedItem.provenance || "Невідомо"}</span></p>
									</>
								)}
							</div>
						</div>
					)}

					{/* Photos Tab */}
					{activeTab === 'photos' && (
						<div className="mb-6">
							<h4 className="text-xl font-semibold text-white">Фотографії</h4>
							<div className="flex gap-4 overflow-x-auto mb-4">
								{selectedItem.details?.morePhotos?.map((photo, index) => (
									<div className="relative">
										<img
											key={index}
											src={photo}
											alt={`Photo ${index + 1}`}
											className="w-[120px] h-[120px] object-cover rounded-md shadow-sm"
										/>
										{isEditing && (
											<button
												className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
												onClick={() => handleDeletePhoto(index)}
											>
												<i className="fas fa-times"></i>
											</button>
										)}
									</div>
								))}
							</div>

							{isEditing && (
								<div>
									<input
										type="file"
										multiple
										onChange={handlePhotoChange}
										className="mb-4"
									/>
									{/* Display uploaded photos */}
									<div className="flex gap-4 mt-4">
										{newPhotos.map((file, index) => (
											<div className="relative" key={index}>
												<img
													src={URL.createObjectURL(file)}
													alt={`New Photo ${index + 1}`}
													className="w-[120px] h-[120px] object-cover rounded-md shadow-sm"
												/>
												<button
													className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
													onClick={() => setNewPhotos(newPhotos.filter((_, i) => i !== index))}
												>
													<i className="fas fa-times"></i>
												</button>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					)}

					{/* Description Tab */}
					{activeTab === 'description' && selectedItem.details?.moreDescription && (
						<div className="mb-6">
							<h4 className="text-xl font-semibold text-white">Додатковий опис</h4>
							<p className="text-gray-400">{selectedItem.details.moreDescription}</p>
						</div>
					)}
				</motion.div>


			</div>
		</motion.div>
	)
}

export default Modal
