import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


// ============================================================
// MOTION
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
      staggerChildren: 0.1,
    },
  },
};


// ============================================================
// FORM FIELD
// ============================================================

function ContactField({
  label,
  name,
  type = "text",
  placeholder,
}) {
  return (
    <Box>
      <Text
        mb={3}
        color="gray.600"
        fontSize="10px"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.16em"
      >
        {label}
      </Text>

      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        h="56px"
        px={0}
        border="none"
        borderBottom="1px solid"
        borderColor="gray.300"
        borderRadius="0"
        fontSize="md"
        color="qha.black"
        _placeholder={{
          color: "gray.400",
        }}
        _hover={{
          borderColor: "gray.500",
        }}
        _focus={{
          borderColor: "qha.red",
          boxShadow: "none",
        }}
      />
    </Box>
  );
}


// ============================================================
// CONTACT PAGE
// ============================================================

function Contact() {
  return (
    <Box bg="qha.warmWhite">

      <Navbar />

      <Box as="main">

        {/* =====================================================
            INTRO
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
            base: 12,
            md: 16,
            lg: 18,
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
                  mb={7}
                >
                  <Text
                    color="qha.red"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    Contact Us
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
                    base: "1.03",
                    md: "0.97",
                  }}
                  letterSpacing="-0.05em"
                  fontWeight="700"
                >
                  Let&apos;s start a
                  <br />
                  conversation.
                </Heading>
              </motion.div>


              {/* INTRO TEXT */}
              <motion.div variants={fadeUp}>
                <Text
                  mt={{
                    base: 7,
                    md: 9,
                  }}
                  ml={{
                    base: 0,
                    lg: "42%",
                  }}
                  maxW="720px"
                  color="gray.600"
                  fontSize={{
                    base: "lg",
                    md: "xl",
                  }}
                  lineHeight="1.8"
                >
                  Whether you&apos;re interested in partnering with QHA,
                  supporting our work, volunteering, or simply learning
                  more about our mission, we&apos;d love to hear from you.
                </Text>
              </motion.div>

            </motion.div>

          </Box>
        </Box>


        {/* =====================================================
            CONTACT + FORM
        ===================================================== */}
        <Box
          as="section"
          px={{
            base: 0,
            lg: 14,
            xl: 16,
          }}
          pb={{
            base: 0,
            lg: 24,
          }}
        >
          <Box
            maxW="1500px"
            mx="auto"
            overflow="hidden"
            borderRadius={{
              base: "0",
              lg: "28px",
            }}
          >

            <Grid
              templateColumns={{
                base: "1fr",
                lg: "0.8fr 1.2fr",
              }}
            >

              {/* =================================================
                  LEFT — CONTACT INFORMATION
              ================================================= */}
              <GridItem
                bg="black"
                color="white"
                px={{
                  base: 6,
                  sm: 8,
                  md: 10,
                  lg: 12,
                }}
                py={{
                  base: 14,
                  md: 16,
                  lg: 18,
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
                      color="qha.red"
                      fontSize="10px"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.2em"
                    >
                      Quality Health Africa
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Heading
                      as="h2"
                      mt={5}
                      maxW="500px"
                      fontSize={{
                        base: "3xl",
                        sm: "4xl",
                        md: "5xl",
                      }}
                      lineHeight="1.05"
                      letterSpacing="-0.04em"
                      fontWeight="650"
                    >
                      We&apos;re here to connect.
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="480px"
                      color="whiteAlpha.700"
                      fontSize="md"
                      lineHeight="1.8"
                    >
                      Reach our team in Accra to learn more about our
                      programs, partnerships, and opportunities to
                      support Quality Health Africa.
                    </Text>
                  </motion.div>


                  {/* =============================================
                      ADDRESS
                  ============================================= */}
                  <motion.div variants={fadeUp}>
                    <Box
                      mt={{
                        base: 12,
                        md: 14,
                      }}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Flex
                        justify="space-between"
                        align="flex-start"
                        gap={6}
                      >
                        <Text
                          color="whiteAlpha.500"
                          fontSize="10px"
                          fontWeight="800"
                          textTransform="uppercase"
                          letterSpacing="0.18em"
                        >
                          Address
                        </Text>

                        <Text
                          textAlign="right"
                          fontSize={{
                            base: "sm",
                            md: "md",
                          }}
                          lineHeight="1.8"
                          fontWeight="500"
                        >
                          8 Bubuashie Road
                          <br />
                          Awudome Estate
                          <br />
                          Accra, Ghana
                        </Text>
                      </Flex>
                    </Box>
                  </motion.div>


                  {/* =============================================
                      EMAIL
                  ============================================= */}
                  <motion.div variants={fadeUp}>
                    <Box
                      mt={7}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        gap={6}
                      >
                        <Text
                          color="whiteAlpha.500"
                          fontSize="10px"
                          fontWeight="800"
                          textTransform="uppercase"
                          letterSpacing="0.18em"
                        >
                          Email
                        </Text>

                        <Link
                          href="mailto:info@qhafrica.org"
                          color="white"
                          fontSize={{
                            base: "sm",
                            md: "md",
                          }}
                          fontWeight="500"
                          textDecoration="none"
                          _hover={{
                            color: "qha.red",
                          }}
                          transition="color 0.2s ease"
                        >
                          info@qhafrica.org
                        </Link>
                      </Flex>
                    </Box>
                  </motion.div>


                  {/* =============================================
                      PHONE
                  ============================================= */}
                  <motion.div variants={fadeUp}>
                    <Box
                      mt={7}
                      pt={7}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        gap={6}
                      >
                        <Text
                          color="whiteAlpha.500"
                          fontSize="10px"
                          fontWeight="800"
                          textTransform="uppercase"
                          letterSpacing="0.18em"
                        >
                          Ghana
                        </Text>

                        <Link
                          href="tel:+233555395565"
                          color="white"
                          fontSize={{
                            base: "sm",
                            md: "md",
                          }}
                          fontWeight="500"
                          textDecoration="none"
                          _hover={{
                            color: "qha.red",
                          }}
                          transition="color 0.2s ease"
                        >
                          +233 55 539 5565
                        </Link>
                      </Flex>
                    </Box>
                  </motion.div>


                  {/* =============================================
                      LOCATION DETAIL
                  ============================================= */}
                  <motion.div variants={fadeUp}>
                    <Flex
                      mt={{
                        base: 12,
                        md: 16,
                      }}
                      align="center"
                      gap={3}
                    >
                      <Box
                        w="8px"
                        h="8px"
                        bg="qha.red"
                        borderRadius="full"
                      />

                      <Text
                        color="whiteAlpha.600"
                        fontSize="10px"
                        fontWeight="700"
                        textTransform="uppercase"
                        letterSpacing="0.16em"
                      >
                        Accra · Ghana · West Africa
                      </Text>
                    </Flex>
                  </motion.div>

                </motion.div>
              </GridItem>


              {/* =================================================
                  RIGHT — CONTACT FORM
              ================================================= */}
              <GridItem
                bg="white"
                px={{
                  base: 6,
                  sm: 8,
                  md: 10,
                  lg: 14,
                }}
                py={{
                  base: 14,
                  md: 16,
                  lg: 18,
                }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={staggerContainer}
                >

                  <motion.div variants={fadeUp}>
                    <Text
                      color="qha.red"
                      fontSize="10px"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.2em"
                    >
                      Send A Message
                    </Text>

                    <Heading
                      as="h2"
                      mt={4}
                      color="qha.black"
                      fontSize={{
                        base: "3xl",
                        md: "4xl",
                      }}
                      lineHeight="1.1"
                      letterSpacing="-0.035em"
                      fontWeight="650"
                    >
                      How can we help?
                    </Heading>
                  </motion.div>


                  {/* =============================================
                      FORM
                  ============================================= */}
                  <Box
                    as="form"
                    mt={{
                      base: 10,
                      md: 12,
                    }}
                  >

                    {/* NAME + EMAIL */}
                    <Grid
                      templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                      }}
                      gap={{
                        base: 8,
                        md: 7,
                      }}
                    >
                      <motion.div variants={fadeUp}>
                        <ContactField
                          label="Your Name"
                          name="name"
                          placeholder="Full name"
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <ContactField
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </motion.div>
                    </Grid>


                    {/* ORGANIZATION */}
                    <motion.div variants={fadeUp}>
                      <Box mt={8}>
                        <ContactField
                          label="Organization"
                          name="organization"
                          placeholder="Organization or company (optional)"
                        />
                      </Box>
                    </motion.div>


                    {/* SUBJECT */}
                    <motion.div variants={fadeUp}>
                      <Box mt={8}>
                        <ContactField
                          label="Subject"
                          name="subject"
                          placeholder="What would you like to discuss?"
                        />
                      </Box>
                    </motion.div>


                    {/* MESSAGE */}
                    <motion.div variants={fadeUp}>
                      <Box mt={8}>
                        <Text
                          mb={3}
                          color="gray.600"
                          fontSize="10px"
                          fontWeight="800"
                          textTransform="uppercase"
                          letterSpacing="0.16em"
                        >
                          Message
                        </Text>

                        <Textarea
                          name="message"
                          placeholder="Tell us a little more..."
                          minH="150px"
                          resize="vertical"
                          px={0}
                          py={3}
                          border="none"
                          borderBottom="1px solid"
                          borderColor="gray.300"
                          borderRadius="0"
                          color="qha.black"
                          fontSize="md"
                          lineHeight="1.7"
                          _placeholder={{
                            color: "gray.400",
                          }}
                          _hover={{
                            borderColor: "gray.500",
                          }}
                          _focus={{
                            borderColor: "qha.red",
                            boxShadow: "none",
                          }}
                        />
                      </Box>
                    </motion.div>


                    {/* SUBMIT */}
                    <motion.div variants={fadeUp}>
                      <Flex
                        mt={{
                          base: 9,
                          md: 11,
                        }}
                        align={{
                          base: "stretch",
                          sm: "center",
                        }}
                        justify="space-between"
                        direction={{
                          base: "column",
                          sm: "row",
                        }}
                        gap={5}
                      >
                        <Text
                          maxW="310px"
                          color="gray.500"
                          fontSize="xs"
                          lineHeight="1.6"
                        >
                          Our team will review your message and get back
                          to you as soon as possible.
                        </Text>

                        <Button
                          type="submit"
                          bg="qha.red"
                          color="white"
                          borderRadius="full"
                          h="52px"
                          px={9}
                          flexShrink={0}
                          fontSize="sm"
                          fontWeight="700"
                          _hover={{
                            bg: "qha.redDark",
                            transform: "translateY(-2px)",
                            boxShadow:
                              "0 12px 28px rgba(0,0,0,0.14)",
                          }}
                          _active={{
                            transform: "translateY(0)",
                          }}
                          transition="all 0.25s ease"
                        >
                          Send Message
                        </Button>
                      </Flex>
                    </motion.div>

                  </Box>

                </motion.div>
              </GridItem>

            </Grid>

          </Box>
        </Box>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <Box
          as="section"
          bg="qha.warmWhite"
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
          }}
        >
          <Box
            maxW="1500px"
            mx="auto"
          >
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
                direction={{
                  base: "column",
                  md: "row",
                }}
                justify="space-between"
                align={{
                  base: "flex-start",
                  md: "flex-end",
                }}
                gap={8}
              >
                <Heading
                  as="h2"
                  maxW="850px"
                  color="qha.black"
                  fontSize={{
                    base: "3xl",
                    sm: "4xl",
                    md: "5xl",
                  }}
                  lineHeight="1.05"
                  letterSpacing="-0.04em"
                  fontWeight="650"
                >
                  Better healthcare starts
                  with connection.
                </Heading>

                <Text
                  color="gray.500"
                  fontSize="xs"
                  fontWeight="700"
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                >
                  Accra, Ghana
                </Text>
              </Flex>
            </motion.div>
          </Box>
        </Box>

      </Box>

      <Footer />

    </Box>
  );
}

export default Contact;