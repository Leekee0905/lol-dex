import { ChampionType } from "@/types/championType";
import Image from "next/image";
import Link from "next/link";

type LinkListType = {
  rotation: string;
  champions: string;
  items: string;
};

const ThumbnailList = ({
  thumbnailList,
}: {
  thumbnailList: ChampionType[];
}) => {
  const linkListObject: LinkListType = {
    rotation: "로테이션",
    champions: "챔피언 목록",
    items: "아이템 목록",
  };

  const championsImageLinks = thumbnailList.map(
    (e) =>
      `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/img/champion/splash/${e.id}_0.jpg`
  );

  return (
    <>
      {championsImageLinks?.map((element: string, index: number) => (
        <li key={element}>
          <Link
            href={Object.keys(linkListObject)[index]}
            className="flex flex-col justify-center items-center"
          >
            <Image
              src={element}
              width={400}
              height={300}
              alt="random-champion"
            />
            <h2 className="mt-3">{Object.values(linkListObject)[index]}</h2>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ThumbnailList;
