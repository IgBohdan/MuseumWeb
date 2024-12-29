'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './category.module.css';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function DataCard({ name, description, img, className }: { className?: string, name?: string, description?: string, img: string }) {
  return (
    <section
      className={cn(
        `flex-none w-full  bg-[--mainColor] rounded-[1rem] relative transform transition-all duration-300 hover:text-white hover:bg-[--hoverColor] hover:scale-95`,
        className || "flex-[20em]",
      )}>
      <Link href={`/categories/123`} className='flex flex-col h-full p-3'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className=" h-[13em] flex justify-center items-center">
          <Image src={img} alt={name||img} width={1000} height={1000} className="w-full h-full object-cover rounded-xl" />
        </motion.div>
        {name || description &&

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-lg overflow-hidden pl-2">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-400 clamp-3">{description} експонатів</p>
          </motion.div>
        }
      </Link>
    </section>
  )
}