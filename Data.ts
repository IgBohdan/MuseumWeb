// Тип для інформації про музей
interface Museum {
	id: string // Унікальний ідентифікатор музею
	name: string // Назва музею
	history: string // Історія музею
	mission: string // Місія музею
	achievements: string[] // Досягнення музею
	collections: Collection[] // Колекції музею
	team: TeamMember[] // Команда музею
	exhibitions: Exhibition[] // Виставки
	contacts: ContactInfo // Контактна інформація
	publications: Publication[] // Публікації музею
	news: MuseumNews[] // Новини музею
	virtualTours?: VirtualTour[] // Віртуальні тури (якщо є)
}

// Тип для команди музею
interface TeamMember {
	id: string // Унікальний ідентифікатор члена команди
	name: string // Ім'я члена команди
	role: string // Посада
	bio: string // Біографія
	photo: string // Фото
	socialLinks?: SocialLink[] // Соціальні мережі члена команди
	contactInfo?: ContactInfo // Контактна інформація
}

// Тип для колекцій музею
export interface Collection {
	id: string // Унікальний ідентифікатор колекції
	name: string // Назва колекції
	description: string // Опис колекції
	items: Artifact[] // Артефакти в колекції
	curatedBy: string // Куратор колекції
	createdDate: string // Дата створення колекції
}

// Тип для артефактів (експонатів) в колекції
export interface Artifact {
	id: string // Унікальний ідентифікатор експонату
	name: string // Назва експонату
	description: string // Опис експонату
	origin: string // Місце походження
	age: number // Вік експонату
	photo: string // Фото експонату
	owner?: string // Власник (не обов'язково)
	details: ArtifactDetail // Деталі експонату
	history?: string // Історія експонату
	relatedExhibitions: Exhibition[] // Виставки, в яких експонат брав участь
	isOnDisplay: boolean // Чи виставляється експонат зараз
}

// Тип для додаткових деталей експонату
interface ArtifactDetail {
	morePhotos: string[] // Додаткові фото
	moreDescription: string // Розширений опис
	provenance: string // Походження та історія володіння
	restorationInfo?: string // Інформація про реставрацію
}

// Тип для виставки
interface Exhibition {
	id: string // Унікальний ідентифікатор виставки
	name: string // Назва виставки
	description: string // Опис виставки
	startDate: string // Дата початку виставки
	endDate: string // Дата завершення виставки
	location: string // Місце проведення виставки
	artifacts: Artifact[] // Список експонатів на виставці
	isVirtual?: boolean // Чи є виставка віртуальною
	relatedNews?: MuseumNews[] // Новини, пов'язані з виставкою
	curators: TeamMember[] // Куратори виставки
	galleryInfo?: string // Додаткові деталі про галерею або зал
}

// Тип для поточних виставок
interface CurrentExhibition extends Exhibition {
	isOngoing: boolean // Чи триває виставка на поточний момент
}

// Тип для майбутніх виставок
interface UpcomingExhibition extends Exhibition {
	isUpcoming: boolean // Чи є виставка майбутньою
}

// Тип для архіву виставок
interface PastExhibition extends Exhibition {
	isArchived: boolean // Чи є виставка в архіві
}

// Тип для новини музею
export interface MuseumNews {
	id: string // Унікальний ідентифікатор новини
	title: string // Заголовок новини
	content: string // Текст новини
	date: string // Дата публікації
	relatedExhibitions?: Exhibition[] // Виставки, з якими пов'язана новина
}

// Тип для публікацій музею
interface Publication {
	id: string // Унікальний ідентифікатор публікації
	title: string // Заголовок публікації
	description: string // Опис публікації
	link: string // Посилання на публікацію
	date: string // Дата публікації
	author: string // Автор публікації
	content: string // Текст публікації
}

// Тип для контактної інформації
interface ContactInfo {
	address: string // Адреса музею
	phone: string // Телефон музею
	email: string // Email музею
	workingHours: string // Години роботи музею
	socialLinks: SocialLink[] // Посилання на соціальні мережі музею
}

// Тип для соціальних мереж
interface SocialLink {
	platform: string // Назва платформи (наприклад, Facebook, Instagram)
	url: string // Посилання на профіль
}

// Тип для віртуальних турів музею
interface VirtualTour {
	id: string // Унікальний ідентифікатор віртуального туру
	name: string // Назва туру
	description: string // Опис туру
	startDate: string // Дата початку доступності туру
	endDate: string // Дата завершення доступності туру
	link: string // Посилання на віртуальний тур
	isLive: boolean // Чи є тур доступним в режимі реального часу
}

