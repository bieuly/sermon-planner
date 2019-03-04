import React, { FunctionComponent, useState } from "react";
import { Button, Card, Grid, Header, Icon } from "semantic-ui-react";
import CreateNewSlideModal from "../../components/CreateNewSlideModal/CreateNewSlideModal";
import SlidePreviewCard from "../../components/SlidePreviewCard/SlidePreviewCard";
import {
    IBasicSlide,
    ILyricalSlide,
    ISlide,
    SlideTypes,
} from "../../models/Slide";
import "./styles.css";

const CreatePresentationPage: FunctionComponent = () => {
    const [slides, setSlides] = useState<ISlide[]>([]);
    const [selectedSlideId, setSelectedSlideId] = useState<string | null>(null);
    const [isCreateSlideModalOpen, setCreateSlideModalOpen] = useState<boolean>(
        false
    );

    const createSlide = (newSlide: ISlide): void => {
        setSlides([...slides, newSlide]);
    };

    const onCreateSlideBtnClick = (): void => {
        setCreateSlideModalOpen(true);
    };

    const handlePreviewSlideClick = (slideId: string): void => {
        setSelectedSlideId(slideId);
    };

    const renderSlides = () => {
        return (
            <ol className="slides-list">
                {slides.map((slide) => (
                    <li key={slide.id}>
                        {
                            <SlidePreviewCard
                                slide={slide}
                                onPreviewSlideClick={handlePreviewSlideClick}
                            />
                        }
                    </li>
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

    const renderSelectedSlide = () => {
        if (selectedSlideId) {
            const selectedSlide = slides.find(
                (slide) => slide.id === selectedSlideId
            );
            if (selectedSlide) {
                switch (selectedSlide.type) {
                    case SlideTypes.BASIC:
                        return (
                            <div
                                className="ql-editor"
                                dangerouslySetInnerHTML={{
                                    __html: (selectedSlide.data as IBasicSlide)
                                        .textContent,
                                }}
                            />
                        );
                    case SlideTypes.LYRICAL:
                        return (
                            <div>
                                {(selectedSlide.data as ILyricalSlide).lyrics.map(
                                    (lyric) => {
                                        const cardDescription = (() => {
                                            const lines = lyric.split("\n");
                                            if (lines.length > 0) {
                                                return lines.map((line, i) => {
                                                    return (
                                                        <Card.Description
                                                            key={i}
                                                        >
                                                            {line}
                                                        </Card.Description>
                                                    );
                                                });
                                            } else {
                                                return (
                                                    <Card.Description>
                                                        {lyric}
                                                    </Card.Description>
                                                );
                                            }
                                        })();
                                        return (
                                            <Card>
                                                <Card.Content textAlign="center">
                                                    {cardDescription}
                                                </Card.Content>
                                            </Card>
                                        );
                                    }
                                )}
                            </div>
                        );
                }
            }
        }
    };

    return (
        <div className="create-presentation-page">
            {slides.length > 0 ? (
                <div className="slides">
                    <Grid columns={2} divided>
                        <Grid.Column width={6}>
                            {renderSlides()}
                            {renderCreateNewSlideBtn()}
                            {renderCreateNewSlideModal()}
                        </Grid.Column>
                        <Grid.Column width={10}>
                            {renderSelectedSlide()}
                        </Grid.Column>
                    </Grid>
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
