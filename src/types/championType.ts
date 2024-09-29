interface ChampionStatType {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeed: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
}

interface ChampionImageType {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
interface ChampionInfoType {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export type ChampionType = {
  blurb: string;
  id: string;
  image: ChampionImageType;
  info: ChampionInfoType;
  key: string;
  name: string;
  partype: string;
  stats: ChampionStatType;
  tags: string[];
  title: number;
  version: number;
};

interface ChampionSkillType {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: undefined | null | Record<string, unknown>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: unknown[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  resource: string;
}

export interface ChampionDetailType extends ChampionType {
  skins: {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
  }[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: ChampionSkillType[];
}
