

const GalleryCarusel = ({ data = 0 }: { data?: number }) => {
	return (
		<div>
			<p>Carousel</p>
			<p>{data}</p>
		</div>
	)
}



const GalleryIteam = ({ data = 0 }: { data?: number }) => {
	return (
		<div>
			<p>Iteam</p>
			<p>{data + 500}</p>
		</div>
	)
}
export { GalleryCarusel, GalleryIteam }

