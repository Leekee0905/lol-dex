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

export type ChampionListResponseType = {
  data: ChampionListType;
  format: string;
  type: string;
  version: string;
};

export type ChampionListType = {
  [key: string]: ChampionType;
};

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
  version: string;
};

export interface ChampionSkillType {
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
  image: ChampionImageType;
  resource: string;
}

export type ChampionDetailResponseType = {
  type: string;
  format: string;
  version: string;
  data: ChampionDetailType;
};

export type ChampionDetailDataType = {
  [key: string]: ChampionDetailType;
};

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
  recommended: unknown[];
  passive: {
    name: string;
    description: string;
    image: ChampionImageType;
  };
}
