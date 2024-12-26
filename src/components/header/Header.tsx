import { SearchIcon } from 'lucide-react'
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
        name: "Експонати",
        url: "/exhibits"
    },
    {
        name: "Виставки",
        url: "/exhibitions"
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
            <header className={`rounded-xl bg-[--mainColor] relative py-6  shadow-lg flex flex-wrap`}>
                <div className={`w-full flex flex-wrap gap-2 mx-auto flex items-center justify-between px-6`}>
                    <div className='relative flex justify-center items-center'>
                        <h2 className="text-3xl font-bold tracking-wide">Музей</h2>
                        <Link href='/admin' className='ml-2'>
                            <span className="wButton">
                                Admin
                            </span>
                        </Link>
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