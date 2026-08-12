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

import founderImage from "../assets/images/founder/qha-image--5.jpg";

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

const leadershipAreas = [
  {
    number: "01",
    title: "Military Leadership",
    description:
      "A decorated U.S. Marine Corps Combat Veteran whose service includes experience as a former Pentagon Attaché and NCOIC under the Commandant of the Marine Corps.",
  },
  {
    number: "02",
    title: "Nonprofit Leadership",
    description:
      "Founder of Quality Health Africa, advancing access to primary healthcare and supporting communities facing significant barriers to care.",
  },
  {
    number: "03",
    title: "Global Enterprise",
    description:
      "CEO of SpherePoint Conglomerate Limited, working across infrastructure, agriculture, real estate, and construction management.",
  },
  {
    number: "04",
    title: "Community Advocacy",
    description:
      "A public speaker, youth advocate, and community builder committed to sustainable impact across public, private, military, and humanitarian sectors.",
  },
];

function Founder() {
  return (
    <Box bg="qha.warmWhite">
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
            base: 18,
            md: 24,
            lg: 28,
          }}
        >
          <Box maxW="1500px" mx="auto">
            <Grid
              templateColumns={{
                base: "1fr",
                lg: "0.95fr 1.05fr",
              }}
              gap={{
                base: 10,
                lg: 16,
                xl: 22,
              }}
              alignItems="center"
            >
              {/* TEXT */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeUp}>
                    <Flex align="center" gap={4} mb={8}>
                      <Text
                        color="qha.red"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                      >
                        Our Founder
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
                      as="h1"
                      color="qha.black"
                      fontSize={{
                        base: "4xl",
                        sm: "5xl",
                        md: "6xl",
                        lg: "7xl",
                        xl: "8xl",
                      }}
                      lineHeight={{
                        base: "1.03",
                        md: "0.98",
                      }}
                      letterSpacing="-0.05em"
                      fontWeight="700"
                    >
                      Sergeant
                      <br />
                      Erwin Boateng
                    </Heading>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={7}
                      color="qha.red"
                      fontSize={{
                        base: "sm",
                        md: "md",
                      }}
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.12em"
                    >
                      Founder, Quality Health Africa
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={5}
                      maxW="620px"
                      color="gray.600"
                      fontSize={{
                        base: "lg",
                        md: "xl",
                      }}
                      lineHeight="1.8"
                    >
                      Decorated U.S. Marine Corps Combat Veteran,
                      entrepreneur, global leader, and community advocate.
                    </Text>
                  </motion.div>
                </motion.div>
              </GridItem>

              {/* PORTRAIT */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeRight}
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius={{
                      base: "22px",
                      md: "30px",
                    }}
                    h={{
                      base: "480px",
                      sm: "560px",
                      md: "650px",
                      lg: "720px",
                    }}
                  >
                    <Image
                      src={founderImage}
                      alt="Sergeant Erwin Boateng"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center top"
                      transition="transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
                      _hover={{
                        transform: "scale(1.035)",
                      }}
                    />

                    <Box
                      position="absolute"
                      inset="0"
                      bgGradient="
                        linear(
                          to-t,
                          rgba(0,0,0,0.38),
                          rgba(0,0,0,0.02) 55%
                        )
                      "
                    />

                    <Box
                      position="absolute"
                      bottom={{
                        base: 5,
                        md: 7,
                      }}
                      left={{
                        base: 5,
                        md: 7,
                      }}
                    >
                      <Text
                        color="white"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.14em"
                      >
                        Leadership • Service • Impact
                      </Text>
                    </Box>
                  </Box>
                </motion.div>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        {/* =====================================================
            BIOGRAPHY
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
            base: 20,
            md: 26,
            lg: 30,
          }}
        >
          <Box maxW="1500px" mx="auto">
            <Grid
              templateColumns={{
                base: "1fr",
                lg: "0.65fr 1.35fr",
              }}
              gap={{
                base: 8,
                lg: 18,
              }}
            >
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  variants={fadeLeft}
                >
                  <Flex
                    align="center"
                    gap={4}
                  >
                    <Text
                      color="whiteAlpha.700"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.2em"
                    >
                      His Story
                    </Text>

                    <Box
                      w="55px"
                      h="2px"
                      bg="qha.red"
                    />
                  </Flex>
                </motion.div>
              </GridItem>

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
                      maxW="950px"
                      fontSize={{
                        base: "3xl",
                        sm: "4xl",
                        md: "5xl",
                        lg: "6xl",
                      }}
                      lineHeight="1.08"
                      letterSpacing="-0.04em"
                      fontWeight="600"
                    >
                      A career shaped by service, leadership, and
                      sustainable impact.
                    </Heading>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={8}
                      maxW="920px"
                      color="whiteAlpha.800"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                    >
                      Sergeant Erwin Boateng is the founder of Quality
                      Health Africa and a decorated U.S. Marine Corps
                      Combat Veteran whose career spans military service,
                      nonprofit leadership, global consulting,
                      entrepreneurship, project management, real estate
                      development, agriculture, information technology,
                      public speaking, and youth advocacy.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="920px"
                      color="whiteAlpha.800"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                    >
                      With more than 15 years of experience across public,
                      private, military, and humanitarian sectors, his
                      work has centered on building organizations,
                      partnerships, and systems capable of creating
                      lasting impact.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="920px"
                      color="whiteAlpha.800"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                    >
                      His military service includes experience as a
                      former Pentagon Attaché and NCOIC under the
                      Commandant of the Marine Corps. Beyond his military
                      career, he has led ventures spanning
                      infrastructure, agriculture, real estate,
                      construction management, and international
                      consulting.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="920px"
                      color="white"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                      fontWeight="500"
                    >
                      He also serves as CEO of SpherePoint Conglomerate
                      Limited, a global consulting firm delivering
                      solutions across infrastructure, agriculture, real
                      estate, and construction management.
                    </Text>
                  </motion.div>
                </motion.div>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        {/* =====================================================
            LEADERSHIP AREAS
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
                <Flex align="center" gap={4} mb={8}>
                  <Text
                    color="qha.black"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Leadership Across Sectors
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
                  maxW="950px"
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
                  Experience built across very different worlds.
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
              {leadershipAreas.map((item, index) => (
                <motion.div
                  key={item.number}
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
                      {item.number}
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
                      {item.title}
                    </Heading>

                    <Text
                      mt={5}
                      color="gray.600"
                      fontSize="sm"
                      lineHeight="1.8"
                    >
                      {item.description}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        {/* =====================================================
            QHA PURPOSE
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
              <Text
                color="qha.red"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.2em"
                mb={7}
              >
                Through Quality Health Africa
              </Text>

              <Heading
                as="h2"
                maxW="1150px"
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
                Bringing a lifetime of leadership toward one mission:
                better healthcare access.
              </Heading>

              <Text
                mt={{
                  base: 8,
                  md: 10,
                }}
                maxW="850px"
                color="gray.600"
                fontSize={{
                  base: "md",
                  md: "lg",
                }}
                lineHeight="1.9"
              >
                Through QHA, Erwin brings his experience across military
                service, entrepreneurship, global development, and
                community leadership together around a central goal:
                expanding access to quality primary healthcare and
                strengthening the systems underserved African
                communities depend on.
              </Text>
            </motion.div>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Founder;