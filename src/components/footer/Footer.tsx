const Footer = () => {
    return (
        <>
            <footer className='flex justify-center mb-8'>
                <div className='flex flex-wrap gap-6 p-8 w-[98%] relative h-auto rounded-xl bg-[--mainColor] justify-center'>
                    <div className='flex flex-wrap w-auto mr-auto items-center gap-3'>
                        <h1 className='relative text-[2em] font-bold'>Музей ПНУ</h1>
                        <img className='relative w-[10em] h-[10em] bg-red-900 rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY26dZSfpwf2RTmy7dlsGLugdUVJtRFNqoOA&s" alt="Museum image"/>
                      
                    </div>
                    <div className="flex flex-[42em] w-auto flex-wrap gap-6 items-center">
                    <h1 className='relative flex-1 h-ma  text-[1.5em]'>Пошук по сайту</h1>
                        <div className='relative flex-auto w-auto flex h-[3.5em] gap-2'>
                            <input className='bg-[--mainColor] max-w-[30em] rounded-[50px] w-full border-[0.2em] border-[--textColor2] outline-none p-6' type="text" placeholder='Введіть запит' />
                            <button className="wButton">Шукати</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;