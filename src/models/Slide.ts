import Quill from "quill";

export enum SlideTypes {
  LYRICAL = "Lyrical",
  BIBLEREF = "Biblical",
  BASIC = "Basic",
}

export interface ISlide {
  type: SlideTypes;
  data: BasicSlide | LyricalSlide;
}

export interface BasicSlide {
  textContent: string
}

export interface LyricalSlide {
  numberOfSlides: number;
  lyrics: string[];
}