

async function getNewsArticle(id: string) {
  // Тут буде логіка для отримання новини за id з API
  return { id, title: 'Нова виставка відкривається цього тижня', content: 'Детальний опис нової виставки...' }
}

export default async function NewsArticle({ params }: { params: { id: string } }) {
  const article = await getNewsArticle(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p>{article.content}</p>
      </div>
    </div>
  )
}

