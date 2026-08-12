import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link as RouterLink } from "react-router";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// CHALLENGE IMAGES
import challengeImageOne from "../assets/images/impact/qha-image--3.jpg";
import challengeImageTwo from "../assets/images/impact/qha-image--2.jpg";
import challengeHeroImage from "../assets/images/impact/qha-image--6.jpg";


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


const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};


// ============================================================
// COUNT-UP NUMBER
// ============================================================

function CountUpNumber({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.8,
  ...textProps
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);

  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(latest.toFixed(decimals));
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, count, value, duration]);

  return (
    <Box ref={ref}>
      <Text {...textProps}>
        {displayValue}
        {suffix}
      </Text>
    </Box>
  );
}


// ============================================================
// STATISTICS
// ============================================================

const globalStats = [
  {
    value: 74,
    suffix: "%",
    decimals: 0,
    title: "of deaths worldwide",
    description:
      "are caused by noncommunicable diseases, including cardiovascular disease, cancer, diabetes, and chronic respiratory disease.",
  },

  {
    value: 37,
    suffix: "%",
    decimals: 0,
    title: "of deaths in sub-Saharan Africa",
    description:
      "were attributed to noncommunicable diseases, reflecting a rapidly growing health burden across the region.",
  },

  {
    value: 1.55,
    suffix: "",
    decimals: 2,
    title: "health workers per 1,000 people",
    description:
      "represents the reported density of physicians, nurses, and midwives across the WHO African Region.",
  },

  {
    value: 4.45,
    suffix: "",
    decimals: 2,
    title: "health workers per 1,000 people",
    description:
      "is the indicative workforce threshold associated with delivering essential health services and advancing universal health coverage.",
  },
];


// ============================================================
// QHA RESPONSE
// ============================================================

const responses = [
  {
    number: "01",
    title: "Quarterly Health Fairs",
    description:
      "Bringing healthcare screenings, consultations, health education, medications, and referrals directly into underserved communities.",
    href: "/programs/health-fairs",
  },

  {
    number: "02",
    title: "Medical Equipment Donations",
    description:
      "Strengthening local healthcare facilities with essential equipment, supplies, and resources needed to expand their capacity to provide care.",
    href: "/programs/equipment-donations",
  },

  {
    number: "03",
    title: "Hospital & Clinic Construction",
    description:
      "Building and strengthening sustainable healthcare infrastructure designed around the long-term needs of communities.",
    href: "/programs/healthcare-infrastructure",
  },

  {
    number: "04",
    title: "Quality Health Africa Conference",
    description:
      "Convening healthcare professionals, policymakers, partners, innovators, and advocates to advance solutions for healthcare access across Africa.",
    href: "/conference",
  },
];


function Challenge() {
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
    base: 10,
    md: 12,
    lg: 14,
  }}
  pb={{
    base: 10,
    md: 12,
    lg: 14,
  }}
>
  <Box maxW="1500px" mx="auto">
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "0.9fr 1.1fr",
      }}
      gap={{
        base: 8,
        md: 10,
        lg: 14,
        xl: 18,
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
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            overflow="hidden"
            borderRadius={{
              base: "18px",
              md: "22px",
            }}
            h={{
              base: "300px",
              sm: "360px",
              md: "420px",
              lg: "470px",
            }}
          >
            <Image
              src={challengeHeroImage}
              alt="Healthcare access challenges across Africa"
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
              transition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
              _hover={{
                transform: "scale(1.035)",
              }}
            />
          </Box>
        </motion.div>
      </GridItem>


      {/* =================================================
          TEXT — RIGHT
      ================================================= */}
      <GridItem>
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
                base: 5,
                md: 6,
              }}
            >
              <Text
                color="qha.red"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                The Challenge
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
              maxW="760px"
              color="qha.black"
              fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "5xl",
                lg: "6xl",
                xl: "7xl",
              }}
              lineHeight={{
                base: "1.04",
                md: "1",
              }}
              letterSpacing="-0.045em"
              fontWeight="700"
            >
              The healthcare gap is still too wide.
            </Heading>
          </motion.div>


          {/* INTRO */}
          <motion.div variants={fadeUp}>
            <Text
              mt={{
                base: 5,
                md: 6,
              }}
              maxW="700px"
              color="gray.600"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.8"
            >
              Across Africa, communities are confronting a growing
              burden of chronic disease while millions continue to
              face barriers to essential healthcare services,
              infrastructure, and trained health professionals.
            </Text>
          </motion.div>

        </motion.div>
      </GridItem>

    </Grid>
  </Box>
