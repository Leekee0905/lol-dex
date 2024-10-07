"use client";
import { ChampionDetailType } from "@/types/championType";
import Image from "next/image";
import { useState } from "react";

const SKILL_KEY: string[] = ["Q", "W", "E", "R"];

const ChampionSkill = ({
  data,
  version,
}: {
  data: ChampionDetailType;
  version: string;
}) => {
  const [skillInfo, setSkillInfo] = useState<string>(data.passive.description);
  return (
    <>
      <h2 className="mt-5">{data.name}의 스킬</h2>
      <div className="container flex gap-5 mt-5">
        <div
          className="flex flex-col items-center hover:text-[#ff5555] skill"
          onClick={() => setSkillInfo(data.passive.description)}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/passive/${data.passive.image.full}`}
            width={50}
            height={50}
            alt={data.passive.name || ""}
          />
          <p>P</p>
        </div>

        {data.spells.map((spell, index: number) => {
          return (
            <div
              className="skill flex flex-col items-center cursor-pointer hover:text-[#ff5555]"
              key={spell.id}
              onClick={() => setSkillInfo(spell.description)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/spell/${spell.id}.png`}
                width={50}
                height={50}
                alt={spell.id}
              />
              <p>{SKILL_KEY[index]}</p>
            </div>
          );
        })}
      </div>
      <p
        className="min-h-[200px]"
        dangerouslySetInnerHTML={{ __html: skillInfo }}
      ></p>
    </>
  );
};

export default ChampionSkill;
