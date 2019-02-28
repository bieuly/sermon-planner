import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import ReactQuill from "react-quill";
import {
  Button,
  Divider,
  Dropdown,
  DropdownProps,
  Form,
  Modal,
  Segment,
} from "semantic-ui-react";
import { SlideTypes, BasicSlide, ISlide, LyricalSlide } from "../../models/Slide";
import "./styles.css";
import BasicSlideForm from "../BasicSlideForm/BasicSlideForm";

export interface IProps {
  onCreateSlide: (newSlide: ISlide) => void;
}

export interface IState {
  selectedSlideType: SlideTypes | null;
  slideInfo: ISlideInfo;
}

type StateKeys = keyof IState;

interface ISlideInfo {
  [SlideTypes.BASIC]: BasicSlide,
  [SlideTypes.LYRICAL]: LyricalSlide, 
}

type SlideInfoKeys = keyof ISlideInfo

const CreateNewSlideModal: FunctionComponent<IProps> = ({ onCreateSlide }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fields, setFields] = useState<IState>({
    selectedSlideType: null,
    slideInfo: {
      [SlideTypes.BASIC]: {
        textContent: "",
      },
      [SlideTypes.LYRICAL]: {
        numberOfSlides: 0,
        lyrics: [],
      }
    }
  });

  const showCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    clearFields();
    setModalOpen(false);
  };

  const handleCloseCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    closeModal();
  };

  const handleCreateSlide = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    if (isRequiredFieldsFilledOut()) {
      // cast as SlideType because we know it is not null at this point
      const slideType = fields.selectedSlideType as SlideTypes
      const newSlide = buildNewSlide(slideType);
      onCreateSlide(newSlide);
      closeModal();
    }
  };

  const buildNewSlide = (slideType: SlideTypes): ISlide => {
    console.log(fields.slideInfo[slideType as SlideInfoKeys])
    return {
      type: slideType,
      data: fields.slideInfo[slideType as SlideInfoKeys],
    };
  }

  const clearFields = () => {
    for (const field in fields) {
      fields[field as StateKeys] = null;
    }
  };

  const isRequiredFieldsFilledOut = (): boolean => {
    return !Object.values(fields).some(field => !field);
  };

  const slideTypeOnChange = (e: SyntheticEvent, data: DropdownProps): void => {
    e.preventDefault();
    setFields({
      ...fields,
      selectedSlideType: data.value as SlideTypes,
    });
  };

  const onBasicFormChange = (content: string): void => {
    setFields({
      ...fields,
      slideInfo: {
        ...fields.slideInfo,
        [SlideTypes.BASIC]: {
          textContent: content,
        }        
      }
    })
  }

  const renderSlideForm = () => {
    const { selectedSlideType } = fields;
    if (selectedSlideType === SlideTypes.BASIC) {
      return (<BasicSlideForm onChange={onBasicFormChange}/>);
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
        trigger={
          <Button onClick={showCreateSlideMenu} color="blue">
            Create New Slide
          </Button>
        }
        open={modalOpen}
        centered={false}
        onClose={handleCloseCreateSlideMenu}
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
            {renderSlideForm()}
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCreateSlide} color="blue" active={false}>
            Create
          </Button>
        </Modal.Actions>
      </Modal>
    </Form>
  );
};

export default CreateNewSlideModal;
