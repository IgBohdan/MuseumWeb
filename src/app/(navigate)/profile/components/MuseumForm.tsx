import useLocalStorage from '@/hooks/useLocalStorage'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

const MuseumForm = ({ museumId, initialData }) => {
  const [museum, setMuseum, removeMuseum] = useLocalStorage('museum', null)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData
  })
  const onSubmit = async (data) => {
    try {
      if (museumId) {
        // Оновлення музею
        await axios.put(`http://localhost:4000/api/museum/${museumId}`, data)
        // Оновлюємо музей в локальному сховищі
        setMuseum({ ...data, id: museumId })
      } else {
        // Додавання нового музею
        const response = await axios.post('http://localhost:4000/api/museum', data)
        if (response.status === 201) {
          // Оновлюємо музей в локальному сховищі
          setMuseum(response.data)
        }
      }
      reset()
    } catch (error) {
      console.error('Помилка при відправленні даних:', error)
    }
  }

  const submitForm = async (data) => {
    try {
      let response

      if (museumId) {
        // Оновлення музею
        response = await axios.put(`http://localhost:4000/api/museum/${museumId}`, data)
        if (response.status === 200) {
          // Оновлюємо музей в локальному сховищі
          const updatedMuseum = { ...data, id: response.data.museumId }
          setMuseum(updatedMuseum) // Використовуємо дані з відповіді сервера
        } else {
          throw new Error('Не вдалося оновити музей')
        }
      } else {
        // Додавання нового музею
        response = await axios.post('http://localhost:4000/api/museum', data)
        if (response.status === 201) {
          // Зберігаємо нові дані в локальному сховищі
          const updatedMuseum = { ...data, id: response.data.museumId }

          setMuseum(updatedMuseum) // Використовуємо дані з відповіді сервера
        } else {
          throw new Error('Не вдалося додати музей')
        }
      }

      onSubmit() // після успішної операції очищаємо форму
      reset() // очищаємо форму

    } catch (error) {
      console.error('Error while submitting form:', error.message || error)
    }
  }
  const inputstyle = "w-full p-3 mt-2 border bg-transparent border-none rounded-lg focus:ring-0 focus:outline-1 focus:ring-blue-500"

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-wrap content-center items-center gap-4 h-auto w-full"
    >
      <div className='flex-auto'>
        <label className="block text-sm font-semibold text-gray-700">Назва музею</label>
        <input
          type="text"
          {...register('name')}
          className={inputstyle}
        />
      </div>

      <div className='flex-auto'>
        <label className="block text-sm font-semibold text-gray-700">Історія</label>
        <input
          {...register('history')}
          className={inputstyle}
        />
      </div>

      <div className='flex-auto'>
        <label className="block text-sm font-semibold text-gray-700">Місія</label>
        <input
          {...register('mission')}
          className={inputstyle}
        />
      </div>

      <div className='flex-auto'>
        <label className="block text-sm font-semibold text-gray-700">Досягнення</label>
        <input
          {...register('achievements')}
          className={inputstyle}
        />
      </div>

      <div className='flex-auto'>
        <label className="block text-sm font-semibold text-gray-700">Колекції</label>
        <input
          {...register('collections')}
          className={inputstyle}
        />
      </div>

      <div className='flex-auto'>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          type="submit"
          className="w-auto py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          {museumId ? 'Оновити музей' : 'Додати музей'}
        </motion.button>
      </div>
    </motion.form>
  )
}

export default MuseumForm
