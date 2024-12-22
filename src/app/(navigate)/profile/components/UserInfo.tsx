import { motion } from "framer-motion"

const UserInfo = ({ user, logout }) => (
	<motion.section
		initial={{ opacity: 0, y: -50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		// className="bg-[#25252750] rounded-[1rem] p-4 w-full mb-4 shadow-lg text-center"
		className='bg-[#25252750] rounded-[1rem] w-full mb-4 flex items-center justify-center p-4'
	>
		<h2 className="text-3xl font-bold">Welcome, {user.name}</h2>
		{/* <p className="text-zinc-400">Email: {user.email}</p> */}
		<div className='flex ml-auto gap-4'>
			<button className="text-[#f2f4f6] w-[15vh] h-[6vh] relative ml-auto rounded-[0.75em] bg-[#FEC80210] self-center flex items-center justify-center">
				<svg className='stroke-[#FEC802] cursor-pointer relative left-3' width="65%" height="65%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m8 8 4-4 4 4" stroke-width="1.7759999999999998" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4v12M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17" stroke-width="1.7759999999999998" stroke-miterlimit="10" stroke-linecap="round"></path></g></svg>
				<span className='text-[#FEC802] relative px-4'>Upload</span>
			</button>
			{/* <button className="text-[#f2f4f6] w-[12vh] h-[6vh] relative ml-auto rounded-[0.75em] bg-[#FEC80210] self-center flex items-center justify-center">
				<svg className='stroke-[#FEC802] cursor-pointer relative left-3' width="65%" height="65%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
				<span className='text-[#FEC802] relative px-4'>Edit</span>
			</button> */}
			<button onClick={logout} className="text-[#f2f4f6] w-[16vh] h-[6vh] ml-auto rounded-[0.75em] bg-[rgba(223,78,59,0.1)] self-center flex items-center justify-center">
				<svg className='stroke-[#e14c36] cursor-pointer relative left-3' width="65%" height="65%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.989 511.989" stroke-width="15.599449999999997"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2 C119.467,225.605,115.644,221.782,110.933,221.782z"></path> <path d="M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427 c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33 c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29 c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"></path> <path d="M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533 c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533 S173.423,51.115,178.133,51.115z"></path> <path d="M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2 c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128 C341.333,302.405,337.519,298.582,332.8,298.582z"></path> <path d="M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0 c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533 h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5 l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"></path> </g> </g> </g> </g></svg>
				<span className='text-[#e14c36] relative px-4'>Logout</span>
			</button>
		</div>
	</motion.section>
)

export default UserInfo