import { MuseumNews } from '../../../Data'

const News = ({ data = [] }: { data: MuseumNews[] }) => {
	return (
		<>
			<h1 className='relative flex justify-center font-bold text-3xl mt-10'>Новини</h1>
			<div className='bg-[--mainColorr] rounded-xl p-12 w-full max-w-full mx-auto overflow-hidden overflow-x-auto gap-8 flex'>
				{data.map((iteam, key) => (
                    <div key={key} className='relative flex-wrap w-1/4 min-w-[19em] h-[57vh] rounded-xl bg-[--mainColor] transform transition-transform transition-colors duration-400 ease-in-out hover:bg-[--buttonColor] hover:scale-105 group'>
                        <img
                            src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070"
                            alt="Museum Interior"
                            className='w-[92%] h-[50%] mt-[4%] ml-[4%] object-cover rounded-xl'
                        />
                        <div className='mt-[4%] ml-[4%] w-[92%] h-[40%] flex flex-col justify-between'>
                            <div>
                                <h1 className='font-bold text-xl transition-colors duration-300 group-hover:text-[--buttonTextColor]'>{iteam.title}</h1>
                                <p className="overflow-hidden line-clamp-4 transition-colors duration-300 group-hover:text-[--buttonTextColor]">{iteam.content}</p>
                            </div>
                            <div className='flex justify-center mr-auto items-center'>
                                <svg
                                    className='w-7 h-7 mt-[-2%] stroke-[--buttonColor] transition-colors duration-300 group-hover:stroke-[--buttonTextColor]'
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                        stroke-width="1.512"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                                <h3 className='px-1 text-[1.2rem] transition-colors duration-300 group-hover:text-[--buttonTextColor]'>{iteam.date}</h3>
                            </div>
                        </div>
                    </div>
				))}
			</div>
		</>
	)
}

export default News