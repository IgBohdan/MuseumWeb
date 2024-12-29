"use client";
import { useState } from "react";
import DataCard from "@/components/cards/category/CategoryCard";
import Header from "@/components/header/Header";
import Counter from "@/components/counter/Counter";
import Footer from "@/components/footer/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { listOfNews } from "@/services/EmployeeService";

interface Props {}

async function getAllNews() {
  try {
    const response = await listOfNews();
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const About = () => {
  const museumImages = [
    "https://media.slovoidilo.ua/media/publications/5/43457/43457-1_large.jpg",
    "https://media.slovoidilo.ua/media/publications/5/43457/43457-2_large.jpg",
    "https://f.kyivmaps.com/article/326/VMz5c.jpg",
    "https://media.slovoidilo.ua/media/publications/5/43457/43457-1_large.jpg",
    "https://f.kyivmaps.com/article/326/VMz5c.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < museumImages.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div>
      <Header />

      <div className="mt-[1em] mb-[1em]">
        <div className="flex gap-3 w-full">
          <div className="flex w-[20em] p-8 bg-[--mainColor] rounded-xl">
            <img
              className="flex justify-center w-full h-full rounded-[50%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY26dZSfpwf2RTmy7dlsGLugdUVJtRFNqoOA&s"
              alt=""
            />
          </div>
          <div className="w-full p-8 bg-[--mainColor] rounded-xl">
            <h1 className="font-bold text-4xl text-center">
              Музей Прикарпатського національного університету імені Василя
              Стефаника
            </h1>
            <h3 className="mt-[1em] text-lg">
              Ласкаво просимо до нашого музею! Заснований у 2024 році, ми
              прагнемо зберігати та демонструвати багатство історії та культури
              нашого регіону. Наші експонати охоплюють різні періоди та стилі, з
              акцентом на як історичні артефакти, так і на сучасні твори
              мистецтва, що відображають дух інновацій та традицій.
            </h3>
          </div>
        </div>
      </div>

      <div className="mb-[1em] p-8 bg-[--mainColor] rounded-xl">
        <h1 className="font-bold text-4xl text-center">Про музей</h1>
        <h3 className="mt-[1em] text-lg">
          Музей Прикарпатського національного університету імені Василя
          Стефаника — це місце, де історія оживає, а культура відкриває свої
          багатогранні обличчя. Наш музей розташований у серці університету й
          створений з метою збереження, дослідження та популяризації культурної
          спадщини регіону та університетської спільноти. Музей ПНУ — це не лише
          збереження минулого, а й натхнення для сучасності. Ми проводимо
          освітні заходи, тематичні виставки та майстер-класи, які допомагають
          розвивати зв'язок між поколіннями й усвідомлювати нашу культурну
          унікальність.
        </h3>
      </div>

      <div className="mb-[1em] p-8 bg-[--mainColor] rounded-xl">
        <h1 className="font-bold text-4xl text-center">Інтер'єр музею</h1>
        <h3 className="mt-[1em] text-lg">
          Інтер'єр музею поєднує сучасну та класичну архітектуру, створюючи
          спокійну атмосферу для відвідувачів, щоб насолоджуватися мистецтвом і
          історією.
        </h3>
        <div className="mt-[1em] relative overflow-hidden">
          <button
            className="absolute ml-[2em] top-1/2 transform -translate-y-1/2 bg-[--mainColor] p-2 rounded-full z-10"
            onClick={handlePrevious}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-[--buttonColor]"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 12H19M5 12L11 6M5 12L11 18"
                  stroke-width="1.9200000000000004"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <div
            className="flex gap-3 h-[45vh] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {museumImages.map((src, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 rounded-xl overflow-hidden"
              >
                <img
                  className="w-full h-full object-fill"
                  src={src}
                  alt={`Музей ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="absolute mr-[2em] right-0 top-1/2 transform -translate-y-1/2 bg-[--mainColor] p-2 rounded-full z-10"
            onClick={handleNext}
          >
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current text-[--buttonColor]"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke-width="1.9200000000000004"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-[1em] p-8 bg-[--mainColor] rounded-xl">
        <h3 className="text-xl text-center">
          Ми завжди раді бачити вас у нашому музеї! Для отримання додаткової
          інформації, будь ласка, зв'яжіться з нами за вказаними контактами.
        </h3>
      </div>

      <Counter />
      <div className="py-1">
        <Footer />
      </div>
    </div>
  );
};

export default About;
