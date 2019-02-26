import React, { FunctionComponent, useState } from "react";
import { Card, Icon, SemanticICONS } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import CreateNewSlideModal from "../../components/CreateNewSlideModal/CreateNewSlideModal";
import { ISlide, SlideTypes } from "../../models/Slide";
import "./CreateSermonPage.css";

const CreateSermonPage: FunctionComponent = () => {
  const [slides, setSlides] = useState<ISlide[]>([]);

  const createSlide = (type: SlideTypes): void => {
    const newSlide: ISlide = { type };
    setSlides([...slides, newSlide]);
  };

  const renderSlides = () => {
    return (
      <ol className="slides-list">
        {slides.map((slide, i) => (
          <li key={i}>{renderSlide(slide.type)}</li>
        ))}
      </ol>
    );
  };

  const renderSlide = (slideType: SlideTypes) => {
    const slideInfo = (() => {
      switch (slideType) {
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
      <Card color={slideInfo.color as SemanticCOLORS}>
        <Card.Content>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            pariatur dignissimos optio laudantium officiis, modi est, dolore
            quae delectus velit expedita sed adipisci eaque labore soluta?
            Perspiciatis dignissimos at reprehenderit.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name={slideInfo.iconName as SemanticICONS} /> {slideType}
        </Card.Content>
      </Card>
    );
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
