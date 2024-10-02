import { ChampionSkinsType } from "@/types/championType";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ChampionSkins = ({
  skins,
  name,
  krName,
}: {
  skins: ChampionSkinsType[];
  name: string;
  krName: string;
}) => {
  return (
    <div className="container">
      <h1 className="my-5">스킨</h1>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {skins.map((skin) => (
            <CarouselItem
              className="pl-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex flex-col justify-center items-center"
              key={skin.id}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/img/champion/loading/${name}_${skin.num}.jpg`}
                width={150}
                height={300}
                alt={skin.name}
              />
              <p>{skin.name === "default" ? krName : skin.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ChampionSkins;
