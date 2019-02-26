export enum SlideTypes {
  LYRICAL = "Lyrical",
  BIBLEREF = "Biblical",
  BASIC = "Basic",
}

export interface ISlide {
  type: SlideTypes;
}
