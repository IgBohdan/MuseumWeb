import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

const items = [
	{
		svg: (
			<svg width="40px" height="40px" className='mr-4' viewBox="0 0 16.00 16.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FEC802"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="#000000"></path> </g></svg>
		),
		name: "Наша адреса",
		description: "76018, вул. Гетьмана Мазепи, 10, м. Івано-Франківськ"
	},
	{
		svg: (
			<svg className='mr-4' width="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="#000000">

				<path fill="#FEC802" d="M249.543,195.132c0,8.373-7.114,15.225-15.806,15.225H20.683c-8.693,0-15.807-6.852-15.807-15.225V70.35c0-8.374,7.113-15.225,15.807-15.225h213.055c8.691,0,15.806,6.851,15.806,15.225V195.132z"></path>
				<path d="M215.118,199.697c5.299,0,6.47-2.964,2.604-6.587l-49.189-46.092c-3.866-3.623-10.382-3.837-14.479-0.477l-13.285,10.899c-4.097,3.36-9.224,7.095-11.393,8.297c0,0,0,0-2.166,0c-2.168,0-2.168,0-2.168,0c-2.168-1.202-7.294-4.937-11.391-8.297l-13.846-11.359c-4.097-3.36-10.612-3.146-14.478,0.477L35.649,193.11c-3.866,3.623-2.694,6.587,2.604,6.587H215.118z"></path>
				<path d="M40.761,65.785c-5.298,0-6.282,2.75-2.186,6.11l81.187,66.6c4.097,3.36,10.8,3.36,14.896,0l81.185-66.6c4.097-3.361,3.113-6.11-2.186-6.11H40.761z"></path>
				<path d="M15.938,178.182c0,5.299,3.164,6.67,7.03,3.047l48.837-45.761c3.867-3.623,3.679-9.336-0.418-12.697L23.386,83.394c-4.097-3.361-7.448-1.775-7.448,3.523V178.182z"></path>
				<path d="M238.481,86.917c0-5.298-3.352-6.884-7.448-3.523l-48.561,39.836c-4.097,3.361-4.285,9.074-0.418,12.697l49.396,46.285c3.867,3.623,7.03,2.252,7.03-3.047V86.917z"></path>
			</svg>


		),
		name: "Електронна пошта",
		description: "miu@pnu.edu.ua"
	},
	{
		svg: (

			<a href="https://www.facebook.com/MIPNUVS/">
				<svg width="40px" height="100%" className='mr-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FEC802"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
			</a>
		),
		name: "Наш фейсбук",
		description: (
			<a href="https://www.facebook.com/MIPNUVS/">https://www.facebook.com/MIPNUVS/</a>
		)
	}
]


const page = () => {
	return (
		<>
			<Header />
			<div className="bg-[#0c0f14] mt-4">
				<div className="w-[70%] bg-[#25252790] py-5 m-auto">
					<h1 className="m-5">Контакти</h1>
					<div className="w-[80%] m-auto">

						{items.map((item, index) => (
							<div key={index} className="flex flex-row">
								{item.svg}
								<div>
									<p>{item.description}</p>
									<p>{item.name}</p>
								</div>
							</div>
						))}

					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default page