export enum SlideTypes {
    LYRICAL = "Lyrical",
    BIBLEREF = "Biblical",
    BASIC = "Basic",
}

export interface ISlide {
    type: SlideTypes;
    data: IBasicSlide | ILyricalSlide;
}

export interface IBasicSlide {
    textContent: string;
}

export interface ILyricalSlide {
    numberOfSlides: number;
    lyrics: string[];
}
