"use client"
import Exponats from '@/components/exponat/Exponats'
import Modal from '@/components/modal'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useAuth } from '@/hooks/useUser'
import { useEffect, useState } from "react"
import { Museum } from '../../../../Data'
import AuthCard from './components/AuthCard'
import LoginForm from './components/LoginForm'
import MuseumForm from './components/MuseumForm'
import RegistrationForm from './components/RegistrationForm'
import UploadForm from './components/UploadForm'
import UserInfo from './components/UserInfo'

const Page = () => {
	const { isAuthenticated, user, login, logout } = useAuth()
	const [isRegister, setIsRegister] = useState(false)

	const [museum, setMuseum] = useLocalStorage("museum", null)
	const [activeTab, setActiveTab] = useState(0)
	const [showModal, setShowModal] = useState(false)  // Manage modal visibility
	const museumData = Museum.collections

	const tabs = [
		{
			label: "Експонати", buttton: <>Додати експонат</>, modal: <UploadForm />, content:
				<div className='flex flex-col gap-3'>
					<input type="text" className='p-3 bg-gray-600 w-full rounded-xl' />
					<Exponats dataMuseum={museumData} isAdmin={true} />

				</div>
		},
		{ label: "Новини", buttton: <>Додати новину</>, modal: <UploadForm />, content: <div></div> },
		{ label: "Афіші", buttton: <>Додати афішу</>, modal: <UploadForm />, content: <div></div> }
	]

	const handleTabClick = (tabId) => {
		setActiveTab(tabId)
	}


	const handleFormSwitch = () => setIsRegister(!isRegister)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return <p>loading...</p>
	const handleOpenModal = () => {
		setShowModal(true)
	}
	const handleCloseModal = () => {
		setShowModal(false)
	}

	if (user) {
		return (
			<>
				{isAuthenticated ? (
					<UserInfo
						user={user}
						logout={logout}
						handleTabClick={handleTabClick}
					/>
				) : (
					<AuthCard title={isRegister ? "Register" : "Login"} handleFormSwitch={handleFormSwitch}>
						{isRegister ? <RegistrationForm onAuth={login} /> : <LoginForm onAuth={login} />}
					</AuthCard>
				)}
			</>
		)
	}
	else
		return (
			<div className="relative flex flex-col justify-center p-4 gap-4">
				<div className='bg-[--mainColor] rounded-[1rem] flex p-4 w-full h-auto'>
					<MuseumForm />
				</div>
				<div className='bg-[--mainColor] rounded-[1rem] justify-center p-4 w-[100%] h-[100%]'>
					{tabs.map((tab, index) => (
						<button
							key={index}
							onClick={() => handleTabClick(index)}
							className={`${activeTab === index ? "bg-[#FEC802] text-[#252527] font-bold" : "bg-[#25252750] text-[#f2f4f6]"} p-2 rounded-lg mr-2`}>
							{tab.label}
						</button>
					))}
				</div>
				<div className="w-[100%] rounded-[1rem] flex items-center justify-center">
					{tabs.map((tab, index) => (
						<div key={index} className={`${activeTab === index ? "flex" : "hidden"} flex-wrap w-full gap-4`}>
							<button className='w-full bg-[--mainColor] p-4 rounded-[1rem] transition hover:bg-[--secondColor]' onClick={handleOpenModal}>
								{tab.buttton}
							</button>
							{tab.content}
							<Modal showModal={showModal} onClose={handleCloseModal}>
								{tabs[activeTab]?.modal}
							</Modal>
						</div>
					))}
				</div>

			</div>
		)
}

export default Page
