import { useEffect, useRef, useState } from 'react'

const ParallaxCarousel = () => {
	const items = [
		{ title: 'Painting 1', description: 'A beautiful painting by Artist A', image: 'https://via.placeholder.com/800x600' },
		{ title: 'Sculpture 2', description: 'An impressive sculpture by Artist B', image: 'https://via.placeholder.com/800x600' },
		{ title: 'Artifact 3', description: 'An ancient artifact from Culture C', image: 'https://via.placeholder.com/800x600' },
		{ title: 'Installation 4', description: 'A modern installation by Artist D', image: 'https://via.placeholder.com/800x600' },
		{ title: 'Exhibit 5', description: 'A unique exhibit showcasing Art E', image: 'https://via.placeholder.com/800x600' },
	]

	const itemRefs = useRef([])
	const [activeIndex, setActiveIndex] = useState(0)

	const scrollToIndex = (index) => {
		if (itemRefs.current[index]) {
			itemRefs.current[index].scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest'
			})
			setActiveIndex(index)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2 // Middle of the viewport
			const newIndex = itemRefs.current.findIndex((ref) => {
				return ref && ref.getBoundingClientRect().top + window.scrollY <= scrollPosition &&
					ref.getBoundingClientRect().bottom + window.scrollY > scrollPosition
			})
			if (newIndex !== -1 && newIndex !== activeIndex) {
				setActiveIndex(newIndex)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [activeIndex])

	return (
		<div className="relative p-4 gap-3 flex">

			<div className='w-full'>
				{items.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemRefs.current[index] = el)}
						className={`parallax-item w-full transition-opacity duration-300 ease-in-out h-[80vh] flex justify-center items-center relative ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
					>
						<div className='w-full h-full flex flex-col justify-center items-center bg-white p-4'>
							<img src={item.image} alt={item.title} className="w-full h-2/3 object-cover rounded mb-4" />
							<h2 className="text-gray-800 text-2xl font-bold mb-2">{item.title}</h2>
							<p className="text-gray-600 text-lg text-center">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-3 justify-center h-fit w-auto">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollToIndex(index)}
						className="min-w-full h-auto p-2 bg-gray-800 text-white rounded shadow-md hover:bg-gray-700 transition"
					>
						{`Element ${index + 1}`}
					</button>
				))}
			</div>

		</div>
	)
}

export default ParallaxCarousel;

