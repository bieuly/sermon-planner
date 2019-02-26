import React, { SyntheticEvent, useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { SlideTypes } from "../../models/Slide";

export interface IProps {
  onCreateSlide: (slideType: SlideTypes) => void;
}

const CreateNewSlideModal = ({ onCreateSlide }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const showCreateSlideMenu = (e: SyntheticEvent, data: any) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const closeCreateSlideMenu = (e: SyntheticEvent, data: any) => {
    e.preventDefault();
    setModalOpen(false);
  };
  const handleCreateSlide = (e: SyntheticEvent, data: any) => {
    e.preventDefault();
    onCreateSlide(data.id as SlideTypes);
    setModalOpen(false);
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
        <Button.Group>
          <Button
            id={SlideTypes.LYRICAL}
            onClick={handleCreateSlide}
            color="blue"
          >
            <Icon name="music" /> Lyrical
          </Button>
          <Button.Or />
          <Button
            id={SlideTypes.BIBLEREF}
            onClick={handleCreateSlide}
            color="green"
          >
            <Icon name="book" /> Biblical
          </Button>
          <Button.Or />
          <Button
            id={SlideTypes.BASIC}
            onClick={handleCreateSlide}
            color="olive"
          >
            <Icon name="sticky note outline" /> Basic
          </Button>
        </Button.Group>
      </Modal.Content>
    </Modal>
  );
};

export default CreateNewSlideModal;
