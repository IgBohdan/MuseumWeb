'use client'
// import { useState } from 'react'
import Header from './components/header/Header'
import ParallaxList from './components/paralax/Paralax'
export default function Home() {
  return (
    <div className='h-full'>
      <Header />
      {/* <button className={buttonStyle} onClick={() => setNumber(number + 100)}>Click</button>

      <button className={buttonStyle} onClick={buttonClick}>Click</button>

      <GalleryCarusel data={number} />
      <GalleryIteam data={number} /> */}

      <ParallaxList />
    </div>
  )
}