// Тип для картини
interface Painting {
	id: string // Унікальний ідентифікатор картини
	name: string // Назва картини
	artist: string // Автор картини
	year: number // Рік написання
	description: string // Опис картини
	origin: string // Місце походження
	owner?: string // Власник картини
	photo: string // Фото картини
	history?: string // Історія картини
	provenance?: string // Походження (історія володіння)
	exhibitionHistory: Exhibition[] // Історія виставок, де була ця картина
	restorationInfo?: string // Інформація про реставрацію
}

const news = [
	{
		id: "1",
		title: "Відкриття нової виставки",
		content: "Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва",
		date: "2024-10-15",
		relatedExhibitions: []
	},
	{
		id: "1",
		title: "Відкриття нової виставки",
		content: "Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва",
		date: "2024-10-15",
		relatedExhibitions: []
	},
	{
		id: "1",
		title: "Відкриття нової виставки",
		content: "Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва",
		date: "2024-10-15",
		relatedExhibitions: []
	},
	{
		id: "1",
		title: "Відкриття нової виставки",
		content: "Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва Музей відкриває нову виставку сучасного мистецтва",
		date: "2024-10-15",
		relatedExhibitions: []
	}
]
const exhibitions = [
	{
		id: "1",
		name: "Виставка сучасного мистецтва",
		description: "Колекція робіт сучасних художників...",
		startDate: "2024-11-01",
		endDate: "2024-12-01",
		location: "Зал 1",
		artifacts: [],
		isVirtual: true,
		relatedNews: [],
		curators: [],
		galleryInfo: "Зал 1 спеціалізується на сучасному мистецтві."
	},
	{
		id: "1",
		name: "Виставка сучасного мистецтва",
		description: "Колекція робіт сучасних художників...",
		startDate: "2024-11-01",
		endDate: "2024-12-01",
		location: "Зал 1",
		artifacts: [],
		isVirtual: true,
		relatedNews: [],
		curators: [],
		galleryInfo: "Зал 1 спеціалізується на сучасному мистецтві."
	},
	{
		id: "1",
		name: "Виставка сучасного мистецтва",
		description: "Колекція робіт сучасних художників...",
		startDate: "2024-11-01",
		endDate: "2024-12-01",
		location: "Зал 1",
		artifacts: [],
		isVirtual: true,
		relatedNews: [],
		curators: [],
		galleryInfo: "Зал 1 спеціалізується на сучасному мистецтві."
	},
	{
		id: "1",
		name: "Виставка сучасного мистецтва",
		description: "Колекція робіт сучасних художників...",
		startDate: "2024-11-01",
		endDate: "2024-12-01",
		location: "Зал 1",
		artifacts: [],
		isVirtual: true,
		relatedNews: [],
		curators: [],
		galleryInfo: "Зал 1 спеціалізується на сучасному мистецтві."
	},
]
const publications = [
	{
		id: "1",
		title: "Історія музею",
		description: "Документальна публікація про заснування і розвиток музею.",
		link: "/publications/history-of-museum",
		date: "2024-10-01",
		author: "Олександр Петров",
		content: "Текст публікації..."
	},
	{
		id: "1",
		title: "Історія музею",
		description: "Документальна публікація про заснування і розвиток музею.",
		link: "/publications/history-of-museum",
		date: "2024-10-01",
		author: "Олександр Петров",
		content: "Текст публікації..."
	},
	{
		id: "1",
		title: "Історія музею",
		description: "Документальна публікація про заснування і розвиток музею.",
		link: "/publications/history-of-museum",
		date: "2024-10-01",
		author: "Олександр Петров",
		content: "Текст публікації..."
	},
	{
		id: "1",
		title: "Історія музею",
		description: "Документальна публікація про заснування і розвиток музею.",
		link: "/publications/history-of-museum",
		date: "2024-10-01",
		author: "Олександр Петров",
		content: "Текст публікації..."
	}
]





const exponat = {
	id: 1,  // Use a number for the ID (IDs are usually integers)
	name: "Картина \"Вечірня сцена\"", // A more detailed name (for example, "Evening Scene")
	description: "Картина, яка зображує вечірній пейзаж з ландшафтами Італії. Створена в стилі бароко. Картина, яка зображує вечірній пейзаж з ландшафтами Італії. Створена в стилі бароко.",
	origin: "Італія",
	age: 350,  // The age could reflect the year of creation (e.g., 350 years ago)
	photo: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070', // A general image
	owner: "Музей сучасного мистецтва", // More specific museum name
	details: {
		morePhotos: [
			'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070', // Realistic path to photos
			'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070'
		],
		moreDescription: "Ця картина була створена в період бароко художником, чия особа залишалася невідомою до нещодавнього часу. Вона зображає типові для того часу пейзажі.",
		provenance: "Зібрана в музеї в 1950 році. Багато років перебувала в колекціях приватних осіб до того, як потрапила до музею.",
	},
	isOnDisplay: true,  // The artifact is on display
	relatedExhibitions: [
		"Бароко: Мистецтво Італії",  // Example exhibition name
		"Мистецтво та природа в старовинних картинах" // Another related exhibition
	],
}


