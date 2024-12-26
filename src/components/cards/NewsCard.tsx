import Link from "next/link";
import Image from "next/image";

export default function NewsCard({
  id,
  img,
  name,
  description,
  number,
  date,
  category,
  moreDescription,
}: dataType) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={img} alt={name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4 text-black">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm mb-2">{date}</p>
        <p className="mb-2">Category: {category}</p>
        <p className="mb-2">Number: {number}</p>
        <p className="mb-4 line-clamp-3">{description}</p>
        <p className="mb-4 line-clamp-3">{moreDescription}</p>
        <Link href={`/news/${id}`} className="text-blue-500 hover:underline">
          Читати далі
        </Link>
      </div>
    </div>
  );
}
