const Counter = () => {
  return (
    <>
      <div className="flex justify-center gap-7">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-[15em] h-[15em] rounded-[50%] bg-[--mainColor]">
            <h2 className="font-bold text-[--buttonColor] text-[5em]">57</h2>
          </div>
          <div>
            <h3 className="px-6 py-4 font-bold text-2xl text-[--buttonColor]">
              Колекцій
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-[15em] h-[15em] rounded-[50%] bg-[--mainColor]">
            <h2 className="font-bold text-[--buttonColor] text-[5em]">1257</h2>
          </div>
          <div>
            <h3 className="px-6 py-4 font-bold text-2xl text-[--buttonColor]">
              Відвідувачів
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-[15em] h-[15em] rounded-[50%] bg-[--mainColor]">
            <h2 className="font-bold text-[--buttonColor] text-[5em]">327</h2>
          </div>
          <div>
            <h3 className="px-6 py-4 font-bold text-2xl text-[--buttonColor]">
              Експонатів
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
