import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer';

const categoty = [
    {
        name: "Всі новини"
    },
    {
        name: "Виставки"
    },
    {
        name: "Презентації"
    },
    {
        name: "Заходи"
    },
    {
        name: "Музей"
    }
]

const news = [
    {
        url: "https://museum.computer/_photo_sq/10211_1200x900_1896.jpg",
        name: "Новини 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui aut culpa, dolore soluta voluptatem officia! Dolor, dolorum? Doloremque a, aliquam minima voluptatibus modi ea doloribus provident ex animi minus?",
        data: "10.10.2024"
    },
    {
        url: "https://museum.computer/_photo_sq/10211_1200x900_1896.jpg",
        name: "Новини 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui aut culpa, dolore soluta voluptatem officia! Dolor, dolorum? Doloremque a, aliquam minima voluptatibus modi ea doloribus provident ex animi minus?",
        data: "11.11.2024"
    },
    {
        url: "https://museum.computer/_photo_sq/10211_1200x900_1896.jpg",
        name: "Новини 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui aut culpa, dolore soluta voluptatem officia! Dolor, dolorum? Doloremque a, aliquam minima voluptatibus modi ea doloribus provident ex animi minus?",
        data: "12.12.2024"
    },
    {
        url: "https://museum.computer/_photo_sq/10211_1200x900_1896.jpg",
        name: "Новини 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui aut culpa, dolore soluta voluptatem officia! Dolor, dolorum? Doloremque a, aliquam minima voluptatibus modi ea doloribus provident ex animi minus?",
        data: "12.12.2024"
    },
    {
        url: "https://museum.computer/_photo_sq/10211_1200x900_1896.jpg",
        name: "Новини 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui aut culpa, dolore soluta voluptatem officia! Dolor, dolorum? Doloremque a, aliquam minima voluptatibus modi ea doloribus provident ex animi minus?",
        data: "12.12.2024"
    }
]

const Publications = () => {
    return (
        <>
            <div>
                <Header />
                <section>
                    <h1 className='flex justify-center font-bold text-[3em] mt-[1em]'>Новини</h1>
                    <div className='flex flex-wrap justify-center gap-[1em] py-16'>
                        <div className='w-[13em] h-[20em] p-6 bg-[--mainColor] rounded-xl'>
                            <nav>
                                <ul className='flex flex-col gap-2'>
                                    {categoty.map((item, index) => (
                                        <li key={index} className="flex items-center font-bold py-3 px-5 rounded-xl bg-[--mainColor] transform transition-all duration-300 hover:text-white hover:bg-[--buttonColor]">
                                            <a href="">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className='w-[70%] px-6 rounded-xl'>
                            <div className='flex flex-wrap justify-center gap-[1.2em]'>
                                {news.map((item, index) => (
                                    <div key={index} className='flex flex-col justify-between w-[32%] h-[55vh] p-4 bg-[--mainColor] rounded-xl hover:bg-[--buttonColor] hover:scale-95 transform transition-all duration-300 hover:text-white'>
                                        <img src={item.url} alt="" className='w-full h-[60%] object-cover rounded-xl'/>
                                        <h3 className='mt-3 font-bold text-xl'>{item.name}</h3>
                                        <p className='mt-2 line-clamp-3'>{item.description}</p>
                                        <h2 className='mt-auto'>{item.data}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Publications;
