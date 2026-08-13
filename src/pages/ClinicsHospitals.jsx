import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// TEMPORARY IMAGES
// Replace these with your actual construction / clinic images
import infrastructureHeroImage from "../assets/images/qha-image--14.jpg";
import infrastructureSecondImage from "../assets/images/qha-hero--1.jpg";


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
// INFRASTRUCTURE PRIORITIES
// ============================================================

const infrastructureInitiatives = [
  {
    number: "01",
    title: "Community Hospitals & Clinics",
    description:
      "Constructing new hospitals and clinics in underserved regions of Ghana to expand access to essential care.",
  },


  {
    number: "02",
    title: "Mobile Health Clinics",
    description:
      "Establishing mobile health clinics that bring care directly to remote and hard-to-reach communities.",
  },

  {
    number: "03",
    title: "Specialized Care Spaces",
    description:
      "Building maternity wards, NCD treatment centers, diagnostic laboratories, and other specialized clinical spaces.",
  },

  {
    number: "04",
    title: "Construction Partnerships",
    description:
      "Working with local governments, engineering firms, and construction partners to support safe, high-quality healthcare facilities.",
  },

  {
    number: "05",
    title: "Local Operations & Training",
    description:
      "Training healthcare workers and facility managers to sustainably operate, maintain, and manage new infrastructure.",
  },

  {
    number: "06",
    title: "Infrastructure Advocacy",
    description:
      "Advocating for greater government and international investment in healthcare infrastructure across Ghana and sub-Saharan Africa.",
  },
];


// ============================================================
// FEATURED VIDEO
// ============================================================

const infrastructureVideo = {
  youtubeId: "DYj8iFUJdRY",
  title: "Quality Health Africa Healthcare Infrastructure",
};


function HealthcareInfrastructure() {
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

              {/* HERO TEXT */}
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
                      Hospital & Clinic
                      <br />
                      Construction
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={7}
                      maxW="700px"
                      color="gray.600"
                      fontSize={{
                        base: "lg",
                        md: "xl",
                      }}
                      lineHeight="1.8"
                    >
                      Quality healthcare requires quality infrastructure.
                      QHA is committed to building and strengthening
                      healthcare facilities that serve as long-term
                      anchors of care in underserved communities.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={5}
                      maxW="700px"
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.85"
                    >
                      From community clinics and maternity wards to
                      diagnostic laboratories and mobile health units,
                      our infrastructure work is designed around access,
                      sustainability, and community ownership.
                    </Text>
                  </motion.div>

                </motion.div>
              </GridItem>


              {/* HERO IMAGE */}
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
                      base: "390px",
                      sm: "480px",
                      md: "560px",
                      lg: "610px",
                    }}
                  >
                    <Image
                      src={infrastructureHeroImage}
                      alt="Healthcare facility construction"
                      w="100%"
                      h="100%"
                      objectFit="cover"
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
                      Building for long-term care
                    </Text>
                  </Box>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            INFRASTRUCTURE INITIATIVES
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
                  mb={8}
                >
                  <Text
                    color="whiteAlpha.700"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Our Infrastructure Initiatives
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
                  maxW="1000px"
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
                  Building systems that can serve communities for years.
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
              {infrastructureInitiatives.map((item, index) => (
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
                      {item.number}
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
                      {item.title}
                    </Heading>

                    <Text
                      mt={5}
                      color="whiteAlpha.700"
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
            FEATURED VIDEO — PAGE HIGHLIGHT
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
              variants={fadeUp}
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
                  color="qha.red"
                  fontSize="xs"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                >
                  Featured Project
                </Text>

                <Box
                  w="55px"
                  h="2px"
                  bg="qha.red"
                />
              </Flex>
            </motion.div>


            <Grid
              templateColumns={{
                base: "1fr",
                lg: "1.3fr 0.7fr",
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
                      base: "20px",
                      md: "28px",
                    }}
                    bg="black"
                    boxShadow="0 30px 70px rgba(0,0,0,0.18)"
                    aspectRatio="16 / 9"
                  >
                    <Box
                      as="iframe"
                      src={`https://www.youtube-nocookie.com/embed/${infrastructureVideo.youtubeId}?rel=0`}
                      title={infrastructureVideo.title}
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


              {/* FEATURE TEXT */}
              <GridItem>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
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
                      Infrastructure In Action
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
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
                      A facility is more than a building.
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="560px"
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.85"
                    >
                      It becomes the place where families seek care,
                      healthcare workers serve their communities, and
                      essential services can remain available long after
                      construction is complete.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Box
                      mt={8}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="gray.300"
                    >
                      <Text
                        color="qha.black"
                        fontSize={{
                          base: "lg",
                          md: "xl",
                        }}
                        lineHeight="1.6"
                        fontWeight="600"
                      >
                        QHA approaches infrastructure as a long-term
                        investment in community health, not simply a
                        construction project.
                      </Text>
                    </Box>
                  </motion.div>

                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            SUSTAINABILITY + SECOND IMAGE
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
                lg: "0.9fr 1.1fr",
              }}
              gap={{
                base: 10,
                lg: 16,
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
                      Built To Last
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
                      Community ownership is part of the design.
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
                      Every hospital and clinic QHA builds is designed
                      with long-term sustainability in mind. That means
                      working with local stakeholders, supporting local
                      healthcare teams, and planning for ongoing
                      operations and maintenance from the beginning.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={5}
                      maxW="650px"
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.9"
                    >
                      By pairing infrastructure with training,
                      partnerships, and community ownership, QHA aims to
                      ensure that new facilities remain valuable,
                      functional, and responsive to local needs long
                      after construction is complete.
                    </Text>
                  </motion.div>

                </motion.div>
              </GridItem>


              {/* SECOND IMAGE */}
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
                    overflow="hidden"
                    borderRadius={{
                      base: "18px",
                      md: "24px",
                    }}
                    h={{
                      base: "360px",
                      md: "500px",
                    }}
                  >
                    <Image
                      src={infrastructureSecondImage}
                      alt="Community healthcare infrastructure"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.8s ease"
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
                          rgba(0,0,0,0.30),
                          transparent 50%
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
                      Community-centered infrastructure
                    </Text>
                  </Box>
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
                      Build With QHA
                    </Text>

                    <Heading
                      as="h2"
                      mt={4}
                      maxW="850px"
                      fontSize={{
                        base: "3xl",
                        sm: "4xl",
                        md: "5xl",
                      }}
                      lineHeight="1.05"
                      letterSpacing="-0.04em"
                      fontWeight="700"
                    >
                      Help create healthcare infrastructure communities
                      can depend on.
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
                      color="white"
                      borderRadius="full"
                      h="50px"
                      px={8}
                      _hover={{
                        bg: "black",
                        color: "white",
                      }}
                    >
                      Partner With Us
                    </Button>

                    <Button
                      as={RouterLink}
                      to="/contact"
                      variant="outline"
                      borderColor="white"
                      color="white"
                      borderRadius="full"
                      h="50px"
                      px={8}
                      _hover={{
                        bg: "red",
                        color: "white",
                      }}
                    >
                      Contact QHA
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

export default HealthcareInfrastructure;