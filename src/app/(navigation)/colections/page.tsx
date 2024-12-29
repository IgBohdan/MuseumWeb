import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer';
import DataCard from "@/components/cards/category/CategoryCard"
import { listOfNews } from "@/services/EmployeeService"

const categoty = [
    {
        name: "Комп'ютери"
    },
    {
        name: "Принтери"
    },
    {
        name: "аваіаіа"
    },
    {
        name: "аіваіаіа"
    },
    {
        name: "авіаіа"
    }
]

async function getAllNews() {
    try {
        const response = await listOfNews()
        return response.data
    } catch (error) {
        console.error(error)
    }
}
const Exhibits = async () => {
    const data = await getAllNews()
    return (
        <> 
            <Header />
            <h1 className='flex justify-center font-bold text-[3em] mt-[1em]'>Колекції</h1>
            <div className="flex flex-col items-center">
                <div className='w-max h-auto p-4 mt-[1em] mb-[1em] bg-[--mainColor] rounded-xl flex'>
                    <nav>
                        <ul className='flex gap-2'>
                            {categoty.map((item, index) => (
                                <li key={index} className="flex items-center font-bold py-3 px-5 rounded-xl bg-[--mainColor] transform transition-all duration-300 hover:text-white hover:bg-[--buttonColor]">
                                    <a href="">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-wrap justify-center gap-[.7em]'>
                    {data.map((item, index) => (
                        <DataCard
                            name={item.name}
                            description={item.description}
                            img={item.img}
                            className='flex-[20vw] min-w-[300px]'
                            key={index} />
                    ))}
                </div>
            </div>
            <div className='mt-[3em]'>
                <Footer />
            </div>
        </>
    )
}

export default Exhibits;