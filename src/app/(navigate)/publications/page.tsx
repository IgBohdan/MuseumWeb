import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import News from '@/components/news/News'
import { Museum } from '../../../../Data'
const Publications = () => {
	return (
		<>
			<Header />
			<div className='my-4'>
				<News data={Museum.news} />
			</div>
			<Footer />
		</>
	)
}

export default Publications