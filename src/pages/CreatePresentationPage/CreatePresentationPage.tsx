import React, { FunctionComponent, useState } from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import CreateNewSlideModal from "../../components/CreateNewSlideModal/CreateNewSlideModal";
import SlidePreviewCard from "../../components/SlidePreviewCard/SlidePreviewCard";
import { ISlide } from "../../models/Slide";
import "./styles.css";

const CreatePresentationPage: FunctionComponent = () => {
    const [slides, setSlides] = useState<ISlide[]>([]);
    const [isCreateSlideModalOpen, setCreateSlideModalOpen] = useState<boolean>(
        false
    );

    const createSlide = (newSlide: ISlide): void => {
        setSlides([...slides, newSlide]);
    };

    const onCreateSlideBtnClick = () => {
        setCreateSlideModalOpen(true);
    };

    const renderSlides = () => {
        return (
            <ol className="slides-list">
                {slides.map((slide, i) => (
                    <li key={i}>{<SlidePreviewCard slide={slide} />}</li>
                ))}
            </ol>
        );
    };

    const renderCreateNewSlideBtn = () => (
        <div className="create-slide-btn">
            <Button color="blue" onClick={onCreateSlideBtnClick}>
                Create New Slide
            </Button>
        </div>
    );

    const renderCreateNewSlideModal = () => (
        <CreateNewSlideModal
            isOpen={isCreateSlideModalOpen}
            onCreateSlide={createSlide}
            setModalOpen={setCreateSlideModalOpen}
        />
    );

    return (
        <div className="create-presentation-page">
            {slides.length > 0 ? (
                <div>
                    <div className="slides" />
                    {renderSlides()}
                    {renderCreateNewSlideBtn()}
                    {renderCreateNewSlideModal()}
                </div>
            ) : (
                <div className="no-slides-header">
                    <Header as="h3" icon textAlign="center">
                        <Icon name="book" circular />
                        <Header.Content>You have no slides!</Header.Content>
                        <Header.Subheader>
                            {renderCreateNewSlideBtn()}
                        </Header.Subheader>
                    </Header>
                    {renderCreateNewSlideModal()}
                </div>
            )}
        </div>
    );
};

export default CreatePresentationPage;
