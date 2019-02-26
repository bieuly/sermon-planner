import React, { SyntheticEvent, useState, FunctionComponent } from "react";
import { Button, Dropdown, DropdownProps, Modal, Form, Label } from "semantic-ui-react";
import { SlideTypes } from "../../models/Slide";

export interface IProps {
  onCreateSlide: (slideType: SlideTypes) => void;
}

export interface IState {
  selectedSlideType: SlideTypes | null;
}

type StateKeys = keyof IState;

const CreateNewSlideModal: FunctionComponent<IProps> = ({ onCreateSlide }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [fields, setFields] = useState<IState>({
    selectedSlideType: null,
  });

  const showCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    clearFields();
    setModalOpen(false);
  }

  const closeCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    closeModal();
  };

  const handleCreateSlide = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    if (isRequiredFieldsFilledOut()) {
      const {selectedSlideType} = fields;
      onCreateSlide(selectedSlideType as SlideTypes);
      closeModal();
    }
  };

  const clearFields = () => {
    for(let field in fields) {
      fields[field as StateKeys] = null;
    }
  }

  const isRequiredFieldsFilledOut = (): boolean => {
    return !Object.values(fields).some((field) => !field);
  }

  const slideTypeOnChange = (e: SyntheticEvent, data: DropdownProps): void => {
    e.preventDefault();
    setFields({
      ...fields,
      selectedSlideType: data.value as SlideTypes,
    });
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
      trigger={<Button onClick={showCreateSlideMenu} color="blue">Create New Slide</Button>}
      open={modalOpen}
      centered={false}
      onClose={closeCreateSlideMenu}
      >
        <Modal.Header>Create New Slide</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>What kind of Slide do you want to create?</p>
          </Modal.Description>
          <Form.Field>
            <Dropdown
              onChange={slideTypeOnChange}
              placeholder="Select Type"
              options={slideTypeOptions}
              selection
            />
          </Form.Field>
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={handleCreateSlide} color="blue" active={false}>Create</Button>
          </Modal.Actions>
      </Modal>
    </Form>
  );
};

export default CreateNewSlideModal;
