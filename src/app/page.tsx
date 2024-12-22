'use client'
import { Category } from '@/components/category/category'
import Exponats from '@/components/exponat/Exponats'
import { useState } from 'react'
import { Museum } from '../../Data'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import News from "../components/news/News"
export default function Home() {
  const [dataMuseum, setDatamuseum] = useState(Museum.collections)
  const [newsMuseum, setNewsmuseum] = useState(Museum.news)



  return (
    <div className='h-full gap-8 flex flex-col'>
      <Header />
      <Category />
      <div className='bg-[--mainColor] p-4 rounded-[1rem] w-full flex flex-wrap gap-4'>
        <h2 className='w-full text-3xl py-2 px-2'>Останні експонати</h2>
        <Exponats dataMuseum={dataMuseum} />
        <button className='wButton m-auto'>Дивитись більше</button>
      </div>
      <News data={newsMuseum} />
      <Footer />
    </div>
  )
}