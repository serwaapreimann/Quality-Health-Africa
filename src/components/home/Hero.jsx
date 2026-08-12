import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

// HERO IMAGES
import careImage from "../../assets/images/qha-care.jpg";
import womenImage from "../../assets/images/qha-hero--3.jpg";
import infrastructureImage from "../../assets/images/qha-hero--1.jpg";
import communityImage from "../../assets/images/qha-hero--5.jpg";

const heroPanels = [
  {
    label: "",
    image: careImage,
  },
  {
    label: "",
    image: womenImage,
  },
  {
    label: "",
    image: infrastructureImage,
  },
  {
    label: "",
    image: communityImage,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.35,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <Box
      as="section"
      position="relative"
      h={{ base: "78svh", md: "70vh" }}
      minH={{ base: "620px", md: "600px" }}
      overflow="hidden"
      bg="qha.black"
    >
      {/* =====================================================
          DESKTOP / TABLET — FOUR IMAGE PANELS
      ===================================================== */}
      <Flex
        display={{ base: "none", md: "flex" }}
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
      >
        {heroPanels.map((panel, index) => {
          const isActive = activePanel === index;

          const anotherIsActive =
            activePanel !== null && activePanel !== index;

          return (
            <Box
              key={index}
              position="relative"
              flex={
                isActive
                  ? 1.55
                  : anotherIsActive
                    ? 0.82
                    : 1
              }
              minW="0"
              overflow="hidden"
              cursor="pointer"
              transition="flex 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
              onMouseEnter={() => setActivePanel(index)}
              onMouseLeave={() => setActivePanel(null)}
            >
              {/* IMAGE REVEAL */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  inset: "-5%",
                }}
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgImage={`url(${panel.image})`}
                  bgSize="cover"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  transform={
                    isActive
                      ? "scale(1.12)"
                      : "scale(1)"
                  }
                  transition="transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
                  willChange="transform"
                />
              </motion.div>

              {/* PANEL DARKENING */}
              <Box
                position="absolute"
                inset="0"
                bg={
                  isActive
                    ? "rgba(0, 0, 0, 0.18)"
                    : anotherIsActive
                      ? "rgba(0, 0, 0, 0.48)"
                      : "rgba(0, 0, 0, 0.32)"
                }
                transition="background 0.5s ease"
              />

              {/* COLUMN DIVIDER */}
              {index !== heroPanels.length - 1 && (
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  h="100%"
                  w="1px"
                  bg="whiteAlpha.300"
                  zIndex="2"
                  pointerEvents="none"
                />
              )}

              {/* PANEL LABEL */}
              {panel.label && (
                <Box
                  position="absolute"
                  bottom={{ md: 7, lg: 9 }}
                  left={{ md: 5, lg: 7 }}
                  right={5}
                  zIndex="3"
                  color="white"
                >
                  <Text
                    fontSize="10px"
                    color="qha.red"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    mb={2}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Text>

                  <Text
                    fontSize={{
                      md: "xs",
                      lg: "sm",
                    }}
                    fontWeight="700"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                  >
                    {panel.label}
                  </Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Flex>

      {/* =====================================================
          MOBILE BACKGROUND
      ===================================================== */}
      <Box
        display={{ base: "block", md: "none" }}
        position="absolute"
        inset="0"
        overflow="hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            inset: "-3%",
          }}
        >
          <Box
            position="absolute"
            inset="0"
            bgImage={`url(${careImage})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
        </motion.div>

        <Box
          position="absolute"
          inset="0"
          bg="rgba(0, 0, 0, 0.46)"
        />
      </Box>

      {/* =====================================================
          GLOBAL HERO GRADIENT
      ===================================================== */}
      <Box
        position="absolute"
        inset="0"
        zIndex="2"
        bgGradient="
          linear(
            to-b,
            rgba(0,0,0,0.42) 0%,
            rgba(0,0,0,0.08) 38%,
            rgba(0,0,0,0.15) 60%,
            rgba(0,0,0,0.55) 100%
          )
        "
        pointerEvents="none"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <Flex
        position="relative"
        zIndex="5"
        h="100%"
        align="center"
        justify="center"
        px={{
          base: 5,
          sm: 7,
          md: 10,
          lg: 14,
        }}
        pt={{
          base: "120px",
          md: "30px",
        }}
        pb={{
          base: 14,
          md: 120,
        }}
        pointerEvents="none"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          <Box
            w="100%"
            textAlign="center"
            color="white"
          >
            {/* MAIN HEADLINE */}
            <motion.div variants={fadeUp}>
              <Heading
                as="h1"
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                  lg: "7xl",
                  xl: "8xl",
                }}
                lineHeight={{
                  base: "1.02",
                  md: "0.96",
                }}
                letterSpacing={{
                  base: "-0.035em",
                  md: "-0.05em",
                }}
                fontWeight="700"
              >
                Healthcare should
                <br />
                reach everyone.
              </Heading>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.div variants={fadeUp}>
              <Text
                mt={{
                  base: 6,
                  md: 8,
                }}
                mx="auto"
                maxW="680px"
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "lg",
                }}
                lineHeight={{
                  base: "1.7",
                  md: "1.8",
                }}
                color="whiteAlpha.900"
              >
                Advancing health equity across Africa through direct
                healthcare, medical resources, sustainable infrastructure,
                and global collaboration.
              </Text>
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div variants={fadeUp}>
              <Flex
                mt={{
                  base: 8,
                  md: 10,
                }}
                gap={3}
                justify="center"
                direction={{
                  base: "column",
                  sm: "row",
                }}
                align="center"
                pointerEvents="auto"
              >
                <Button
                  bg="qha.red"
                  color="white"
                  borderRadius="full"
                  px={9}
                  h="52px"
                  minW={{
                    base: "100%",
                    sm: "auto",
                  }}
                  fontSize="sm"
                  fontWeight="700"
                  _hover={{
                    bg: "qha.redDark",
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.18)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.25s ease"
                >
                  Explore Our Work
                </Button>

                <Button
                  variant="outline"
                  border="1px solid"
                  borderColor="whiteAlpha.700"
                  color="white"
                  borderRadius="full"
                  px={9}
                  h="52px"
                  minW={{
                    base: "100%",
                    sm: "auto",
                  }}
                  bg="rgba(255,255,255,0.08)"
                  backdropFilter="blur(8px)"
                  fontSize="sm"
                  fontWeight="700"
                  _hover={{
                    bg: "white",
                    borderColor: "white",
                    color: "qha.black",
                    transform: "translateY(-2px)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.25s ease"
                >
                  Watch Our Story
                </Button>
              </Flex>
            </motion.div>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
}

export default Hero;