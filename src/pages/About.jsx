import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import aboutImage from "../assets/images/impact/qha-image--8.jpg";
import whyQhaImage from "../assets/images/impact/qha-image--7.jpg";


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

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};


function About() {
  return (
    <Box bg="qha.warmWhite">

      <Navbar />

      <Box as="main">

        {/* =====================================================
            PAGE INTRO
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
            md: 22,
            lg: 26,
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
                    color="qha.teal"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Who We Are
                  </Text>

                  <Box
                    w="55px"
                    h="2px"
                    bg="qha.orange"
                  />
                </Flex>
              </motion.div>


              {/* MAIN HEADLINE */}
              <motion.div variants={fadeUp}>
                <Heading
                  as="h1"
                  maxW="1100px"
                  color="qha.tealDark"
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
                  Making quality healthcare more accessible across Africa.
                </Heading>
              </motion.div>


              {/* INTRO TEXT */}
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
                  maxW="720px"
                  color="gray.600"
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  lineHeight="1.8"
                >
                  Quality Health Africa is a nonprofit organization
                  dedicated to improving access to quality healthcare
                  for underserved communities across Africa.
                </Text>
              </motion.div>

            </motion.div>
          </Box>
        </Box>


        {/* =====================================================
            WHO QHA IS
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
                lg: "1.05fr 0.95fr",
              }}
              gap={{
                base: 10,
                lg: 16,
                xl: 24,
              }}
              alignItems="stretch"
            >

              {/* IMAGE */}
              <GridItem>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    height: "100%",
                  }}
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    borderRadius={{
                      base: "20px",
                      md: "28px",
                    }}
                    minH={{
                      base: "400px",
                      md: "560px",
                      lg: "680px",
                    }}
                    h="100%"
                  >
                    <Image
                      src={aboutImage}
                      alt="Quality Health Africa"
                      position="absolute"
                      inset="0"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                      _hover={{
                        transform: "scale(1.04)",
                      }}
                    />
                  </Box>
                </motion.div>
              </GridItem>


              {/* CONTENT */}
              <GridItem>
                <Flex
                  h="100%"
                  direction="column"
                  justify="center"
                  py={{
                    base: 0,
                    lg: 8,
                  }}
                >
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
                        color="qha.orange"
                        fontSize="xs"
                        fontWeight="800"
                        textTransform="uppercase"
                        letterSpacing="0.18em"
                        mb={5}
                      >
                        Quality Health Africa
                      </Text>
                    </motion.div>


                    <motion.div variants={fadeUp}>
                      <Heading
                        as="h2"
                        color="qha.tealDark"
                        fontSize={{
                          base: "3xl",
                          sm: "4xl",
                          md: "5xl",
                          lg: "5xl",
                        }}
                        lineHeight="1.08"
                        letterSpacing="-0.04em"
                        fontWeight="700"
                      >
                        Healthcare should reach the people who need it most.
                      </Heading>
                    </motion.div>


                    <motion.div variants={fadeUp}>
                      <Text
                        mt={7}
                        color="qha.charcoal"
                        fontSize={{
                          base: "md",
                          md: "lg",
                        }}
                        lineHeight="1.9"
                      >
                        Quality Health Africa (QHA) is a nonprofit
                        organization dedicated to making quality
                        healthcare accessible to underserved communities
                        across Africa.
                      </Text>
                    </motion.div>


                    <motion.div variants={fadeUp}>
                      <Text
                        mt={6}
                        color="gray.600"
                        fontSize={{
                          base: "md",
                          md: "lg",
                        }}
                        lineHeight="1.9"
                      >
                        Through quarterly health fairs, medical equipment
                        donations, hospital construction projects, and our
                        flagship annual Quality Health Africa Conference,
                        QHA is transforming the way healthcare reaches the
                        people who need it most.
                      </Text>
                    </motion.div>

                  </motion.div>
                </Flex>
              </GridItem>

            </Grid>
          </Box>
        </Box>
{/* =====================================================
    WHY QHA EXISTS
===================================================== */}
<Box
  as="section"
  bg="qha.tealDark"
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
    md: 16,
    lg: 18,
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
        md: 12,
        lg: 16,
        xl: 20,
      }}
      alignItems="center"
    >

      {/* =================================================
          IMAGE — LEFT
      ================================================= */}
      <GridItem>
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
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
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            position="relative"
            overflow="hidden"
            borderRadius={{
              base: "18px",
              md: "22px",
            }}
            h={{
              base: "360px",
              sm: "440px",
              md: "520px",
              lg: "620px",
            }}
          >
            <Image
              src={whyQhaImage}
              alt="Quality Health Africa supporting healthcare access"
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
              transition="transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
              _hover={{
                transform: "scale(1.035)",
              }}
            />

            {/* SUBTLE IMAGE OVERLAY */}
            <Box
              position="absolute"
              inset="0"
              bgGradient="
                linear(
                  to-t,
                  rgba(0,0,0,0.28),
                  transparent 45%
                )
              "
              pointerEvents="none"
            />
          </Box>
        </motion.div>
      </GridItem>


      {/* =================================================
          CONTENT — RIGHT
      ================================================= */}
      <GridItem>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={staggerContainer}
        >

          {/* LABEL */}
          <motion.div variants={fadeUp}>
            <Flex
              align="center"
              gap={4}
              mb={{
                base: 6,
                md: 7,
              }}
            >
              <Text
                color="whiteAlpha.800"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Why We Exist
              </Text>

              <Box
                w="55px"
                h="2px"
                bg="qha.orange"
              />
            </Flex>
          </motion.div>


          {/* HEADING */}
          <motion.div variants={fadeUp}>
            <Heading
              as="h2"
              maxW="760px"
              fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "5xl",
                lg: "5xl",
                xl: "6xl",
              }}
              lineHeight="1.03"
              letterSpacing="-0.045em"
              fontWeight="700"
            >
              The need for accessible healthcare is urgent.
            </Heading>
          </motion.div>


          {/* PARAGRAPH 1 */}
          <motion.div variants={fadeUp}>
            <Text
              mt={{
                base: 6,
                md: 7,
              }}
              maxW="760px"
              color="whiteAlpha.800"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.8"
            >
              Africa faces a dual burden of disease, battling both
              infectious diseases and a rapidly growing epidemic of
              noncommunicable diseases, including cardiovascular
              disease, diabetes, hypertension, chronic respiratory
              disease, and cancer.
            </Text>
          </motion.div>


          {/* PARAGRAPH 2 */}
          <motion.div variants={fadeUp}>
            <Text
              mt={5}
              maxW="760px"
              color="whiteAlpha.800"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.8"
            >
              Limited healthcare infrastructure, geographic barriers,
              and a shortage of trained health professionals continue
              to deprive millions of Africans of the quality care they
              deserve.
            </Text>
          </motion.div>


          {/* FINAL STATEMENT */}
          <motion.div variants={fadeUp}>
            <Box
              mt={{
                base: 6,
                md: 7,
              }}
              pt={{
                base: 6,
                md: 7,
              }}
              borderTop="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Text
                maxW="760px"
                color="white"
                fontSize={{
                  base: "md",
                  md: "lg",
                }}
                lineHeight="1.8"
                fontWeight="500"
              >
                QHA meets this crisis head-on with direct-service
                programs that put resources, equipment, and expertise
                directly into the hands of the communities that need
                them. Our flagship facility, the Bosuso Health Clinic
                in eastern Ghana, serves as a model for
                community-centered, accessible primary healthcare
                delivery and as the launching point for our broader
                mission.
              </Text>
            </Box>
          </motion.div>

        </motion.div>
      </GridItem>

    </Grid>

  </Box>
</Box>

      

      </Box>

      <Footer />

    </Box>
  );
}

export default About;