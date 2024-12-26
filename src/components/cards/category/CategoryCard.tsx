'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './category.module.css';
import Image from 'next/image';


export default function CategoryCard({data }: {data:dataType}) {
  
  const{ name='', number='',img}=data;
  return (
    // <Link href={`/categories/${id}`} className="block">
    //   <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    //     <h3 className="text-xl font-semibold mb-2">{name}</h3>
    //     <p className="text-gray-600">{exhibitCount} експонатів</p>
    //   </div>
    // </Link>
    <section
      className={`${styles.shadow_3d_card} flex-none w-full bg-[--mainColor] rounded-[1rem] relative`}>
      <Link href={`/categories/123`} className='flex flex-col h-full p-3'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=" h-[13em] flex justify-center items-center">
                <Image src={img} alt={name} width={300} height={200} className="w-full h-full object-cover rounded-xl" />
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-lg overflow-hidden">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600">{number} експонатів</p>
        </motion.div>
      </Link>
    </section>
  )
}

