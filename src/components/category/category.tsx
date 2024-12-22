import { motion } from 'framer-motion'
import styles from './category.module.css'

export function Category() {
	return (
		<div className={`${styles.scrollContainer} ${styles.shadow_3d_container} overflow-x-auto bg-[--mainColor] p-4 rounded-[1rem] shadow-3d-container`}>
			<div className="flex space-x-4">
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, key) => (
						<section key={key} className={`${styles.shadow_3d_card} flex-none w-[17em] bg-[--mainColor] rounded-[1rem] relative`}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								className="flex-auto absolute left-0 top-0 h-full p-6 center z-10">
								<p className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet</p>
								<p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum maiores minima? Velit nemo nostrum voluptatem non incidunt quidem omnis dolorum nulla quam animi.</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="relative h-[250px] rounded-lg overflow-hidden">
							</motion.div>
						</section>
					))
				}
			</div>
		</div>
	)
}

