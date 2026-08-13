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
// Replace these with your actual equipment donation images
import equipmentHeroImage from "../assets/images/qha-medicalsupplies.jpg";
import equipmentImpactImage from "../assets/images/qha-image--12.jpg";


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
// DONATION CATEGORIES
// ============================================================

const donationCategories = [
  {
    number: "01",
    title: "Diagnostic Equipment",
    description:
      "Blood pressure monitors, glucose monitors, ultrasound machines, and other tools that support earlier and more accurate diagnosis.",
  },

  {
    number: "02",
    title: "Clinical Equipment",
    description:
      "Hospital beds, surgical instruments, and essential clinical supplies that strengthen everyday patient care.",
  },

  {
    number: "03",
    title: "PPE & Infection Control",
    description:
      "Personal protective equipment and infection-control supplies that help protect healthcare workers and patients.",
  },

  {
    number: "04",
    title: "Mobility Aids",
    description:
      "Wheelchairs, walking equipment, and other mobility supports that help restore independence and improve quality of life.",
  },

  {
    number: "05",
    title: "Laboratory Equipment",
    description:
      "Laboratory equipment that expands local diagnostic capacity and supports more timely clinical decision-making.",
  },

  {
    number: "06",
    title: "Global Sourcing Partnerships",
    description:
      "Partnerships with hospitals, medical-device manufacturers, and logistics organizations in the U.S. and Europe to source reliable equipment donations.",
  },

  {
    number: "07",
    title: "Maintenance Training",
    description:
      "Practical equipment-maintenance training for local clinic staff to support safe, sustainable, long-term use.",
  },
];


// ============================================================
// NANA'S PROJECT VIDEO
// ============================================================

const nanaProjectVideo = {
  youtubeId: "zSIKZEb4Tjk",
  title: "Nana's Project Medical Supply Donation",
};


function MedicalEquipmentDonations() {
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
                      Medical Equipment
                      <br />
                      Donations
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
                      QHA sources, refurbishes, and distributes critical
                      medical equipment and supplies to hospitals,
                      clinics, and health centers across Ghana and the
                      broader region.
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
                      The goal is simple: place reliable tools directly
                      into the hands of healthcare teams so they can
                      deliver safer, more effective, and more
                      comprehensive care.
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
                      src={equipmentHeroImage}
                      alt="Medical equipment donation"
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
                      Equipping care. Strengthening communities.
                    </Text>
                  </Box>
                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            NANA'S PROJECT — FEATURED HIGHLIGHT
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
            lg: 24,
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
                  base: 9,
                  md: 12,
                }}
              >
                <Text
                  color="whiteAlpha.700"
                  fontSize="xs"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                >
                  Featured Collaboration
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
                lg: "1.15fr 0.85fr",
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
                    boxShadow="0 25px 60px rgba(0,0,0,0.38)"
                    aspectRatio="16 / 9"
                  >
                    <Box
                      as="iframe"
                      src={`https://www.youtube-nocookie.com/embed/${nanaProjectVideo.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                      title={nanaProjectVideo.title}
                      position="absolute"
                      inset="0"
                      w="100%"
                      h="100%"
                      border="0"
                      allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Box>

                  <Text
                    mt={4}
                    color="whiteAlpha.500"
                    fontSize="xs"
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                  >
                    Nana&apos;s Project • Medical Supply Donation
                  </Text>
                </motion.div>
              </GridItem>


              {/* STORY + QUOTE */}
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
                      Nana&apos;s Project
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
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
                      One donation can strengthen an entire point of care.
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      color="whiteAlpha.700"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.85"
                    >
                      Nana&apos;s Project, led by President and Founder
                      Nana Yaa Konadu, partnered in a medical supply
                      donation that reflects the kind of community-driven
                      support QHA seeks to amplify — connecting needed
                      equipment and supplies with the facilities and
                      healthcare teams that can put them to immediate use.
                    </Text>
                  </motion.div>


                  {/* QUOTE */}
                  <motion.div variants={fadeUp}>
                    <Box
                      mt={8}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text
                        color="qha.red"
                        fontSize={{
                          base: "4xl",
                          md: "5xl",
                        }}
                        lineHeight="1"
                        fontWeight="700"
                      >
                        “
                      </Text>

                      <Text
                        mt={2}
                        maxW="560px"
                        color="white"
                        fontSize={{
                          base: "lg",
                          md: "xl",
                        }}
                        lineHeight="1.6"
                        fontWeight="500"
                      >
                        ...working in the ER, I wanted to do something that could help all hospitals.
                      </Text>

                      <Text
                        mt={5}
                        color="whiteAlpha.500"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.12em"
                      >
                        Nana Yaa Konadu
                      </Text>

                      <Text
                        mt={1}
                        color="whiteAlpha.500"
                        fontSize="xs"
                      >
                        President & Founder, Nana&apos;s Project
                      </Text>
                    </Box>
                  </motion.div>

                </motion.div>
              </GridItem>

            </Grid>
          </Box>
        </Box>


        {/* =====================================================
            WHAT WE DONATE
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
                    Our Equipment Donation Program
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
                  More than equipment.
                  <br />
                  Greater capacity to care.
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
              borderColor="gray.300"
            >
              {donationCategories.map((item, index) => (
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
            WHY IT MATTERS
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
                      md: "500px",
                    }}
                  >
                    <Image
                      src={equipmentImpactImage}
                      alt="Medical equipment strengthening healthcare delivery"
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
                      Why It Matters
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
                      Better tools can change what a facility is able to do.
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
                      These donations directly strengthen the capacity
                      of under-resourced facilities, allowing healthcare
                      teams to provide safer, more effective, and more
                      comprehensive care to the communities they serve.
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
                      QHA also emphasizes sustainable use by supporting
                      equipment-maintenance training for local clinic
                      staff, helping ensure that donated equipment
                      continues to serve patients long after delivery.
                    </Text>
                  </motion.div>
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
                  align={{
                    base: "flex-start",
                    lg: "center",
                  }}
                  justify="space-between"
                  gap={8}
                >
                  <Box>
                    <Text
                      color="white"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.18em"
                    >
                      Partner With QHA
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
                      Help put essential medical resources where they can
                      make a difference.
                    </Heading>
                  </Box>


                  <Flex
                    direction={{
                      base: "column",
                      sm: "row",
                    }}
                    gap={3}
                    w={{
                      base: "100%",
                      lg: "auto",
                    }}
                    flexShrink={0}
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
                      Partner With Us
                    </Button>

                    <Button
                      as={RouterLink}
                      to="/contact"
                      variant="outline"
                      borderColor="white"
                      color="black"
                      borderRadius="full"
                      h="50px"
                      px={8}
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

export default MedicalEquipmentDonations;