</Box>

         {/* =====================================================
            HEALTH BURDEN + TWO IMAGES
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

            {/* SECTION LABEL */}
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
                  base: 10,
                  md: 14,
                  lg: 16,
                }}
              >
                <Text
                  color="whiteAlpha.700"
                  fontSize="xs"
                  fontWeight="800"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                >
                  A Growing Burden
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
                lg: "1.05fr 0.95fr",
              }}
              gap={{
                base: 14,
                lg: 18,
                xl: 24,
              }}
              alignItems="center"
            >

              {/* =================================================
                  IMAGE COMPOSITION
              ================================================= */}
              <GridItem>
                <Box
                  position="relative"
                  pb={{
                    base: 14,
                    sm: 16,
                    md: 20,
                  }}
                  pr={{
                    base: 0,
                    md: 12,
                  }}
                >

                  {/* MAIN LARGE IMAGE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -45,
                      scale: 0.97,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Box
                      overflow="hidden"
                      borderRadius={{
                        base: "18px",
                        md: "24px",
                      }}
                      h={{
                        base: "390px",
                        sm: "470px",
                        md: "570px",
                        lg: "610px",
                      }}
                    >
                      <Image
                        src={challengeImageOne}
                        alt="Healthcare access challenges across African communities"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        objectPosition="center"
                        transition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                        _hover={{
                          transform: "scale(1.035)",
                        }}
                      />
                    </Box>
                  </motion.div>


                  {/* SMALL OVERLAPPING IMAGE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 45,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      width: "48%",
                    }}
                  >
                    <Box
                      p={{
                        base: "5px",
                        md: "7px",
                      }}
                      bg="black"
                      borderRadius={{
                        base: "16px",
                        md: "20px",
                      }}
                    >
                      <Box
                        overflow="hidden"
                        borderRadius={{
                          base: "12px",
                          md: "15px",
                        }}
                        h={{
                          base: "170px",
                          sm: "210px",
                          md: "250px",
                          lg: "270px",
                        }}
                      >
                        <Image
                          src={challengeImageTwo}
                          alt="Healthcare professionals and community care"
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          objectPosition="center"
                          transition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                          _hover={{
                            transform: "scale(1.05)",
                          }}
                        />
                      </Box>
                    </Box>
                  </motion.div>

                </Box>
              </GridItem>


              {/* =================================================
                  HEALTH BURDEN TEXT
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
                      maxW="720px"
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
                      Africa faces a changing and increasingly complex
                      health landscape.
                    </Heading>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={{
                        base: 7,
                        md: 8,
                      }}
                      maxW="680px"
                      color="whiteAlpha.800"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                    >
                      Communities across the continent continue to face
                      infectious diseases while noncommunicable diseases
                      such as cardiovascular disease, diabetes, cancer,
                      hypertension, and chronic respiratory disease are
                      creating an increasingly significant burden.
                    </Text>
                  </motion.div>


                  <motion.div variants={fadeUp}>
                    <Text
                      mt={6}
                      maxW="680px"
                      color="whiteAlpha.800"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.95"
                    >
                      These health challenges intersect with limited
                      healthcare infrastructure, geographic barriers,
                      constrained resources, and serious shortages in
                      the healthcare workforce.
                    </Text>
                  </motion.div>


                  {/* ACCENT STATEMENT */}
                  <motion.div variants={fadeUp}>
                    <Box
                      mt={{
                        base: 9,
                        md: 11,
                      }}
                      pt={{
                        base: 7,
                        md: 8,
                      }}
                      borderTop="1px solid"
                      borderColor="whiteAlpha.300"
                    >
                      <Text
                        maxW="600px"
                        color="white"
                        fontSize={{
                          base: "lg",
                          md: "xl",
                        }}
                        lineHeight="1.6"
                        fontWeight="500"
                      >
                        The challenge is not simply disease. It is whether
                        people can reach the care they need when they need
                        it.
                      </Text>
                    </Box>
                  </motion.div>

                </motion.div>
              </GridItem>

            </Grid>

          </Box>
        </Box>
      
       {/* =====================================================
    STATS
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
    base: 10,
    md: 12,
    lg: 12,
  }}
  pb={{
    base: 16,
    md: 20,
    lg: 22,
  }}
>
  <Box maxW="1500px" mx="auto">

    {/* SECTION HEADING — NO SCROLL HIDING */}
    <Box>
      <Flex
        align="center"
        gap={4}
        mb={{
          base: 5,
          md: 6,
        }}
      >
        <Text
          color="qha.black"
          fontSize="xs"
          fontWeight="800"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          The Numbers
        </Text>

        <Box
          w="55px"
          h="2px"
          bg="qha.red"
        />
      </Flex>

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
        The scale of the challenge.
      </Heading>
    </Box>


    {/* STATISTICS */}
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      mt={{
        base: 8,
        md: 10,
      }}
      borderTop="1px solid"
      borderColor="gray.300"
    >
      {globalStats.map((stat, index) => (
        <motion.div
          key={`${stat.value}-${index}`}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: (index % 2) * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Box
            h="100%"
            py={{
              base: 9,
              md: 12,
              lg: 14,
            }}
            px={{
              base: 0,
              md: 8,
              lg: 10,
            }}
            borderBottom="1px solid"
            borderLeft={{
              base: "none",
              md:
                index % 2 === 0
                  ? "none"
                  : "1px solid",
            }}
            borderColor="gray.300"
          >
            <CountUpNumber
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals}
              duration={2}
              color="qha.red"
              fontSize={{
                base: "6xl",
                md: "7xl",
                lg: "8xl",
              }}
              lineHeight="0.9"
              letterSpacing="-0.055em"
              fontWeight="700"
            />

            <Heading
              as="h3"
              mt={6}
              color="qha.black"
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              lineHeight="1.25"
              fontWeight="650"
            >
              {stat.title}
            </Heading>

            <Text
              mt={4}
              maxW="520px"
              color="gray.600"
              fontSize={{
                base: "sm",
                md: "md",
              }}
              lineHeight="1.8"
            >
              {stat.description}
            </Text>
          </Box>
        </motion.div>
      ))}
    </SimpleGrid>

  </Box>
