import React, { useCallback, useMemo, useState } from 'react'
import { Artifact } from '../../Data'
import Card from './Card'
import Modal from './Modal'

export default function Exponats({ dataMuseum, isAdmin = false }: { dataMuseum: any[], isAdmin?: boolean }) {
	const [selectedItem, setSelectedItem] = useState<Artifact | null>(null)

	const handleOpenModal = useCallback((item: Artifact) => {
		setSelectedItem(item)
	}, [])

	const handleCloseModal = useCallback(() => {
		setSelectedItem(null)
	}, [])

	const handleDeleteItem = useCallback((id: number) => {
		console.log("Deleting item with ID:", id)
		setSelectedItem(null)
	}, [])

	const handleEditItem = useCallback((item: Artifact) => {
		console.log("Editing item:", item)
	}, [])

	// Memoizing the rendering of the museum items
	const renderExponats = useMemo(() => {
		return dataMuseum.map((i, index) => (
			<React.Fragment key={index}>
				{i.items.map((item) => (
					<Card key={item.id} data={item} isAdmin={isAdmin} reverse={index % 2 !== 0} onOpenModal={handleOpenModal} />
				))}
			</React.Fragment>
		))
	}, [dataMuseum, isAdmin])

	return (
		<div className='rounded-[1rem] w-full flex flex-wrap gap-4'>
			{renderExponats}

			{selectedItem && (
				<Modal
					selectedItem={selectedItem}
					handleClose={handleCloseModal}
					handleEditItem={handleEditItem}
					handleDeleteItem={handleDeleteItem}
				/>
			)}
		</div>
	)
}
