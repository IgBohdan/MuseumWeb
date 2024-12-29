'use client'
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { useState } from "react";
const Exhibit2 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Exhibit Name</h1>
        <p className="mt-2 text-lg">Category: Ancient Artifacts</p>
      </header>

      <main className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="Exhibit Image"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Details Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="leading-relaxed">
            This exhibit showcases a remarkable artifact from the 18th century, representing the cultural heritage of its time. Detailed craftsmanship and unique design make it a significant piece in our collection.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Key Details:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Origin: Ancient Greece</li>
              <li>Material: Marble and Bronze</li>
              <li>Dimensions: 120cm x 80cm x 50cm</li>
              <li>Year: Circa 1750</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Curator's Note:</h3>
            <p className="leading-relaxed">
              This piece provides a glimpse into the artistry and daily life of its era. It is one of the museum's most treasured exhibits.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-700 pt-6">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Museum Name. All Rights Reserved.</p>
          <nav>
            <a href="/museum" className="mr-4 hover:underline">
              Back to Museum
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};



const Exhibit = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col space-y-8 text-white">
      {/* <Exhibit2 /> */}

      {/* Заголовок */}
      <header className="text-center">
        <h1 className="text-5xl font-extrabold">Назва експонату</h1>
        <p className="mt-2 text-xl italic">Категорія: Давньогрецькі артефакти</p>
      </header>

      <div className="flex flex-wrap gap-4">
        <div className="shadow-none text-white bg-transparent flex-[25em] space-y-3">
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="Експонат"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-md mb-4"
          />
        </div>


        <div className="flex-[40%] min-w-[20em] flex flex-wrap gap-6">
          <div className="bg-transparent">
            <h2 className="text-3xl font-bold mb-4">Основні деталі</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Походження: Давня Греція</li>
              <li>Матеріал: Мармур і бронза</li>
              <li>Розміри: 120 см x 80 см x 50 см</li>
              <li>Рік: близько 1750</li>
              <li>Місцезнаходження: Музей давніх артефактів, Афіни, Греція</li>
            </ul>
          </div>

          <div className="bg-transparent">
            <h2 className="text-3xl font-bold mb-4">Історична значущість</h2>
            <p className="leading-relaxed text-lg">
              Цей артефакт датується часами розквіту класичної епохи Давньої Греції, відомої своїми досягненнями в мистецтві, філософії та архітектурі.
            </p>
          </div>


          <div className="bg-transparent">
            <h2 className="text-3xl font-bold mb-4">Процес реставрації</h2>
            <p className="leading-relaxed text-lg">
              Реставраційні роботи почалися на початку ХХ століття, і завдяки зусиллям експертів вдалося відновити артефакт до початкового вигляду.
            </p>
          </div>
        </div>
      </div>

      {/* Хронологія подій */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Хронологія подій</h2>

        {/* Карусель для горизонтального скролу */}
        <Carousel>
          <CarouselContent className="flex space-x-8">
            <Card className="w-80 bg-transparent text-white shadow-none">
              <CardHeader>
                <h3 className="text-xl font-semibold">1750 р. до н.е.</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Створений у класичний період Давньої Греції</p>
              </CardContent>
            </Card>
            <Card className="w-80 bg-transparent text-white shadow-none">
              <CardHeader>
                <h3 className="text-xl font-semibold">1905 р.</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Викопаний археологами з храмового комплексу</p>
              </CardContent>
            </Card>
            <Card className="w-80 bg-transparent text-white shadow-none">
              <CardHeader>
                <h3 className="text-xl font-semibold">1920-1930 рр.</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Пройшов детальну реставрацію</p>
              </CardContent>
            </Card>
            <Card className="w-80 bg-transparent text-white shadow-none">
              <CardHeader>
                <h3 className="text-xl font-semibold">1920-1930 рр.</h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Пройшов детальну реставрацію</p>
              </CardContent>
            </Card>

          </CarouselContent>
        </Carousel>
      </div>

      <footer className="mt-12 border-t pt-6 text-gray-300">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Назва музею. Всі права захищені.</p>
          <nav>
            <Button variant="link" className="mr-4 hover:text-pink-600">
              Повернутися до музею
            </Button>
            <Button variant="link" className="text-pink-500 hover:text-pink-600">
              Зв'язатися з нами
            </Button>
          </nav>
        </div>
      </footer>
    </div>
  );

};

export default Exhibit;

