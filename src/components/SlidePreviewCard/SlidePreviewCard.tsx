import React, { FunctionComponent } from "react";
import { Card, Icon, SemanticCOLORS, SemanticICONS } from "semantic-ui-react";
import {
    IBasicSlide,
    ILyricalSlide,
    ISlide,
    SlideTypes,
} from "../../models/Slide";
import "./styles.css";

export interface IProps {
    slide: ISlide;
    onPreviewSlideClick: (slideId: string) => void;
}

interface ISlideAppearance {
    color: SemanticCOLORS;
    iconName: SemanticICONS;
}

const SlidePreviewCard: FunctionComponent<IProps> = ({
    slide,
    onPreviewSlideClick,
}) => {
    const { color, iconName } = ((): ISlideAppearance => {
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

    const cardContent = (() => {
        switch (slide.type) {
            case SlideTypes.BASIC:
                return (
                    <Card.Content>
                        <Card.Description className="content">
                            {slide.data && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: (slide.data as IBasicSlide)
                                            .textContent,
                                    }}
                                />
                            )}
                        </Card.Description>
                    </Card.Content>
                );
            case SlideTypes.LYRICAL:
                return (
                    <Card.Content>
                        <Card.Meta>
                            Title:{" "}
                            {slide.data && (slide.data as ILyricalSlide).title}
                        </Card.Meta>
                        <Card.Description className="content">
                            {` Number of Slides: ${slide.data &&
                                (slide.data as ILyricalSlide).lyrics.length}`}
                        </Card.Description>
                    </Card.Content>
                );
        }
    })();

    const handleOnClick = () => {
        onPreviewSlideClick(slide.id);
    };

    return (
        <Card
            className="slide-preview-card"
            color={color}
            onClick={handleOnClick}
        >
            <Card.Content>{cardContent}</Card.Content>
            <Card.Content extra>
                <Icon name={iconName} /> {slide.type}
            </Card.Content>
        </Card>
    );
};

export default SlidePreviewCard;
