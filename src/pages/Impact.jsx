import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// ------------------------------------------------------------
// TEMPORARY IMAGES
// Replace these with dedicated mission images when available.
// ------------------------------------------------------------
import missionHeroImage from "../assets/images/impact/qha-image--1.jpg";
import missionCareImage from "../assets/images/impact/qha-image--2.jpg";
import missionInfrastructureImage from "../assets/images/qha-hero--1.jpg";
import missionImage from "../assets/images/impact/qha-image--9.jpg";


// ============================================================
// MOTION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};


// ============================================================
// MISSION PILLARS
// ============================================================

const missionPillars = [
  {
    number: "01",
    title: "Direct Healthcare",
    description:
      "Bringing essential healthcare services directly into underserved communities and connecting people with the care they need.",
  },

  {
    number: "02",
    title: "Medical Equipment",
    description:
      "Strengthening hospitals and clinics with essential equipment, supplies, and resources that expand local capacity.",
  },

  {
    number: "03",
    title: "Healthcare Infrastructure",
    description:
      "Supporting the development of sustainable hospitals, clinics, and community-centered healthcare facilities.",
  },

  {
    number: "04",
    title: "Global Collaboration",
    description:
      "Convening healthcare leaders, policymakers, partners, and advocates through the Quality Health Africa Conference.",
  },
];


