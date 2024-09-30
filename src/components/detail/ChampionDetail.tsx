import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChampionDetailResponseType,
  ChampionDetailType,
  ChampionSkillType,
} from "@/types/championType";

const ChampionDetail = ({ data }: { data: ChampionDetailResponseType }) => {
  const championInfo: ChampionDetailType = Object.values(data.data)[0];
  const tagConverter = (desc: string) => {
    const convertedDesc = desc.replace("<br><br>", "\n");
    return convertedDesc;
  };
  return (
    <div>
      <h1 className="text-[#ff5555] font-bold">{championInfo.name}</h1>
      <p>{championInfo.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${data.version}/img/champion/${championInfo.image.full}`}
        width={50}
        height={50}
        alt={championInfo.id || ""}
      />
      <p>{championInfo.lore}</p>
      <h2 className="mt-10">{championInfo.name}의 스킬</h2>
      <div className="container mt-5">
        <Card>
          <CardHeader>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${data.version}/img/passive/${championInfo.passive.image.full}`}
              width={50}
              height={50}
              alt={championInfo.passive.name || ""}
            />
          </CardHeader>
          <CardContent className="h-full">
            <CardTitle>{championInfo.passive.name}</CardTitle>
            <CardDescription>
              {tagConverter(championInfo.passive.description)}
            </CardDescription>
          </CardContent>
        </Card>
        {championInfo.spells.map((element: ChampionSkillType) => {
          return (
            <div key={element.id} className="my-5">
              <Card>
                <CardHeader>
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/${data.version}/img/spell/${element.id}.png`}
                    width={50}
                    height={50}
                    alt={element.id}
                  />
                </CardHeader>

                <CardContent className="h-full">
                  <CardTitle>{element.name}</CardTitle>
                  <CardDescription>
                    {tagConverter(element.description)}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionDetail;
