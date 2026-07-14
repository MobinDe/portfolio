export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  liveUrl: string;
  sourceUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  icon?: string;
}