function Mission() {
  return (
    <Box bg="qha.warmWhite">

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />


      <Box as="main">

        {/* =====================================================
            HERO
        ===================================================== */}
        <Box
          as="section"
          px={{
            base: 5,
            sm: 7,
            md: 10,
            lg: 14,
            xl: 16,
          }}
          pt={{
            base: 16,
            md: 20,
            lg: 24,
          }}
          pb={{
            base: 16,
            md: 22,
            lg: 26,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* LABEL */}
              <motion.div variants={fadeUp}>
                <Flex
                  align="center"
                  gap={4}
                  mb={{
                    base: 8,
                    md: 11,
                  }}
                >
                  <Text
                    color="qha.red"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Our Mission
                  </Text>

                  <Box
                    w="55px"
                    h="2px"
                    bg="qha.red"
                  />
                </Flex>
              </motion.div>


              {/* HEADLINE */}
              <motion.div variants={fadeUp}>
                <Heading
                  as="h1"
                  maxW="1150px"
                  color="qha.black"
                  fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "6xl",
                    lg: "7xl",
                    xl: "8xl",
                  }}
                  lineHeight={{
                    base: "1.04",
                    md: "0.98",
                  }}
                  letterSpacing="-0.05em"
                  fontWeight="700"
                >
                  Advancing health equity across Africa.
                </Heading>
              </motion.div>


              {/* INTRO */}
              <motion.div variants={fadeUp}>
                <Text
                  mt={{
                    base: 8,
                    md: 10,
                  }}
                  ml={{
                    base: 0,
                    lg: "38%",
                  }}
                  maxW="760px"
                  color="gray.600"
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  lineHeight="1.8"
                >
                  We believe every person deserves access to quality
                  healthcare regardless of geography, income, or social
                  status.
                </Text>
              </motion.div>
            </motion.div>

          </Box>
        </Box>


        {/* =====================================================
            HERO IMAGE
        ===================================================== */}
        <Box
          px={{
            base: 5,
            sm: 7,
            md: 10,
            lg: 14,
            xl: 16,
          }}
          pb={{
            base: 20,
            md: 28,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Box
                position="relative"
                overflow="hidden"
                borderRadius={{
                  base: "20px",
                  md: "28px",
                }}
                h={{
                  base: "420px",
                  sm: "500px",
                  md: "620px",
                  lg: "700px",
                }}
              >
                <Image
                  src={missionHeroImage}
                  alt="Quality Health Africa mission"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 1s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{
                    transform: "scale(1.035)",
                  }}
                />

                {/* OVERLAY */}
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="
                    linear(
                      to-t,
                      rgba(0,0,0,0.45),
                      rgba(0,0,0,0.05) 55%
                    )
                  "
                />

                <Box
                  position="absolute"
                  left={{
                    base: 5,
                    md: 8,
                  }}
                  bottom={{
                    base: 5,
                    md: 8,
                  }}
                >
                  <Text
                    color="white"
                    fontSize={{
                      base: "sm",
                      md: "md",
                    }}
                    fontWeight="700"
                    letterSpacing="0.08em"
                    textTransform="uppercase"
                  >
                    Health equity in action
                  </Text>
                </Box>
              </Box>
            </motion.div>

          </Box>
        </Box>


      {/* =====================================================
    FULL MISSION STATEMENT
===================================================== */}
<Box
  as="section"
  bg="black"
  color="white"
  px={{
    base: 5,
    sm: 7,
    md: 10,
    lg: 14,
    xl: 16,
  }}
  py={{
    base: 14,
    md: 18,
    lg: 20,
  }}
>
  <Box maxW="1500px" mx="auto">

    {/* =================================================
        SECTION LABEL
    ================================================= */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={fadeUp}
    >
      <Flex
        align="center"
        gap={4}
        mb={{
          base: 8,
          md: 10,
          lg: 12,
        }}
      >
        <Text
          color="whiteAlpha.700"
          fontSize="xs"
          fontWeight="800"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          Our Commitment
        </Text>

        <Box
          w="55px"
          h="2px"
          bg="qha.red"
        />
      </Flex>
    </motion.div>


    {/* =================================================
        MISSION + IMAGE
    ================================================= */}
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "1.25fr 0.75fr",
      }}
      gap={{
        base: 12,
        md: 14,
        lg: 16,
        xl: 20,
      }}
      alignItems="center"
    >

      {/* =================================================
          MISSION — LEFT
      ================================================= */}
      <GridItem>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={staggerContainer}
        >

          <motion.div variants={fadeUp}>
            <Heading
              as="h2"
              maxW="900px"
              fontSize={{
                base: "3xl",
                sm: "4xl",
                md: "5xl",
                lg: "5xl",
                xl: "6xl",
              }}
              lineHeight="1.08"
              letterSpacing="-0.04em"
              fontWeight="600"
            >
              Healthcare is not a privilege.
              <br />
              It is a necessity.
            </Heading>
          </motion.div>


          <motion.div variants={fadeUp}>
            <Text
              mt={{
                base: 7,
                md: 8,
              }}
              maxW="820px"
              color="whiteAlpha.800"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.9"
            >
              Our mission is to advance health equity across
              Africa by delivering direct healthcare services,
              donating essential medical equipment, building
              sustainable healthcare infrastructure, and
              convening the world&apos;s leading voices in
              African health through our annual conference —
              ensuring that every African, regardless of
              geography, income, or social status, has access to
              the healthcare they deserve.
            </Text>
          </motion.div>

        </motion.div>
      </GridItem>


      {/* =================================================
          CIRCULAR IMAGE — RIGHT
      ================================================= */}
      <GridItem>
        <Flex
          justify={{
            base: "center",
            lg: "flex-end",
          }}
          align="center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Box
              position="relative"
              w={{
                base: "280px",
                sm: "340px",
                md: "400px",
                lg: "420px",
                xl: "470px",
              }}
              aspectRatio="1 / 1"
            >

              {/* SUBTLE OUTER CIRCLE */}
              <Box
                position="absolute"
                inset={{
                  base: "-10px",
                  md: "-14px",
                }}
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="full"
              />


              {/* IMAGE */}
              <Box
                position="relative"
                w="100%"
                h="100%"
                borderRadius="full"
                overflow="hidden"
                zIndex="1"
              >
                <Image
                  src={missionImage}
                  alt="Quality Health Africa advancing access to healthcare"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center"
                  transition="transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Box>

            </Box>
          </motion.div>
        </Flex>
      </GridItem>

    </Grid>

  </Box>
</Box>


        {/* =====================================================
            MISSION PILLARS
        ===================================================== */}
        <Box
          as="section"
          px={{
            base: 5,
            sm: 7,
            md: 10,
            lg: 14,
            xl: 16,
          }}
          py={{
            base: 20,
            md: 28,
            lg: 32,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
            >

              <motion.div variants={fadeUp}>
                <Flex
                  align="center"
                  gap={4}
                  mb={8}
                >
                  <Text
                    color="qha.black"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    How We Advance The Mission
                  </Text>

                  <Box
                    w="55px"
                    h="2px"
                    bg="qha.red"
                  />
                </Flex>
              </motion.div>


              <motion.div variants={fadeUp}>
                <Heading
                  as="h2"
                  maxW="900px"
                  color="qha.black"
                  fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "6xl",
                    lg: "7xl",
                  }}
                  lineHeight="1"
                  letterSpacing="-0.045em"
                  fontWeight="700"
                >
                  Four commitments.
                  <br />
                  One mission.
                </Heading>
              </motion.div>

            </motion.div>


            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 4,
              }}
              mt={{
                base: 14,
                md: 18,
              }}
              borderTop="1px solid"
              borderColor="gray.300"
            >
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                >
                  <Box
                    h="100%"
                    py={{
                      base: 8,
                      md: 10,
                    }}
                    px={{
                      base: 0,
                      md: 6,
                      lg: 7,
                    }}
                    borderBottom={{
                      base: "1px solid",
                      lg: "none",
                    }}
                    borderLeft={{
                      base: "none",
                      lg: index === 0 ? "none" : "1px solid",
                    }}
                    borderColor="gray.300"
                  >
                    <Text
                      color="qha.red"
                      fontSize="xs"
                      fontWeight="800"
                      letterSpacing="0.18em"
                    >
                      {pillar.number}
                    </Text>

                    <Heading
                      as="h3"
                      mt={5}
                      color="qha.black"
                      fontSize={{
                        base: "2xl",
                        lg: "2xl",
                        xl: "3xl",
                      }}
                      lineHeight="1.1"
                      letterSpacing="-0.03em"
                      fontWeight="650"
                    >
                      {pillar.title}
                    </Heading>

                    <Text
                      mt={5}
                      color="gray.600"
                      fontSize="sm"
                      lineHeight="1.8"
                    >
                      {pillar.description}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>

          </Box>
        </Box>


        {/* =====================================================
            PHOTO STORY
        ===================================================== */}
        <Box
          as="section"
          px={{
            base: 5,
            sm: 7,
            md: 10,
            lg: 14,
            xl: 16,
          }}
          pb={{
            base: 20,
            md: 28,
            lg: 32,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
              }}
              gap={{
                base: 5,
                md: 8,
              }}
            >

              {/* PHOTO 1 */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  variants={fadeLeft}
                >
                  <Box
                    overflow="hidden"
                    borderRadius={{
                      base: "18px",
                      md: "24px",
                    }}
                    h={{
                      base: "360px",
                      md: "520px",
                    }}
                  >
                    <Image
                      src={missionCareImage}
                      alt="Community healthcare"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.8s ease"
                      _hover={{
                        transform: "scale(1.04)",
                      }}
                    />
                  </Box>
                </motion.div>
              </GridItem>


              {/* PHOTO 2 */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  variants={fadeRight}
                >
                  <Box
                    overflow="hidden"
                    borderRadius={{
                      base: "18px",
                      md: "24px",
                    }}
                    h={{
                      base: "360px",
                      md: "520px",
                    }}
                  >
                    <Image
                      src={missionInfrastructureImage}
                      alt="Healthcare infrastructure"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.8s ease"
                      _hover={{
                        transform: "scale(1.04)",
                      }}
                    />
                  </Box>
                </motion.div>
              </GridItem>

            </Grid>

          </Box>
        </Box>


        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}
        <Box
          as="section"
          bg="qha.lightGray"
          px={{
            base: 5,
            sm: 7,
            md: 10,
            lg: 14,
            xl: 16,
          }}
          py={{
            base: 20,
            md: 26,
            lg: 30,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={fadeUp}
            >
              <Heading
                as="h2"
                maxW="1100px"
                color="qha.black"
                fontSize={{
                  base: "4xl",
                  sm: "5xl",
                  md: "6xl",
                  lg: "7xl",
                }}
                lineHeight="1"
                letterSpacing="-0.045em"
                fontWeight="700"
              >
                Quality healthcare should not depend on where you live,
                what you earn, or your social status.
              </Heading>

              <Box
                mt={{
                  base: 8,
                  md: 10,
                }}
                w="90px"
                h="4px"
                bg="qha.red"
              />
            </motion.div>

          </Box>
        </Box>

      </Box>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

    </Box>
  );
}

export default Mission;