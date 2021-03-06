import React, {
    FunctionComponent,
    ReactNode,
    SyntheticEvent,
    useState,
} from "react";
import {
    Button,
    Divider,
    Dropdown,
    DropdownProps,
    Form,
    Modal,
    Segment,
} from "semantic-ui-react";
import uuid from "uuid/v4";
import {
    IBasicSlide,
    IBibleRefSlide,
    ILyricalSlide,
    ISlide,
    SlideData,
    SlideTypes,
} from "../../models/Slide";
import BasicSlideForm from "../BasicSlideForm/BasicSlideForm";
import LyricalSlideForm from "../LyricalSlideForm/LyricalSlideForm";
import "./styles.css";

export interface IProps {
    isOpen: boolean;
    onCreateSlide: (newSlide: ISlide) => void;
    setModalOpen: (display: boolean) => void;
}

export interface IState {
    selectedSlideType: SlideTypes | null;
    slideInfo: ISlideInfo;
}

interface ISlideInfo {
    [SlideTypes.BASIC]: IBasicSlide | null;
    [SlideTypes.LYRICAL]: ILyricalSlide | null;
    [SlideTypes.BIBLEREF]: IBibleRefSlide | null;
}

export interface ISlideFormData {
    slideType: SlideTypes;
    data: SlideData;
}

type SlideInfoKeys = keyof ISlideInfo;

const CreateNewSlideModal: FunctionComponent<IProps> = ({
    isOpen,
    onCreateSlide,
    setModalOpen,
}) => {
    const [fields, setFields] = useState<IState>({
        selectedSlideType: null,
        slideInfo: {
            [SlideTypes.BASIC]: null,
            [SlideTypes.LYRICAL]: null,
            [SlideTypes.BIBLEREF]: null,
        },
    });

    const closeModal = (): void => {
        clearFields();
        setModalOpen(false);
    };

    const handleCreateSlide = (): void => {
        const { selectedSlideType } = fields;
        if (selectedSlideType) {
            const newSlide = buildNewSlide(selectedSlideType);
            onCreateSlide(newSlide);
            closeModal();
        }
    };

    const buildNewSlide = (slideType: SlideTypes): ISlide => {
        return {
            data: fields.slideInfo[slideType as SlideInfoKeys],
            id: uuid(),
            type: slideType,
        };
    };

    const clearFields = (): void => {
        setFields({
            selectedSlideType: null,
            slideInfo: {
                [SlideTypes.BASIC]: null,
                [SlideTypes.LYRICAL]: null,
                [SlideTypes.BIBLEREF]: null,
            },
        });
    };

    const slideTypeOnChange = (
        e: SyntheticEvent,
        data: DropdownProps
    ): void => {
        e.preventDefault();
        setFields({
            ...fields,
            selectedSlideType: data.value as SlideTypes,
        });
    };

    const onFormChange = (slideFormData: ISlideFormData): void => {
        setFields({
            ...fields,
            slideInfo: {
                ...fields.slideInfo,
                [slideFormData.slideType]: slideFormData.data,
            },
        });
    };

    const renderSlideFields = (): ReactNode => {
        const { selectedSlideType } = fields;
        if (selectedSlideType) {
            switch (selectedSlideType) {
                case SlideTypes.BASIC:
                    return <BasicSlideForm onChange={onFormChange} />;
                case SlideTypes.LYRICAL:
                    return <LyricalSlideForm onChange={onFormChange} />;
            }
        }
    };

    const slideTypeOptions = [
        { key: 1, text: "Biblical", value: SlideTypes.BIBLEREF, icon: "book" },
        { key: 2, text: "Lyrical", value: SlideTypes.LYRICAL, icon: "music" },
        {
            icon: "sticky note outline",
            key: 3,
            text: "Basic",
            value: SlideTypes.BASIC,
        },
    ];

    return (
        <Form>
            <Modal
                dimmer="blurring"
                open={isOpen}
                centered={false}
                onClose={closeModal}
                size="fullscreen"
            >
                <Modal.Header>Create New Slide</Modal.Header>

                <Modal.Content>
                    <Modal.Description>
                        <p>What kind of Slide do you want to create?</p>
                    </Modal.Description>
                    <Segment basic>
                        <Form.Field>
                            <Dropdown
                                onChange={slideTypeOnChange}
                                placeholder="Select Type"
                                options={slideTypeOptions}
                                selection
                            />
                        </Form.Field>
                        <Divider horizontal />
                        {renderSlideFields()}
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={handleCreateSlide}
                        color="blue"
                        active={false}
                    >
                        Create
                    </Button>
                </Modal.Actions>
            </Modal>
        </Form>
    );
};

export default CreateNewSlideModal;
