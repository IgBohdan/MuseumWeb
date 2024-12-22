import { motion } from 'framer-motion'
import React from 'react'

const Card = ({ data, reverse, isAdmin, onOpenModal }: { data: Artifact, reverse?: boolean, isAdmin?: boolean, onOpenModal: (item: Artifact) => void }) => {
	const classStyle = "rounded-lg bg-[--mainColor] p-4 w-auto min-w-[20em]  flex-[20em] gap-6 flex transition-all transform duration-300 ease-in-out hover:scale-[.98]"
	const content = (
		<div className='flex flex-col gap-4 w-full'>
			<motion.img
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				src={data.photo}
				alt={data.name}
				className="inset-0 w-full h-[250px] object-cover rounded-xl"
			/>
			<motion.div
				className='flex flex-wrap w-full'
				initial={{ opacity: 0, x: reverse ? -50 : 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<h2 className="text-2xl font-semibold mb-4 flex-[100%]">{data.name}</h2>
				<p className="text-zinc-500 mb-4 flex-[100%]">{data.description}</p>
			</motion.div>
		</div>
	)

	if (isAdmin) {
		return (
			<button className={classStyle} onClick={() => onOpenModal(data)}>
				{content}
			</button>
		)
	} else {
		return (
			<section className={classStyle}>
				{content}
			</section>
		)
	}
}

export default React.memo(Card)
