import React, { SyntheticEvent, useState } from "react";
import { Button, Dropdown, DropdownProps, Modal } from "semantic-ui-react";
import { SlideTypes } from "../../models/Slide";

export interface IProps {
  onCreateSlide: (slideType: SlideTypes) => void;
}

const CreateNewSlideModal = ({ onCreateSlide }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlideType, setSelectedSlideType] = useState<
    undefined | SlideTypes
  >(undefined);

  const showCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    setModalOpen(true);
  };
  const closeCreateSlideMenu = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    setModalOpen(false);
  };
  const handleCreateSlide = (e: SyntheticEvent, data: any): void => {
    e.preventDefault();
    onCreateSlide(data.id as SlideTypes);
    setModalOpen(false);
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

  const slideTypeOnChange = (e: SyntheticEvent, data: DropdownProps): void => {
    e.preventDefault();
    setSelectedSlideType(data.value as SlideTypes);
  };

  return (
    <Modal
      trigger={<Button onClick={showCreateSlideMenu}>Create New Slide</Button>}
      open={modalOpen}
      centered={false}
      onClose={closeCreateSlideMenu}
    >
      <Modal.Header>Create New Slide</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>What kind of Slide do you want to create?</p>
        </Modal.Description>
        <Dropdown
          onChange={slideTypeOnChange}
          placeholder="Select Type"
          options={slideTypeOptions}
          selection
        />
      </Modal.Content>
    </Modal>
  );
};

export default CreateNewSlideModal;
