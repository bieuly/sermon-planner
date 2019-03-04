export enum SlideTypes {
    LYRICAL = "Lyrical",
    BIBLEREF = "Biblical",
    BASIC = "Basic",
}

export interface ISlide {
    id: string;
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
    title: string;
    lyrics: string[];
}
