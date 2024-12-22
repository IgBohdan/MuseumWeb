import { motion } from "framer-motion"

interface ModalProps {
	showModal: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal = ({ showModal, onClose, children }: ModalProps) => {
	if (!showModal) return null

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 w-full h-full flex items-start pt-[3em] justify-center rounded-xl z-50 bg-black/50 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="p-6 top-0 wBgColor rounded-lg max-w-[95vw] w-max max-h-[95vh] overflow-auto w-full"
				onClick={(e) => e.stopPropagation()} // Prevent the click from closing the modal
			>
				{children}
			</div>
		</motion.div>
	)
}

export default Modal