</Box>


        {/* =====================================================
            WORKFORCE FEATURE
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
                The Workforce Gap
              </Text>


              <Grid
                templateColumns={{
                  base: "1fr",
                  lg: "1fr 1fr",
                }}
                gap={{
                  base: 10,
                  lg: 18,
                }}
                alignItems="end"
              >

                <GridItem>
                  <CountUpNumber
                    value={1.55}
                    decimals={2}
                    duration={2}
                    color="qha.black"
                    fontSize={{
                      base: "6xl",
                      sm: "7xl",
                      md: "8xl",
                    }}
                    lineHeight="0.9"
                    letterSpacing="-0.055em"
                    fontWeight="700"
                  />

                  <Text
                    mt={5}
                    color="qha.black"
                    fontSize={{
                      base: "xl",
                      md: "2xl",
                    }}
                    lineHeight="1.3"
                    fontWeight="700"
                  >
                    doctors, nurses & midwives
                    <br />
                    per 1,000 people
                  </Text>
                </GridItem>


                <GridItem>
                  <Box
                    borderLeft={{
                      base: "none",
                      lg: "1px solid",
                    }}
                    borderTop={{
                      base: "1px solid",
                      lg: "none",
                    }}
                    borderColor="gray.400"
                    pl={{
                      base: 0,
                      lg: 12,
                    }}
                    pt={{
                      base: 8,
                      lg: 0,
                    }}
                  >
                    <Text
                      color="gray.600"
                      fontSize={{
                        base: "md",
                        md: "lg",
                      }}
                      lineHeight="1.9"
                    >
                      The WHO African Region remains well below the
                      indicative health workforce density associated
                      with delivering essential health services and
                      advancing universal health coverage.
                    </Text>


                    <Flex
                      align="baseline"
                      gap={3}
                      mt={7}
                    >
                      <CountUpNumber
                        value={4.45}
                        decimals={2}
                        duration={2}
                        color="qha.red"
                        fontSize={{
                          base: "4xl",
                          md: "5xl",
                        }}
                        lineHeight="1"
                        fontWeight="700"
                        letterSpacing="-0.04em"
                      />

                      <Text
                        color="qha.black"
                        fontSize="sm"
                        fontWeight="700"
                      >
                        indicative WHO threshold
                      </Text>
                    </Flex>
                  </Box>
                </GridItem>

              </Grid>

            </motion.div>

          </Box>
        </Box>


        {/* =====================================================
            QHA RESPONSE
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
                    color="whiteAlpha.700"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    QHA&apos;s Response
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
                  Turning the challenge into action.
                </Heading>
              </motion.div>


              <motion.div variants={fadeUp}>
                <Text
                  mt={8}
                  maxW="760px"
                  color="whiteAlpha.700"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="1.9"
                >
                  Quality Health Africa addresses barriers to healthcare
                  through four complementary programs that combine
                  immediate service delivery with longer-term health
                  system strengthening.
                </Text>
              </motion.div>

            </motion.div>


            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
              }}
              mt={{
                base: 14,
                md: 18,
              }}
              borderTop="1px solid"
              borderColor="whiteAlpha.300"
            >
              {responses.map((item, index) => (
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
                    delay: (index % 2) * 0.1,
                  }}
                >
                  <Box
                    h="100%"
                    py={{
                      base: 9,
                      md: 11,
                    }}
                    px={{
                      base: 0,
                      md: 8,
                    }}
                    borderBottom="1px solid"
                    borderLeft={{
                      base: "none",
                      md:
                        index % 2 === 0
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
                      maxW="520px"
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
                      maxW="520px"
                      color="whiteAlpha.700"
                      fontSize="sm"
                      lineHeight="1.8"
                    >
                      {item.description}
                    </Text>


                    <Link
                      as={RouterLink}
                      to={item.href}
                      display="inline-flex"
                      alignItems="center"
                      gap={3}
                      mt={7}
                      color="white"
                      fontSize="xs"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.1em"
                      _hover={{
                        color: "qha.red",
                        textDecoration: "none",
                      }}
                    >
                      Explore Program

                      <Box
                        as="span"
                        fontSize="lg"
                      >
                        →
                      </Box>
                    </Link>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>

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

export default Challenge;