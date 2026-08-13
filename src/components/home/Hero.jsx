import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { motion } from "framer-motion";

// LOCAL HERO VIDEO
import heroVideo from "../../assets/videos/qha-hero.mp4";


// ============================================================
// FRAMER MOTION
// ============================================================

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
  return (
    <Box
      as="section"
      position="relative"
      h={{
        base: "78svh",
        md: "78vh",
        lg: "82vh",
      }}
      minH={{
        base: "620px",
        md: "620px",
      }}
      maxH="900px"
      overflow="hidden"
      bg="qha.black"
    >

      {/* =====================================================
          LOCAL BACKGROUND VIDEO
      ===================================================== */}
      <Box
        as="video"
        position="absolute"
        inset="0"
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </Box>


      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}
      <Box
        position="absolute"
        inset="0"
        zIndex="1"
        bg="rgba(0,0,0,0.25)"
        pointerEvents="none"
      />


      {/* =====================================================
          CINEMATIC GRADIENT
      ===================================================== */}
      <Box
        position="absolute"
        inset="0"
        zIndex="2"
        bgGradient="
          linear(
            to-b,
            rgba(0,0,0,0.46) 0%,
            rgba(0,0,0,0.12) 32%,
            rgba(0,0,0,0.18) 58%,
            rgba(0,0,0,0.68) 100%
          )
        "
        pointerEvents="none"
      />


      {/* =====================================================
          SUBTLE SIDE GRADIENT
      ===================================================== */}
      <Box
        position="absolute"
        inset="0"
        zIndex="2"
        bgGradient="
          linear(
            to-r,
            rgba(0,0,0,0.18),
            transparent 30%,
            transparent 70%,
            rgba(0,0,0,0.12)
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
          base: "100px",
          md: "60px",
        }}
        pb={{
          base: 14,
          md: 16,
        }}
        pointerEvents="none"
      >

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: "100%",
            maxWidth: "1100px",
          }}
        >

          <Box
            w="100%"
            textAlign="center"
            color="white"
          >

            {/* =============================================
                SMALL LABEL
            ============================================= */}
            <motion.div variants={fadeUp}>
              <Flex
                justify="center"
                align="center"
                gap={4}
                mb={{
                  base: 6,
                  md: 7,
                }}
              >
                <Box
                  w={{
                    base: "30px",
                    md: "45px",
                  }}
                  h="1px"
                  bg="qha.red"
                />

                <Text
                  color="whiteAlpha.900"
                  fontSize="10px"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                >
                  Quality Health Africa
                </Text>

                <Box
                  w={{
                    base: "30px",
                    md: "45px",
                  }}
                  h="1px"
                  bg="qha.red"
                />
              </Flex>
            </motion.div>


            {/* =============================================
                MAIN HEADLINE
            ============================================= */}
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
                textShadow="0 3px 25px rgba(0,0,0,0.28)"
              >
                Healthcare should
                <br />
                reach everyone.
              </Heading>
            </motion.div>


            {/* =============================================
                DESCRIPTION
            ============================================= */}
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
                textShadow="0 2px 14px rgba(0,0,0,0.3)"
              >
                Advancing health equity across Africa through direct
                healthcare, medical resources, sustainable
                infrastructure, and global collaboration.
              </Text>
            </motion.div>


            {/* =============================================
                CTA BUTTONS
            ============================================= */}
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

                {/* PRIMARY CTA */}
                <Button
                  as={RouterLink}
                  to="/about/mission"
                  bg="red"
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
                      "0 12px 30px rgba(0,0,0,0.25)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.25s ease"
                >
                  Explore Our Work
                </Button>


                {/* SECONDARY CTA */}
                <Button
                  as={RouterLink}
                  to="/stories"
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
                    color: "black",
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


      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}
      <Flex
        display={{
          base: "none",
          md: "flex",
        }}
        position="absolute"
        zIndex="5"
        left={{
          md: 10,
          lg: 14,
        }}
        right={{
          md: 10,
          lg: 14,
        }}
        bottom={7}
        align="center"
        justify="space-between"
        pointerEvents="none"
      >

        <Text
          color="whiteAlpha.600"
          fontSize="10px"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="0.16em"
        >
          Quality Health Africa
        </Text>


        <Flex
          align="center"
          gap={3}
        >

          <Text
            color="whiteAlpha.600"
            fontSize="10px"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.16em"
          >
            Health Equity In Action
          </Text>
        </Flex>

      </Flex>

    </Box>
  );
}

export default Hero;