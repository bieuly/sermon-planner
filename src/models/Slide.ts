export enum SlideTypes {
    LYRICAL = "Lyrical",
    BIBLEREF = "Biblical",
    BASIC = "Basic",
}

export interface ISlide {
    type: SlideTypes;
    data: IBasicSlide | ILyricalSlide | IBibleRefSlide | null;
}

export interface IBasicSlide {
    textContent: string;
}

export interface IBibleRefSlide {
    book: string;
    chapter: number;
    verses: number[];
    text: string;
}

export interface ILyricalSlide {
    numberOfSlides: number;
    lyrics: string[];
}
