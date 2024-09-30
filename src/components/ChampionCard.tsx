import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { ChampionType } from "@/types/championType";
import Link from "next/link";

const ChampionCard = ({ data }: { data: ChampionType }) => {
  return (
    <Link href={`/champions/${data.id}`}>
      <Card className="flex flex-col items-center justify-center">
        <CardHeader>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${data.version}/img/champion/${data.image.full}`}
            width={100}
            height={100}
            alt={data.id}
          />
        </CardHeader>
        <CardTitle>{data.name}</CardTitle>

        <CardContent>
          <CardDescription>{data.title}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChampionCard;
