import { motion } from "framer-motion"

const AuthCard = ({ title, children, handleFormSwitch }) => (
	<motion.section
		initial={{ opacity: 0, x: -50 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.6 }}
		className="bg-[#25252750] rounded-[1rem] p-8 w-full max-w-md mb-4 shadow-lg"
	>
		<h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
		{children}
		<p className="text-center text-zinc-400 mt-4">
			{title === "Register" ? (
				<>
					Already have an account?{" "}
					<span onClick={handleFormSwitch} className="text-[#FEC802] cursor-pointer">
						Login
					</span>
				</>
			) : (
				<>
					Don't have an account?{" "}
					<span onClick={handleFormSwitch} className="text-[#FEC802] cursor-pointer">
						Register
					</span>
				</>
			)}
		</p>
	</motion.section>
)

export default AuthCard