import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// TEMPORARY IMAGES
// Replace these with actual health fair photos when ready
import healthFairHero from "../assets/images/impact/qha-image--1.jpg";
import healthFairImage from "../assets/images/qha-healthfair.png";


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
      staggerChildren: 0.12,
    },
  },
};


// ============================================================
// SERVICES
// ============================================================

const fairServices = [
  {
    number: "01",
    title: "NCD Screenings",
    description:
      "Free screenings for hypertension, diabetes, cardiovascular disease, and other noncommunicable diseases.",
  },

  {
    number: "02",
    title: "Maternal & Child Health",
    description:
      "Prenatal checkups, vaccinations, and other essential maternal and child health services.",
  },

  {
    number: "03",
    title: "Primary Care",
    description:
      "Vision, dental, and general primary care services delivered directly within participating communities.",
  },

  {
    number: "04",
    title: "Medications & Supplies",
    description:
      "Free medications and essential health supplies distributed to community members during each health fair.",
  },

  {
    number: "05",
    title: "Health Education",
    description:
      "Health education sessions delivered in Twi, Ga, and Ewe to improve understanding and support healthier communities.",
  },

  {
    number: "06",
    title: "Referrals",
    description:
      "Referrals to partner clinics and hospitals when community members require follow-up treatment or additional care.",
  }
];


// ============================================================
// VIDEOS
// ============================================================

const healthFairVideos = [
  {
    youtubeId: "tv-q-5-TFCw",
    title: "Quality Health Africa Quarterly Health Fair",
  },

  {
    youtubeId: "CDumIDzsKQQ",
    title: "Quality Health Africa Community Health Outreach",
  },
];


