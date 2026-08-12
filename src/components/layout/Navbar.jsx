import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import qhaLogo from "../../assets/logos/qha--logo.png";
import navigation from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileMenu(null);
  };

  const toggleMobileSubmenu = (label) => {
    setOpenMobileMenu((current) =>
      current === label ? null : label
    );
  };

  return (
    <>
      <Box
        as="header"
        position="relative"
        top="0"
        left="0"
        w="100%"
        zIndex="100"
        px={{ base: 4, sm: 5, md: 8, lg: 10, xl: 14 }}
        py={{ base: 4, md: 5 }}
      >
        <Flex
          maxW="1600px"
          mx="auto"
          align="center"
          justify="space-between"
        >
          {/* LOGO */}
          <Link
            href="/"
            zIndex="102"
            flexShrink={0}
            onClick={closeMenu}
            _hover={{ textDecoration: "none" }}
          >
            <Image
              src={qhaLogo}
              alt="Quality Health Africa"
              w={{ base: "145px", md: "170px", lg: "185px" }}
              h="auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <HStack
            display={{ base: "none", lg: "flex" }}
            spacing={{ lg: 4, xl: 7 }}
          >
            {navigation.map((item) => (
              <Box
                key={item.label}
                position="relative"
                onMouseEnter={() =>
                  item.children && setOpenDesktopMenu(item.label)
                }
                onMouseLeave={() => setOpenDesktopMenu(null)}
              >
                <Link
                  href={item.href}
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                  color="teal.900"
                  fontSize="sm"
                  fontWeight="600"
                  py={4}
                  transition="color 0.2s ease"
                  _hover={{
                    color: "qha.orange",
                    textDecoration: "none",
                  }}
                >
                  {item.label}

                  {item.children && (
                    <Text
                      as="span"
                      fontSize="10px"
                      transform={
                        openDesktopMenu === item.label
                          ? "rotate(180deg)"
                          : "rotate(0deg)"
                      }
                      transition="transform 0.2s ease"
                    >
                      ▼
                    </Text>
                  )}
                </Link>

                {/* DESKTOP DROPDOWN */}
                {item.children && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="50%"
                    transform="translateX(-50%)"
                    minW={
                      item.label === "Programs"
                        ? "330px"
                        : "240px"
                    }
                    bg="white"
                    borderRadius="18px"
                    boxShadow="0 20px 50px rgba(0,0,0,0.15)"
                    p={3}
                    opacity={
                      openDesktopMenu === item.label ? 1 : 0
                    }
                    visibility={
                      openDesktopMenu === item.label
                        ? "visible"
                        : "hidden"
                    }
                    translateY={
                      openDesktopMenu === item.label
                        ? "0"
                        : "-8px"
                    }
                    transition="all 0.2s ease"
                  >
                    <VStack align="stretch" spacing={0}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          px={4}
                          py={3}
                          borderRadius="12px"
                          color="qha.charcoal"
                          fontSize="sm"
                          fontWeight="500"
                          transition="all 0.2s ease"
                          _hover={{
                            bg: "qha.tealLight",
                            color: "qha.tealDark",
                            textDecoration: "none",
                            pl: 5,
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </VStack>
                  </Box>
                )}
              </Box>
            ))}
          </HStack>

          {/* RIGHT SIDE */}
          <HStack spacing={{ base: 2, sm: 3, md: 4 }}>
            <Button
              bg="qha.orange"
              color="white"
              borderRadius="full"
              px={{ base: 4, sm: 5, md: 7 }}
              h={{ base: "42px", md: "46px" }}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="700"
              _hover={{
                bg: "qha.orangeDark",
                transform: "translateY(-2px)",
              }}
              transition="all 0.25s ease"
            >
              Donate
            </Button>

            {/* MOBILE HAMBURGER */}
            <Box
              as="button"
              display={{ base: "flex", lg: "none" }}
              position="relative"
              alignItems="center"
              justifyContent="center"
              w={{ base: "46px", md: "50px" }}
              h={{ base: "46px", md: "50px" }}
              borderRadius="full"
              bg="qha.teal"
              zIndex="102"
              flexShrink={0}
              cursor="pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              _hover={{ bg: "qha.tealDark" }}
              transition="all 0.3s ease"
            >
              <Box
                position="absolute"
                w="20px"
                h="2px"
                bg="white"
                borderRadius="full"
                transform={
                  isOpen
                    ? "rotate(45deg)"
                    : "translateY(-4px)"
                }
                transition="all 0.35s ease"
              />

              <Box
                position="absolute"
                w={isOpen ? "20px" : "15px"}
                h="2px"
                bg="white"
                borderRadius="full"
                transform={
                  isOpen
                    ? "rotate(-45deg)"
                    : "translate(2.5px, 4px)"
                }
                transition="all 0.35s ease"
              />
            </Box>
          </HStack>
        </Flex>
      </Box>

      {/* MOBILE FULLSCREEN MENU */}
      <Box
        position="fixed"
        inset="0"
        bg="qha.tealDark"
        zIndex="90"
        display={{ base: "block", lg: "none" }}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        transform={isOpen ? "translateY(0)" : "translateY(-20px)"}
        transition="opacity 0.35s ease, transform 0.4s ease"
        pointerEvents={isOpen ? "auto" : "none"}
        overflowY="auto"
      >
        <Flex
          minH="100%"
          direction="column"
          px={{ base: 6, md: 10 }}
          pt={{ base: "120px", md: "135px" }}
          pb={10}
        >
          <VStack
            align="stretch"
            spacing={0}
            maxW="720px"
            w="100%"
            mx="auto"
          >
            {navigation.map((item, index) => {
              const hasChildren = Boolean(item.children);
              const submenuOpen =
                openMobileMenu === item.label;

              return (
                <Box
                  key={item.label}
                  borderBottom="1px solid"
                  borderColor="whiteAlpha.300"
                >
                  <Flex
                    align="center"
                    justify="space-between"
                    py={{ base: 4, md: 5 }}
                  >
                    <Link
                      href={item.href}
                      color="white"
                      fontSize={{
                        base: "2xl",
                        sm: "3xl",
                        md: "4xl",
                      }}
                      fontWeight="600"
                      letterSpacing="-0.03em"
                      onClick={
                        hasChildren ? undefined : closeMenu
                      }
                      _hover={{
                        color: "qha.orange",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>

                    <HStack spacing={4}>
                      <Text
                        color="qha.orange"
                        fontSize="xs"
                        fontWeight="700"
                        letterSpacing="0.12em"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Text>

                      {hasChildren && (
                        <Box
                          as="button"
                          color="white"
                          fontSize="2xl"
                          lineHeight="1"
                          w="36px"
                          h="36px"
                          onClick={() =>
                            toggleMobileSubmenu(item.label)
                          }
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          {submenuOpen ? "−" : "+"}
                        </Box>
                      )}
                    </HStack>
                  </Flex>

                  {/* MOBILE SUBMENU */}
                  {hasChildren && (
                    <Collapse in={submenuOpen} animateOpacity>
                      <VStack
                        align="stretch"
                        spacing={0}
                        pb={5}
                        pl={{ base: 2, md: 4 }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            py={2.5}
                            color="whiteAlpha.800"
                            fontSize={{
                              base: "md",
                              md: "lg",
                            }}
                            fontWeight="500"
                            onClick={closeMenu}
                            _hover={{
                              color: "qha.orange",
                              textDecoration: "none",
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </VStack>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </VStack>

          <Box
            maxW="720px"
            w="100%"
            mx="auto"
            mt={10}
          >
            <Button
              w="100%"
              h="54px"
              bg="qha.orange"
              color="white"
              borderRadius="full"
              fontWeight="700"
              onClick={closeMenu}
              _hover={{ bg: "qha.orangeDark" }}
            >
              Support Our Mission
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;