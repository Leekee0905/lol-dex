type ChampionStatType = {
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
};

export type ImageType = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
type ChampionInfoType = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

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
  image: ImageType;
  info: ChampionInfoType;
  key: string;
  name: string;
  partype: string;
  stats: ChampionStatType;
  tags: string[];
  title: number;
  version: string;
};

export type ChampionSkillType = {
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
  image: ImageType;
  resource: string;
};

export type ChampionDetailResponseType = {
  type: string;
  format: string;
  version: string;
  data: ChampionDetailType;
};

export type ChampionDetailDataType = {
  [key: string]: ChampionDetailType;
};

export type ChampionSkinsType = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

export interface ChampionDetailType extends ChampionType {
  skins: ChampionSkinsType[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: ChampionSkillType[];
  recommended: unknown[];
  passive: {
    name: string;
    description: string;
    image: ImageType;
  };
}
