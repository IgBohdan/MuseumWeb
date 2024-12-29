import DataCard from "@/components/cards/category/CategoryCard"
import { listOfNews } from "@/services/EmployeeService"


async function getAllNews() {
  try {
    const response = await listOfNews()
    return response.data
  } catch (error) {
    console.error(error)
  }
}
const Exhibits = async () => {
  const data= await getAllNews()
  return (
    <div className='flex flex-wrap justify-center gap-[.7em]'>
      {data.map((item, index) => (
        <DataCard name={item.name}
        description={item.description}
        img={item.img}
        className='flex-[20vw] min-w-[300px]'
        key={index} />
      ))}
    </div>
  )
}

export default Exhibits;