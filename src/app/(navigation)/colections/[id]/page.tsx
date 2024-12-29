import DataCard from "@/components/cards/category/CategoryCard";
import { listOfNews } from "@/services/EmployeeService";

async function getAllNews() {
  try {
    const response = await listOfNews();
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
const Category = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await getAllNews();
  const categoryId = (await params).id; // Accessing id directly after awaiting

  const category = data.filter((item) => item.id && item.id == categoryId);

  return (
    <div className="flex flex-wrap justify-center gap-[.7em]">
      <h1 className="text-3xl w-full">Назва категорії</h1>
      {category.map((item, index) => (
        <DataCard
          name={item.category}
          description={item.description}
          img={item.img}
          className="flex-[20vw] min-w-[300px]"
          key={index}
        />
      ))}
      {data.map((item, index) => (
        <DataCard
          name={item.name}
          description={item.description}
          img={item.img}
          className="flex-[20vw] min-w-[300px]"
          key={index}
        />
      ))}
    </div>
  );
};

export default Category;
