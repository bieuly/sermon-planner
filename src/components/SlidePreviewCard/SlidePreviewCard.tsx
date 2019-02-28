import React, { FunctionComponent } from "react";
import { Card, Icon, SemanticCOLORS, SemanticICONS } from "semantic-ui-react";
import { IBasicSlide, ISlide, SlideTypes } from "../../models/Slide";
import "./styles.css";

export interface IProps {
    slide: ISlide;
}

interface ISlideAppearance {
    color: SemanticCOLORS;
    iconName: SemanticICONS;
}

const SlidePreviewCard: FunctionComponent<IProps> = ({ slide }) => {
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

    return (
        <Card className="slide-preview-card" color={color}>
            <Card.Content>
                <Card.Description className="content">
                    {slide.data && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: (slide.data as IBasicSlide).textContent,
                            }}
                        />
                    )}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name={iconName} /> {slide.type}
            </Card.Content>
        </Card>
    );
};

export default SlidePreviewCard;
