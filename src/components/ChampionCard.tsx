"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { ChampionType } from "@/types/championType";

const ChampionCard = ({ data }: { data: ChampionType }) => {
  const queryClient = useQueryClient();
  const version: string = queryClient.getQueryData(["version"])!;
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.image.full}`}
          width={50}
          height={50}
          alt={data.id}
        />
      </CardHeader>
      <CardTitle>{data.name}</CardTitle>
      <CardDescription>{data.title}</CardDescription>
      <CardContent></CardContent>
    </Card>
  );
};

export default ChampionCard;
