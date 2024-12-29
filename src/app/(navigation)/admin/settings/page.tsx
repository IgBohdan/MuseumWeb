"use client";

import Categoryes from "@/components/lists/category/Categoryes";
import { listOfNews } from "@/services/EmployeeService";
import { useEffect, useState } from "react";

const Settings = () => {
  const [title, setTitle] = useState("Музей ПНУ");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos harum odio, nostrum pariatur natus adipisci. Qui tenetur autem sit natus debitis aut, est molestiae excepturi rem magnam saepe ipsam?"
  );
  const [contactNumber, setContactNumber] = useState("+380873756758");
  const [email, setEmail] = useState("museumpnu777@pnu.edu.ua");
  const [address, setAddress] = useState("вул. Шевченка 63");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await listOfNews();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLatestNews();
  }, []);

  const handleSave = async () => {
    try {
      const payload = {
        title,
        description,
        contactNumber,
        email,
        address,
      };

      const response = await fetch("http://localhost:3009/api/tempory-post", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert("Зміни успішно збережено!");
      } else {
        alert("Сталася помилка при збереженні.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Неможливо зберегти дані.");
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("photo", file);

      try {
        const response = await fetch("http://localhost:3009/api/upload-photo", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          alert("Фото успішно завантажено!");
        } else {
          alert("Помилка при завантаженні фото.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Неможливо завантажити фото.");
      }
    }
  };

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
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-8">Налаштування</h1>
      <div className="bg-gray-600/25 p-6 rounded-lg shadow-md space-y-6">
        <div className="flex">
          <div className="flex flex-col items-center">
            <img
              className="w-[10em] h-[10em] mt-[1em] rounded-[50%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY26dZSfpwf2RTmy7dlsGLugdUVJtRFNqoOA&s"
              alt="Museum Logo"
            />
            <input
              className="mt-[1.5em] wButton"
              type="file"
              accept="image/*"
              id="photo-upload"
              onChange={handleFileUpload}
            />
          </div>
          <div className="flex flex-col gap-y-[0.5em] px-12 w-[35em]">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-200">
                Заголовок музею
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 px-4 rounded-lg bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-200">
                Контактна інформація
              </label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full p-3 px-4 rounded-lg bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-200">
                Електронна скринька
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 px-4 rounded-lg bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-semibold text-gray-200">
            Опис музею
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 px-4 rounded-lg bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="4"
          />
        </div>
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
        <div className="flex gap-3">
          <input className="wButton" type="file" />
          <button className="p-3 rounded-sm bg-red-600 transition-all duration-300 ease-in-out hover:bg-red-700">
            Видалити
          </button>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-200">Адреса</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 px-4 rounded-lg bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button onClick={handleSave} className="wButton">
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default Settings;
