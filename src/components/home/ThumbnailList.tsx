"use client";
import { getThumbnailChampionList } from "@/utils/serverApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

type LinkListType = {
  rotation: string;
  champions: string;
  items: string;
};

const ThumbnailList = () => {
  const queryClient = useQueryClient();
  const version: string = queryClient.getQueryData(["version"])!;

  const { data: thumbnailList, isLoading } = useQuery({
    queryKey: ["randomChampions"],
    queryFn: () => getThumbnailChampionList(version),
    enabled: !!version,
  });

  const linkListObject: LinkListType = {
    rotation: "로테이션",
    champions: "챔피언 목록",
    items: "아이템 목록",
  };
  if (isLoading) return <div>loading..</div>;

  const championsImageLinks = thumbnailList?.map(
    (e) =>
      `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e.id}_0.jpg`
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
            <h2 className="mt-5">{Object.values(linkListObject)[index]}</h2>
          </Link>
        </li>
      ))}
    </>
  );
};

export default ThumbnailList;
