'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Search, Edit, Trash2 } from 'lucide-react'

export default function AdminNews() {
  const router = useRouter()
  const [exhibits, setExhibits] = useState([
    { id: 1, title: 'Єгипетська мумія', category: 'Стародавній світ', date: '2000 до н.е.' },
    { id: 2, title: 'Картина "Зоряна ніч"', category: 'Мистецтво', date: '1889' },
    { id: 3, title: 'Динозавр Тиранозавр', category: 'Палеонтологія', date: '68-66 млн років тому' },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredExhibits = exhibits.filter(exhibit => 
    exhibit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exhibit.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const deleteExhibit = (id: number) => {
    // Тут буде логіка для видалення новина через API
    setExhibits(exhibits.filter(exhibit => exhibit.id !== id))
  }

  return (
    <div className='text-black'>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Управління новинами</h1>
        <button 
          onClick={() => router.push('/admin/exhibits/new')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors"
        >
          <Plus className="mr-2" /> Додати новину
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Пошук новинаів..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Назва</th>
              <th className="p-2 text-left">Категорія</th>
              <th className="p-2 text-left">Дата</th>
              <th className="p-2 text-left">Дії</th>
            </tr>
          </thead>
          <tbody>
            {filteredExhibits.map((exhibit) => (
              <tr key={exhibit.id} className="border-b">
                <td className="p-2">{exhibit.title}</td>
                <td className="p-2">{exhibit.category}</td>
                <td className="p-2">{exhibit.date}</td>
                <td className="p-2">
                  <button 
                    onClick={() => router.push(`/admin/exhibits/${exhibit.id}`)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <Edit className="inline mr-1" size={18} /> Редагувати
                  </button>
                  <button 
                    onClick={() => deleteExhibit(exhibit.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="inline mr-1" size={18} /> Видалити
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

