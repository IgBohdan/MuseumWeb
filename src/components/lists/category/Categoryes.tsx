"use client"
import CategoryCard from '../../cards/category/CategoryCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"


const Categoryes = ({ data }: { data: dataType[] }) => {
	return (
		<div className=" bg-[--mainColorr] px-2 flex w-full rounded-[1rem]">
			<Carousel className="w-full">
				<CarouselContent className="ml-1 p-3 gap-3">
					{data && data?.map((iteam, index) => (
						<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
							<CategoryCard data={iteam} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-[.5em]"/>
				<CarouselNext className="right-[.5em]"/>
			</Carousel>
		</div>
	)
}
export default Categoryes