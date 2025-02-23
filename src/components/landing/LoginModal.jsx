"use client";
import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, VStack, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

function LoginModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="md" mx={4}>
        <ModalCloseButton />
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold" fontFamily="montserrat">
          Вход
        </ModalHeader>
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel fontFamily="roboto">Email</FormLabel>
              <Input type="email" name="email" required />
            </FormControl>

            <FormControl>
              <FormLabel fontFamily="roboto">Пароль</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full" fontFamily="roboto">
              Войти
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
