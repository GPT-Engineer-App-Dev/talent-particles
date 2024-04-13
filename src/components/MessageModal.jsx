import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Textarea, Button, useDisclosure, useToast } from "@chakra-ui/react";

const MessageModal = ({ developerName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onClose();
    toast({
      title: "Message sent.",
      description: "Your message has been sent successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" size="sm" mt={4}>
        Message
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Message {developerName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Your Name</FormLabel>
                <Input name="name" required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Your Email</FormLabel>
                <Input name="email" type="email" required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea name="message" required />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Send Message
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageModal;
