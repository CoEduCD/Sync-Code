import React, {useState, useEffect} from "react";
import { customStyles } from "./modal.styles";
import Modal from "react-modal";

interface CustomModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export const AuthorityModal = ({ modalIsOpen, setModalIsOpen}: CustomModalProps) => {
    const closeModal = () => {
        setModalIsOpen(false);
      };
    return(
    modalIsOpen && 
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="확인">

        </Modal>
    )
}