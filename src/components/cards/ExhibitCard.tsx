import Image from 'next/image'
import Link from 'next/link'

export default function ExhibitCard({
  id,
  img,
  name,
  description,
  number,
  date,
  category,
  moreDescription,
}: dataType)  {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-black">
      <Image src={img} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="mb-4 line-clamp-3">{description}</p>
        <Link href={`/exhibits/${id}`} className="text-blue-500 hover:underline">
          Дізнатися більше
        </Link>
      </div>
    </div>
  )
}

