import React, { FunctionComponent } from "react";
import { Card, Icon, SemanticCOLORS, SemanticICONS } from "semantic-ui-react";
import { IBasicSlide, ISlide } from "../../models/Slide";
import "./styles.css";

export interface IProps {
    iconName: string;
    color: string;
    slide: ISlide;
}

const SlidePreviewCard: FunctionComponent<IProps> = ({
    iconName,
    color,
    slide,
}) => (
    <Card className="slide-preview-card" color={color as SemanticCOLORS}>
        <Card.Content>
            <Card.Description className="content">
                {slide.data ? (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: (slide.data as IBasicSlide).textContent,
                        }}
                    />
                ) : (
                    `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              pariatur dignissimos optio laudantium officiis, modi est, dolore
              quae delectus velit expedita sed adipisci eaque labore soluta?
              Perspiciatis dignissimos at reprehenderit.
            `
                )}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name={iconName as SemanticICONS} /> {slide.type}
        </Card.Content>
    </Card>
);

export default SlidePreviewCard;
