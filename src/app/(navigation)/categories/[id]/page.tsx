import Image from 'next/image'
import Link from 'next/link'

async function getCategory(id: string) {
    const categories = [
        { id: '1', name: 'Стародавній світ' },
        { id: '2', name: 'Мистецтво' },
        { id: '3', name: 'Архітектура' },
        { id: '4', name: 'Історія' },
        { id: '5', name: 'Природа' },
        { id: '6', name: 'Культура' },
        { id: '7', name: 'Технології' },
        { id: '8', name: 'Музика' },
        { id: '9', name: 'Література' },
        { id: '10', name: 'Медицина' },
        { id: '11', name: 'Військова історія' },
        { id: '12', name: 'Філософія' },
        { id: '13', name: 'Релігія' },
        { id: '14', name: 'Спорт' },
        { id: '15', name: 'Кіно' },
    ]
    return categories.find((category) => category.id === id) || { id, name: 'Невідома категорія' }
}

async function getCategoryExhibits(id: string) {
    return [
        { id: 1, title: 'Єгипетська мумія', description: 'Єгипетська мумія з часів фараонів.' },
        { id: 2, title: 'Грецька амфора', description: 'Грецька амфора зі Стародавнього Грецького періоду.' },
        { id: 3, title: 'Римський меч', description: 'Римський меч часів імперії.' },
        { id: 4, title: 'Скульптура Афродіти', description: 'Класична скульптура грецької богині любові.' },
        { id: 5, title: 'Фреска Помпеї', description: 'Фреска, що зображає сцену з життя в Помпеях.' },
        { id: 6, title: 'Вавилонська табличка', description: 'Древня вавилонська глиняна табличка з писемністю.' },
        { id: 7, title: 'Ритуальний інструмент', description: 'Древній інструмент для ритуальних церемоній.' },
        { id: 8, title: 'Стародавні монети', description: 'Колекція монет з різних країн і періодів.' },
        { id: 9, title: 'Теракотові статуї', description: 'Теракотові статуї китайської династії Цін.' },
        { id: 10, title: 'Маска ацтеків', description: 'Маска ацтекського періоду для ритуалів.' },
        { id: 11, title: 'Фараонська корона', description: 'Золотий головний убір фараона.' },
        { id: 12, title: 'Вікінгський щит', description: 'Щит вікінгів із заліза та дерева.' },
        { id: 13, title: 'Стародавній компас', description: 'Перша модель компасу для навігації.' },
        { id: 14, title: 'Мозаїка Помпеї', description: 'Мозаїка з Помпеї, що зображає битви гладіаторів.' },
        { id: 15, title: 'Індійський жезл', description: 'Древній індійський жезл з рукописами.' },
        { id: 16, title: 'Єгипетська мумія', description: 'Єгипетська мумія з часів фараонів.' },
        { id: 17, title: 'Грецька амфора', description: 'Грецька амфора зі Стародавнього Грецького періоду.' },
        { id: 18, title: 'Римський меч', description: 'Римський меч часів імперії.' },
        { id: 19, title: 'Скульптура Афродіти', description: 'Класична скульптура грецької богині любові.' },
        { id: 20, title: 'Фреска Помпеї', description: 'Фреска, що зображає сцену з життя в Помпеях.' },
        { id: 21, title: 'Вавилонська табличка', description: 'Древня вавилонська глиняна табличка з писемністю.' },
        { id: 22, title: 'Ритуальний інструмент', description: 'Древній інструмент для ритуальних церемоній.' },
        { id: 23, title: 'Стародавні монети', description: 'Колекція монет з різних країн і періодів.' },
        { id: 24, title: 'Маска ацтеків', description: 'Маска ацтекського періоду для ритуалів.' },
        { id: 25, title: 'Фараонська корона', description: 'Золотий головний убір фараона.' },
        { id: 26, title: 'Вікінгський щит', description: 'Щит вікінгів із заліза та дерева.' },
        { id: 27, title: 'Стародавній компас', description: 'Перша модель компасу для навігації.' },
        { id: 28, title: 'Мозаїка Помпеї', description: 'Мозаїка з Помпеї, що зображає битви гладіаторів.' },
        { id: 29, title: 'Індійський жезл', description: 'Древній індійський жезл з рукописами.' },
    ]
}

export default async function Category({ params }: { params: { id: string } }) {
    const category = await getCategory(params.id)
    const exhibits = await getCategoryExhibits(params.id)

    return (
        <div className="flex flex-wrap">
        <h1 className="text-4xl font-bold">{category.name}</h1>
        <div className="flex flex-wrap w-full">
            {exhibits.map((exhibit) => (
                <Link  href={`/exhibits/${exhibit.id}`} key={exhibit.id} className="bg-transparent flex-auto p-4 rounded-lg shadow-none">
                    <Image
                        src={`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`}
                        alt={exhibit.title}
                        width={1000}
                        height={1000}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-medium mb-2">{exhibit.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{exhibit.description}</p>
                    {/* <Link
                        href={`/exhibits/${exhibit.id}`}
                        className="text-gray-700 hover:underline"
                    >
                        Деталі
                    </Link> */}
                </Link>
            ))}
        </div>
    </div>
    
    )
}
