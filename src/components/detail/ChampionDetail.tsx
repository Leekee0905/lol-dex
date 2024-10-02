import Image from "next/image";
import { ChampionDetailType } from "@/types/championType";
import { LuSwords } from "react-icons/lu";
import { FaBookOpen } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const ChampionDetail = ({
  data,
  version,
}: {
  data: ChampionDetailType;
  version: string;
}) => {
  return (
    <div className="text-white flex flex-col gap-3">
      <h1 className="text-[#ff5555] font-bold">{data.name}</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/champion/${data.image.full}`}
        width={50}
        height={50}
        alt={data.id || ""}
      />
      <p>{data.title}</p>
      <p>{data.lore}</p>
      <div className="flex flex-col">
        <p>스텟</p>
        <p className="flex items-center">
          <LuSwords className="mr-1" />: {data.info.attack}
        </p>

        <p className="flex items-center">
          <FaShield className="mr-1" />: {data.info.defense}
        </p>
        <p className="flex items-center">
          <FaBookOpen className="mr-1" />: {data.info.magic}
        </p>
        <p className="flex items-center">
          <IoMdStar className="mr-1" />: {data.info.difficulty}
        </p>
      </div>
    </div>
  );
};

export default ChampionDetail;
