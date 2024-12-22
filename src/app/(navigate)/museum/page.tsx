import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Museum } from '../../../../Data'

export default function page() {
	const MuseumHeader: React.FC<{ museum: Museum }> = ({ museum }) => (
		<div className="pt-6 gap-6 flex flex-wrap text-white rounded-lg mb-20">
			<div className="w-full p-8  rounded-lg  bg-[--mainColor] text-center space-y-6">
				<h1 className="text-6xl font-extrabold mb-4 text-clip bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text">
					{museum.name}
				</h1>
				<p className="text-xl font-semibold italic opacity-85">{museum.mission}</p>
				<p className="text-md opacity-80">{museum.history}</p>
			</div>

			<div className="mx-auto p-8  rounded-lg  bg-[--mainColor]">
				<p className="text-lg text-justify text-gray-300 opacity-90 leading-relaxed">
					Музей історії університету створено у 1977 р. постановою Івано-Франківського державного педагогічного інституту ім. Василя Стефаника, обласного управлінням освіти та обласного комітету профспілки працівників освіти. Ініціатива належала тодішньому керівництву інституту на чолі з О. Устенком та кандидату історичних наук, доцентові кафедри історії Я. Мельничуку. Значну роботу в організації музею та налагоджені його діяльності здійснили Я. Мельничук та перший директор кандидат історичних наук, доцент Б. Гаврилів. Урочистості з нагоди презентації музею відбулися 16 травня 1980 р. 30 грудня 1982 р. музею присвоєно звання «народний».
					В експозиції та фондах музею відкладено пам’ятки історії Прикарпатського університету з часу створення до сучасності. Збереглися цінні експонати: дипломи випускників і викладачів, документи й особисті речі, збірники наукових праць, нагороди колективів художньої самодіяльності та спортивних команд, твори живопису, скульптури, фотографії та інші предмети.
					Окрема група матеріалів стосується історії шкільництва на Прикарпатті. Значна їх частина є оригінальними, а деякі – унікальними. Основний фонд налічує понад 3 тис експонатів.
					Музей співпрацює з навчальними підрозділами університету, викладачі та студенти університету й коледжу мають змогу використовувати матеріали для підготовки кваліфікаційних робіт, наукових статей і монографій з питань становлення освіти краю. Бібліотека музею представлена зібранням унікальної шкільної документації, підручниками, педагогічною і методичною літературою ХІХ – ХХ ст.
					Музей надає допомогу у створені громадських і шкільних музеїв, веде широку пошукову, науково-дослідницьку та популяризаторську роботу, працівники проводять екскурсії, організовують тематичні виставки.
				</p>
			</div>
		</div>
	)

	return (
		<div>
			<Header />
			<MuseumHeader museum={Museum} />
			<Footer />
		</div>
	)
}
