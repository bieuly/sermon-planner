import React, { FunctionComponent, useState } from "react";
import CreateNewSlideModal from "../../components/CreateNewSlideModal/CreateNewSlideModal";
import SlidePreviewCard from "../../components/SlidePreviewCard/SlidePreviewCard";
import { ISlide, SlideTypes } from "../../models/Slide";
import "./CreateSermonPage.css";

const CreateSermonPage: FunctionComponent = () => {
    const [slides, setSlides] = useState<ISlide[]>([]);

    const createSlide = (newSlide: ISlide): void => {
        setSlides([...slides, newSlide]);
    };

    const renderSlides = () => {
        return (
            <ol className="slides-list">
                {slides.map((slide, i) => (
                    <li key={i}>{renderSlide(slide)}</li>
                ))}
            </ol>
        );
    };

    const renderSlide = (slide: ISlide) => {
        const slideAppearance = (() => {
            switch (slide.type) {
                case SlideTypes.LYRICAL:
                    return {
                        color: "blue",
                        iconName: "music",
                    };
                case SlideTypes.BIBLEREF:
                    return {
                        color: "green",
                        iconName: "book",
                    };
                default:
                    return {
                        color: "olive",
                        iconName: "sticky note outline",
                    };
            }
        })();
        const slideInfo = {
            ...slideAppearance,
            slide,
        };
        return <SlidePreviewCard {...slideInfo} />;
    };

    return (
        <div className="create-sermon-page">
            <div className="slides" />
            {renderSlides()}
            <CreateNewSlideModal onCreateSlide={createSlide} />
        </div>
    );
};

export default CreateSermonPage;
