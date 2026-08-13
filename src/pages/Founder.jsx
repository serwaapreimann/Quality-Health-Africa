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


// ============================================================
// FRAMER MOTION
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
// LEADERSHIP AREAS
// ============================================================

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


// ============================================================
// FOUNDER SNAPSHOT
// ============================================================

const founderSnapshot = [
  {
    value: "15+",
    title: "Years",
    description: "Leadership & global experience",
  },

  {
    value: "USMC",
    title: "Combat Veteran",
    description: "Service, discipline & leadership",
  },

  {
    value: "QHA",
    title: "Founder",
    description: "Health equity & community impact",
  },
];


// ============================================================
// VIDEO
// ============================================================

const founderVideo = {
  youtubeId: "R_OIMjRlWBw",
  title: "The Story of Sergeant Erwin Boateng",
};


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
            base: 14,
            md: 18,
            lg: 20,
          }}
          pb={{
            base: 16,
            md: 20,
            lg: 24,
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

              {/* =================================================
                  HERO TEXT
              ================================================= */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >

                  <motion.div variants={fadeUp}>
                    <Flex
                      align="center"
                      gap={4}
                      mb={{
                        base: 6,
                        md: 8,
                      }}
                    >
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


              {/* =================================================
                  PORTRAIT
              ================================================= */}
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
                      base: "460px",
                      sm: "540px",
                      md: "620px",
                      lg: "680px",
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
                          rgba(0,0,0,0.42),
                          rgba(0,0,0,0.02) 58%
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
            BIOGRAPHY / HIS STORY
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
            base: 16,
            md: 20,
            lg: 22,
          }}
        >
          <Box maxW="1500px" mx="auto">

            {/* SECTION LABEL */}
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
                mb={{
                  base: 8,
                  md: 10,
                }}
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


            {/* =================================================
                STORY + VIDEO
            ================================================= */}
            <Grid
              templateColumns={{
                base: "1fr",
                lg: "minmax(0, 1.65fr) minmax(350px, 0.85fr)",
              }}
              gap={{
                base: 12,
                lg: 14,
                xl: 18,
              }}
              alignItems="start"
            >

              {/* =================================================
                  LEFT — BIOGRAPHY
              ================================================= */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.12,
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
                      A career shaped by service, leadership, and
                      sustainable impact.
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={8}
                      maxW="900px"
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
                      maxW="900px"
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
                      maxW="900px"
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
                      career, he has led ventures spanning infrastructure,
                      agriculture, real estate, construction management,
                      and international consulting.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="900px"
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


              {/* =================================================
                  RIGHT — IN HIS OWN WORDS
              ================================================= */}
              <GridItem>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Box
                    position={{
                      base: "relative",
                      lg: "sticky",
                    }}
                    top={{
                      lg: "110px",
                    }}
                  >

                    {/* VIDEO LABEL */}
                    <Flex
                      align="center"
                      gap={3}
                      mb={5}
                    >
                      <Text
                        color="qha.red"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.18em"
                      >
                        In His Own Words
                      </Text>

                      <Box
                        w="35px"
                        h="1px"
                        bg="qha.red"
                      />
                    </Flex>


                    {/* VIDEO */}
                    <Box
                      position="relative"
                      w="100%"
                      overflow="hidden"
                      borderRadius={{
                        base: "18px",
                        md: "22px",
                      }}
                      bg="gray.900"
                      boxShadow="0 25px 60px rgba(0,0,0,0.35)"
                      sx={{
                        aspectRatio: "16 / 9",
                      }}
                    >
                      <Box
                        as="iframe"
                        src={`https://www.youtube-nocookie.com/embed/${founderVideo.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                        title={founderVideo.title}
                        position="absolute"
                        inset="0"
                        w="100%"
                        h="100%"
                        border="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </Box>


                    {/* VIDEO CAPTION */}
                    <Text
                      mt={5}
                      color="whiteAlpha.600"
                      fontSize="sm"
                      lineHeight="1.75"
                      maxW="440px"
                    >
                      Hear directly from our founder about the
                      experiences, values, and purpose behind Quality
                      Health Africa.
                    </Text>


                    {/* WHY QHA */}
                    <Box
                      mt={8}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text
                        color="whiteAlpha.500"
                        fontSize="10px"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.18em"
                      >
                        Why QHA
                      </Text>

                      <Text
                        mt={4}
                        maxW="440px"
                        color="white"
                        fontSize={{
                          base: "lg",
                          md: "xl",
                        }}
                        lineHeight="1.55"
                        fontWeight="500"
                      >
                        Quality Health Africa brings together a lifetime
                        of service, leadership, and community building
                        around one purpose: expanding access to quality
                        healthcare across underserved African
                        communities.
                      </Text>

                      <Text
                        mt={5}
                        color="whiteAlpha.500"
                        fontSize="xs"
                        fontWeight="700"
                        textTransform="uppercase"
                        letterSpacing="0.12em"
                      >
                        Erwin Boateng • Founder
                      </Text>
                    </Box>

                  </Box>
                </motion.div>
              </GridItem>

            </Grid>


            {/* =================================================
                FOUNDER SNAPSHOT
            ================================================= */}
            <SimpleGrid
              columns={{
                base: 1,
                sm: 3,
              }}
              mt={{
                base: 14,
                md: 18,
                lg: 20,
              }}
              borderTop="1px solid"
              borderColor="whiteAlpha.300"
            >
              {founderSnapshot.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Box
                    py={{
                      base: 7,
                      md: 9,
                    }}
                    px={{
                      base: 0,
                      sm: 5,
                      md: 7,
                    }}
                    borderBottom={{
                      base: "1px solid",
                      sm: "none",
                    }}
                    borderLeft={{
                      base: "none",
                      sm: index === 0 ? "none" : "1px solid",
                    }}
                    borderColor="whiteAlpha.300"
                  >
                    <Text
                      color="qha.red"
                      fontSize={{
                        base: "3xl",
                        md: "4xl",
                      }}
                      lineHeight="1"
                      fontWeight="700"
                      letterSpacing="-0.04em"
                    >
                      {item.value}
                    </Text>

                    <Text
                      mt={4}
                      color="white"
                      fontSize="sm"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                    >
                      {item.title}
                    </Text>

                    <Text
                      mt={2}
                      color="whiteAlpha.600"
                      fontSize="sm"
                      lineHeight="1.6"
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
            base: 18,
            md: 24,
            lg: 28,
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
                base: 12,
                md: 16,
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
            base: 18,
            md: 22,
            lg: 26,
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