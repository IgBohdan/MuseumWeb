"use client";
import DataCard from "../../cards/category/CategoryCard";
import CategoryCard from "../../cards/category/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Categoryes = ({ data }: { data: dataType[] }) => {
  return (
    <div className="bg-[--mainColorr] px-2 flex w-full rounded-[1rem]">
      <Carousel className="w-full">
        <CarouselContent className="p-3 gap-1">
          {data &&
            data?.map((item, index) => (
              <CarouselItem
                key={index}
                // className="md:basis-1/2 lg:basis-1/3 bg-red-600 pl-0"
                className="md:basis-1/2 lg:basis-1/4  pl-0"
              >
                <DataCard
                  name={item.name}
                  description={item.description}
                  img={item.img}
                  className="flex-[18vw] min-w-[300px]"
                  key={index}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-[.5em]" />
        <CarouselNext className="right-[.5em]" />
      </Carousel>
    </div>
  );
};
export default Categoryes;
