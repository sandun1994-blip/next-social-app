

import { authModalState } from '@/atoms/authModalAtom';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';

type AuthModalProps = {
     
};

const AuthModal:React.FC<AuthModalProps> = () => {


  const [modalState,setModalState] =useRecoilState(authModalState)
    
    
    const { isOpen, onOpen, onClose } = useDisclosure()

const handleClose=()=>{
  setModalState((prev: any)=>({...prev,open:false}))
}
console.log(modalState);
    return (
        <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={modalState.open} onClose={handleClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             NEWW VVVVVfffff
            </ModalBody>
          </ModalContent>
        </Modal>
      </>)
}
export default AuthModal;