function QuarterlyHealthFairs() {
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
            base: 14,
            md: 18,
            lg: 20,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <Grid
              templateColumns={{
                base: "1fr",
                lg: "0.9fr 1.1fr",
              }}
              gap={{
                base: 10,
                lg: 14,
                xl: 18,
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
                    <Flex
                      align="center"
                      gap={4}
                      mb={7}
                    >
                      <Text
                        color="qha.red"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.2em"
                      >
                        Our Programs
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
                      }}
                      lineHeight="1"
                      letterSpacing="-0.045em"
                      fontWeight="700"
                    >
                      Quarterly
                      <br />
                      Health Fairs
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={7}
                      maxW="690px"
                      color="gray.600"
                      fontSize={{
                        base: "lg",
                        md: "xl",
                      }}
                      lineHeight="1.8"
                    >
                      Four times a year, QHA brings free, comprehensive
                      healthcare services directly into underserved
                      communities across Ghana.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={5}
                      maxW="690px"
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.85"
                    >
                      The program is designed to deliver immediate,
                      tangible care where it is needed most — combining
                      screening, treatment, education, medications, and
                      referrals in one community-centered outreach model.
                    </Text>
                  </motion.div>

                </motion.div>
              </GridItem>


              {/* IMAGE */}
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
                      base: "20px",
                      md: "28px",
                    }}
                    h={{
                      base: "400px",
                      sm: "500px",
                      md: "580px",
                      lg: "620px",
                    }}
                  >
                    <Image
                      src={healthFairHero}
                      alt="Quality Health Africa quarterly health fair"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center"
                      transition="transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
                      _hover={{
                        transform: "scale(1.04)",
                      }}
                    />

                    <Box
                      position="absolute"
                      inset="0"
                      bgGradient="
                        linear(
                          to-t,
                          rgba(0,0,0,0.42),
                          transparent 55%
                        )
                      "
                    />

                    <Text
                      position="absolute"
                      left={{
                        base: 5,
                        md: 7,
                      }}
                      bottom={{
                        base: 5,
                        md: 7,
                      }}
                      color="white"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.14em"
                    >
                      Care brought directly to communities
                    </Text>
                  </Box>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            SERVICES
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
                amount: 0.2,
              }}
              variants={staggerContainer}
            >

              <motion.div variants={fadeUp}>
                <Flex
                  align="center"
                  gap={4}
                  mb={7}
                >
                  <Text
                    color="whiteAlpha.700"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Each Health Fair Includes
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
                  Comprehensive care,
                  right where it&apos;s needed.
                </Heading>
              </motion.div>

            </motion.div>


            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 3,
              }}
              mt={{
                base: 12,
                md: 16,
              }}
              borderTop="1px solid"
              borderColor="whiteAlpha.300"
            >
              {fairServices.map((service, index) => (
                <motion.div
                  key={service.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: (index % 3) * 0.08,
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
                    }}
                    borderBottom="1px solid"
                    borderLeft={{
                      base: "none",
                      lg:
                        index % 3 === 0
                          ? "none"
                          : "1px solid",
                    }}
                    borderColor="whiteAlpha.300"
                  >

                    <Text
                      color="qha.red"
                      fontSize="xs"
                      fontWeight="800"
                      letterSpacing="0.18em"
                    >
                      {service.number}
                    </Text>


                    <Heading
                      as="h3"
                      mt={5}
                      fontSize={{
                        base: "2xl",
                        md: "3xl",
                      }}
                      lineHeight="1.1"
                      letterSpacing="-0.03em"
                      fontWeight="600"
                    >
                      {service.title}
                    </Heading>


                    <Text
                      mt={5}
                      maxW="420px"
                      color="whiteAlpha.700"
                      fontSize="sm"
                      lineHeight="1.8"
                    >
                      {service.description}
                    </Text>

                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>

          </Box>
        </Box>


        {/* =====================================================
            VIDEO 1
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
            md: 22,
            lg: 26,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <Grid
              templateColumns={{
                base: "1fr",
                lg: "0.7fr 1.3fr",
              }}
              gap={{
                base: 10,
                lg: 14,
                xl: 18,
              }}
              alignItems="center"
            >

              {/* TEXT */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fadeLeft}
                >
                  <Text
                    color="qha.red"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                  >
                    Health Fair In Action
                  </Text>

                  <Heading
                    as="h2"
                    mt={5}
                    color="qha.black"
                    fontSize={{
                      base: "3xl",
                      sm: "4xl",
                      md: "5xl",
                    }}
                    lineHeight="1.05"
                    letterSpacing="-0.04em"
                    fontWeight="700"
                  >
                    Bringing care closer.
                  </Heading>

                  <Text
                    mt={6}
                    maxW="520px"
                    color="gray.600"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    lineHeight="1.85"
                  >
                    See how QHA&apos;s quarterly health fairs bring
                    screenings, consultations, medications, health
                    education, and referrals directly into the
                    communities they serve.
                  </Text>
                </motion.div>
              </GridItem>


              {/* VIDEO */}
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
                    position="relative"
                    w="100%"
                    overflow="hidden"
                    borderRadius={{
                      base: "18px",
                      md: "24px",
                    }}
                    bg="black"
                    boxShadow="0 24px 60px rgba(0,0,0,0.15)"
                    aspectRatio="16 / 9"
                  >
                    <Box
                      as="iframe"
                      src={`https://www.youtube-nocookie.com/embed/${healthFairVideos[0].youtubeId}?rel=0`}
                      title={healthFairVideos[0].title}
                      position="absolute"
                      inset="0"
                      w="100%"
                      h="100%"
                      border="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Box>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            IMPACT
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

            <Grid
              templateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
              gap={{
                base: 10,
                lg: 16,
              }}
              alignItems="center"
            >

              {/* IMAGE */}
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
                      src={healthFairImage}
                      alt="QHA community health fair"
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


              {/* TEXT */}
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
                    <Text
                      color="qha.red"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.18em"
                    >
                      Direct Service. Immediate Impact.
                    </Text>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Heading
                      as="h2"
                      mt={5}
                      color="qha.black"
                      fontSize={{
                        base: "4xl",
                        sm: "5xl",
                        md: "6xl",
                      }}
                      lineHeight="1"
                      letterSpacing="-0.04em"
                      fontWeight="700"
                    >
                      Care that reaches people now.
                    </Heading>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Text
                      mt={7}
                      maxW="650px"
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.9"
                    >
                      Since their inception, QHA&apos;s health fairs have
                      grown into one of the organization&apos;s most
                      impactful direct-service programs, reaching
                      thousands of community members annually who would
                      otherwise go without basic care.
                    </Text>
                  </motion.div>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            VIDEO 2
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
            base: 18,
            md: 22,
            lg: 26,
          }}
        >
          <Box maxW="1500px" mx="auto">

            <Grid
              templateColumns={{
                base: "1fr",
                lg: "1.25fr 0.75fr",
              }}
              gap={{
                base: 10,
                lg: 14,
                xl: 18,
              }}
              alignItems="center"
            >

              {/* VIDEO */}
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
                    position="relative"
                    w="100%"
                    overflow="hidden"
                    borderRadius={{
                      base: "18px",
                      md: "24px",
                    }}
                    bg="gray.900"
                    boxShadow="0 24px 60px rgba(0,0,0,0.35)"
                    aspectRatio="16 / 9"
                  >
                    <Box
                      as="iframe"
                      src={`https://www.youtube-nocookie.com/embed/${healthFairVideos[1].youtubeId}?rel=0`}
                      title={healthFairVideos[1].title}
                      position="absolute"
                      inset="0"
                      w="100%"
                      h="100%"
                      border="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Box>
                </motion.div>
              </GridItem>


              {/* TEXT */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={fadeRight}
                >
                  <Text
                    color="qha.red"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                  >
                    Community Stories
                  </Text>

                  <Heading
                    as="h2"
                    mt={5}
                    fontSize={{
                      base: "3xl",
                      sm: "4xl",
                      md: "5xl",
                    }}
                    lineHeight="1.05"
                    letterSpacing="-0.04em"
                    fontWeight="700"
                  >
                    More than a health fair.
                  </Heading>

                  <Text
                    mt={6}
                    maxW="560px"
                    color="whiteAlpha.700"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    lineHeight="1.85"
                  >
                    These outreach events create opportunities for
                    families to receive care, ask questions, connect
                    with health professionals, and establish pathways
                    for continued treatment.
                  </Text>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            CLOSING CTA
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
              <Box
                bg="red"
                color="white"
                borderRadius={{
                  base: "20px",
                  md: "28px",
                }}
                px={{
                  base: 7,
                  md: 10,
                  lg: 12,
                }}
                py={{
                  base: 10,
                  md: 12,
                  lg: 14,
                }}
              >
                <Flex
                  direction={{
                    base: "column",
                    lg: "row",
                  }}
                  justify="space-between"
                  align={{
                    base: "flex-start",
                    lg: "center",
                  }}
                  gap={8}
                >

                  <Box>
                    <Text
                      color="whiteAlpha.800"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.18em"
                    >
                      Be Part Of The Work
                    </Text>

                    <Heading
                      as="h2"
                      mt={4}
                      maxW="820px"
                      fontSize={{
                        base: "3xl",
                        sm: "4xl",
                        md: "5xl",
                      }}
                      lineHeight="1.05"
                      letterSpacing="-0.04em"
                      fontWeight="700"
                    >
                      Help us bring quality healthcare closer to more
                      communities.
                    </Heading>
                  </Box>


                  <Flex
                    direction={{
                      base: "column",
                      sm: "row",
                    }}
                    gap={3}
                    flexShrink={0}
                    w={{
                      base: "100%",
                      lg: "auto",
                    }}
                  >
                    <Button
                      as={RouterLink}
                      to="/get-involved"
                      bg="black"
                      color="qha.black"
                      borderRadius="full"
                      h="50px"
                      px={8}
                      _hover={{
                        bg: "black",
                        color: "white",
                      }}
                    >
                      Volunteer
                    </Button>

                    <Button
                      as={RouterLink}
                      to="/donate"
                      variant="outline"
                      borderColor="white"
                      color="white"
                      borderRadius="full"
                      h="50px"
                      px={8}
                      _hover={{
                        bg: "white",
                        color: "qha.red",
                      }}
                    >
                      Donate
                    </Button>
                  </Flex>

                </Flex>
              </Box>
            </motion.div>

          </Box>
        </Box>

      </Box>


      <Footer />

    </Box>
  );
}

export default QuarterlyHealthFairs;