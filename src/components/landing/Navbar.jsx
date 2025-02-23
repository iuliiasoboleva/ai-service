"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Flex, HStack, Text, Link, Button, VStack } from "@chakra-ui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const handleLoginClick = () => {
    setIsMenuOpen(false);
    router.push("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Box as="nav" bg="white" boxShadow="lg" position="fixed" top="0" w="100vw" zIndex="1000">
      <Container maxW="7xl" px={4}>
        <Flex justify={{ base: "space-around", md: "space-between" }} h="16" align="center">
          {/* Логотип */}
          <Box onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} cursor="pointer">
            <Text fontSize="2xl" fontWeight="bold" color="blue.600" fontFamily="montserrat">
              ИИ Рекрутер
            </Text>
          </Box>

          {/* Навигационные ссылки (десктоп) */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Link href="#features" fontFamily="roboto" color="gray.700" _hover={{ color: "blue.600" }}>
              Возможности
            </Link>
            <Link href="#how-it-works" fontFamily="roboto" color="gray.700" _hover={{ color: "blue.600" }}>
              Как это работает
            </Link>
            <Link href="#pricing" fontFamily="roboto" color="gray.700" _hover={{ color: "blue.600" }}>
              Цены
            </Link>
            <Button colorScheme="blue" fontFamily="roboto" bgColor="blue.600" onClick={handleLoginClick}>
              Вход / Регистрация
            </Button>
          </HStack>

          {/* Бургер меню (мобильная версия) */}
          <Box
            display={{ base: "flex", md: "none" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            position="relative"
            cursor="pointer"
            zIndex="1100"
          >
            <Box position="relative" w="30px" h="23px" display="flex" flexDirection="column" justifyContent="space-between">
              <Box
                w="full"
                h="3px"
                bg="black"
                borderRadius="md"
                transition="transform 0.3s, top 0.3s"
                position="absolute"
                top={isMenuOpen ? "10px" : "0"}
                transform={isMenuOpen ? "rotate(45deg)" : "rotate(0)"}
              />
              <Box
                w="full"
                h="3px"
                bg="black"
                borderRadius="md"
                transition="opacity 0.3s"
                opacity={isMenuOpen ? 0 : 1}
                position="absolute"
                top="10px"
              />
              <Box
                w="full"
                h="3px"
                bg="black"
                borderRadius="md"
                transition="transform 0.3s, bottom 0.3s"
                position="absolute"
                bottom={isMenuOpen ? "10px" : "0"}
                transform={isMenuOpen ? "rotate(-45deg)" : "rotate(0)"}
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      {isMenuOpen && (
        <Box
          ref={menuRef}
          position="absolute"
          top="64px"
          left="0"
          w="full"
          bg="white"
          boxShadow="lg"
          zIndex="1000"
        >
          <VStack spacing={4} py={4}>
            <Link
              href="#features"
              fontFamily="roboto"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Возможности
            </Link>
            <Link
              href="#how-it-works"
              fontFamily="roboto"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Как это работает
            </Link>
            <Link
              href="#pricing"
              fontFamily="roboto"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Цены
            </Link>
            <Button colorScheme="blue" fontFamily="roboto" bgColor="blue.600" onClick={handleLoginClick}>
              Вход / Регистрация
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
