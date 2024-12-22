import Link from 'next/link'

const iteams = [
    {
        name: "Головна",
        url: "/"
    },
    {
        name: "Музей",
        url: "/museum"
    },
    {
        name: "Виставки",
        url: "/exhibition"
    },
    {
        name: "Публікації",
        url: "/publications"
    },
    {
        name: "Про нас",
        url: "/about"
    },
]

const Header = () => {
    return (
        <>
            <header className={`rounded-xl bg-[--mainColor]  relative py-6 top-[0.25em] shadow-lg flex flex-wrap`}>
                <div className={`w-full flex flex-wrap gap-2 mx-auto flex items-center justify-between px-6`}>
                    <div className='relative flex justify-center items-center'>
                        <h2 className="text-3xl font-bold tracking-wide">Музей</h2>
                        <Link href='/profile' className='ml-2'>
                            <span className="wButton">
                                Профіль
                            </span>
                        </Link>
                    </div>
                    <div className='bg-[--mainColor] flex ml-auto w-[60vh] h-[6vh] px-4 py-2 rounded-[50px]'>
                        <div className='flex w-full'>
                            <input className='outline-none bg-transparent w-[85%] ml-4' type="text" placeholder='пошук' />
                            <button className='relative flex justify-center items-center ml-auto w-[3vw] h-[100%]'>
                                <svg width="90%" height="90%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#2563eb" stroke-width="2.208" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <nav className="ml-auto">
                        <ul className="flex gap-6 text-[--textColor2] font-medium justify-end flex-wrap">
                            {iteams.map((item, index) => (
                                <li key={index} className="relative font-bold hover:text-[--buttonColor] transition duration-300 ease-in-out cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[--buttonColor] after:w-0 hover:after:w-full after:transition-all after:duration-300">
                                    <a href={item.url} >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header >
        </ >
    )
}

export default Header