import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Counter from "@/components/counter/Counter";
import Categoryes from "@/components/lists/category/Categoryes";
import { listOfNews } from "../../../services/EmployeeService";

async function getAllNews() {
  try {
    const response = await listOfNews();
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const latestNews = await getAllNews();

  return (
    <div className="flex flex-col gap-5 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-wrap">
        <h1 className="text-4xl font-bold mx-auto">
          Ласкаво просимо до нашого музею
        </h1>

        <section className="flex flex-wrap w-full">
          <h2 className="text-2xl font-bold ml-auto mr-[1em]">
            Останні новини
          </h2>
          <Categoryes data={latestNews} />
        </section>

        <section className="flex flex-wrap w-full ">
          <h2 className="text-2xl font-bold ml-auto mr-[1em]">
            Популярні експонати
          </h2>
          <Categoryes data={latestNews} />
        </section>

        <section className="flex flex-wrap w-full">
          <h2 className="text-2xl font-bold ml-auto mr-[1em]">Категорії</h2>
          <Categoryes data={latestNews} />
        </section>
      </main>
      <Counter />
      <Footer />
    </div>
  );
}