const items = [
	exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat, exponat
]

export const Museum: Museum = {
	id: "1",
	name: "Музей мистецтв",
	history: "Музей був заснований в 1800 році і є одним з найбільших культурних закладів, що зберігає та експонує унікальні колекції мистецтва різних епох.",
	mission: "Наша місія — зберігати та презентувати мистецтво різних епох та культур, а також сприяти розвитку культурної освіти та історичної пам'яті через наукову діяльність.",
	achievements: [
		"Визнаний кращим музеєм року",
		"Проведено понад 200 виставок сучасного мистецтва",
		"Нагороджений за збереження культурної спадщини",
		"Музей має понад 300 000 експонатів"
	],
	collections: [
		{
			id: "1",
			name: "Колекція живопису",
			description: "Зібрання картин від класичних до сучасних художників.",
			curatedBy: "Іван Іванов",
			createdDate: "1800-01-01",
			items: [
	
					exponat
						
		
			]
		}
	],
	team: [
		{
			id: "1",
			name: "Іван Іванов",
			role: "Куратор",
			bio: "Куратор із понад 20-річним досвідом роботи в музеї.",
			photo: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
			socialLinks: [
				{ platform: "LinkedIn", url: "https://linkedin.com/ivan-ivanov" },
				{ platform: "Instagram", url: "https://instagram.com/ivan_ivanov" }
			],
			contactInfo: {
				address: "м. Київ, вул. Хрещатик, 1",
				phone: "+380 44 123 4567",
				email: "ivan.ivanov@museum.com",
				workingHours: "Пн-Пт: 10:00-18:00, Сб-Нд: 12:00-19:00",
				socialLinks: []
			}
		},
		{
			id: "1",
			name: "Іван Іванов",
			role: "Куратор",
			bio: "Куратор із понад 20-річним досвідом роботи в музеї.",
			photo: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
			socialLinks: [
				{ platform: "LinkedIn", url: "https://linkedin.com/ivan-ivanov" },
				{ platform: "Instagram", url: "https://instagram.com/ivan_ivanov" }
			],
			contactInfo: {
				address: "м. Київ, вул. Хрещатик, 1",
				phone: "+380 44 123 4567",
				email: "ivan.ivanov@museum.com",
				workingHours: "Пн-Пт: 10:00-18:00, Сб-Нд: 12:00-19:00",
				socialLinks: []
			}
		},
		{
			id: "1",
			name: "Іван Іванов",
			role: "Куратор",
			bio: "Куратор із понад 20-річним досвідом роботи в музеї.",
			photo: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
			socialLinks: [
				{ platform: "LinkedIn", url: "https://linkedin.com/ivan-ivanov" },
				{ platform: "Instagram", url: "https://instagram.com/ivan_ivanov" }
			],
			contactInfo: {
				address: "м. Київ, вул. Хрещатик, 1",
				phone: "+380 44 123 4567",
				email: "ivan.ivanov@museum.com",
				workingHours: "Пн-Пт: 10:00-18:00, Сб-Нд: 12:00-19:00",
				socialLinks: []
			}
		},
		{
			id: "1",
			name: "Іван Іванов",
			role: "Куратор",
			bio: "Куратор із понад 20-річним досвідом роботи в музеї.",
			photo: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
			socialLinks: [
				{ platform: "LinkedIn", url: "https://linkedin.com/ivan-ivanov" },
				{ platform: "Instagram", url: "https://instagram.com/ivan_ivanov" }
			],
			contactInfo: {
				address: "м. Київ, вул. Хрещатик, 1",
				phone: "+380 44 123 4567",
				email: "ivan.ivanov@museum.com",
				workingHours: "Пн-Пт: 10:00-18:00, Сб-Нд: 12:00-19:00",
				socialLinks: []
			}
		}
	],
	contacts: {
		address: "м. Київ, вул. Музейна, 10",
		phone: "+380 44 987 6543",
		email: "info@museum.com",
		workingHours: "Пн-Пт: 09:00-17:00, Сб-Нд: вихідні",
		socialLinks: [
			{ platform: "Facebook", url: "https://facebook.com/museum" },
			{ platform: "Instagram", url: "https://instagram.com/museum" },
			{ platform: "Facebook", url: "https://facebook.com/museum" },
			{ platform: "Instagram", url: "https://instagram.com/museum" },
			{ platform: "Facebook", url: "https://facebook.com/museum" },
			{ platform: "Instagram", url: "https://instagram.com/museum" },

		]
	},
	publications,
	exhibitions,
	news
}
