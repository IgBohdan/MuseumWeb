const Footer = () => {
  return (
    <>
      <footer className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-6 p-8 w-[100%] relative h-auto rounded-xl bg-[--mainColor]">
          <div className="flex items-center gap-3">
            <h1 className="relative text-[2em] font-bold">Музей ПНУ</h1>
            <img
              className="relative w-[10em] h-[10em] bg-red-900 rounded-[50%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY26dZSfpwf2RTmy7dlsGLugdUVJtRFNqoOA&s"
              alt="Museum image"
            />
          </div>
          <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="relative text-[1.5em] mr-auto">Пошук по сайту</h1>
            <div className="relative flex gap-2">
              <input
                className="mt-[0.5em] w-[25em] bg-[--mainColor] rounded-[50px] border-[0.2em] border-[--textColor2] outline-none py-3 px-6"
                type="text"
                placeholder="Введіть запит"
              />
              <button className="wButton">Шукати</button>
            </div>
          </div>
          <div className="flex flex-col justify-center ml-auto">
            <h2 className="text-2xl font-semibold mt-6">
              Контактна інформація
            </h2>
            <p className="text-lm mb-4">
              <strong>Адреса:</strong> вул. Центральна, 10, м. Київ, Україна
              <br />
              <strong>Телефон:</strong> +380 (44) 123-45-67
              <br />
              <strong>Email:</strong> info@museum.ua
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
