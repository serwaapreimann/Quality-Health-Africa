import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
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
      staggerChildren: 0.12,
    },
  },
};


// ============================================================
// STORIES / MEDIA FEED
// Replace placeholder IDs as you add more QHA videos.
// ============================================================

const stories = [
  {
    youtubeId: "zSIKZEb4Tjk",
    title: "Nana's Project",
    category: "Medical Equipment",
    location: "Ghana",
  },

  {
    youtubeId: "R_OIMjRlWBw",
    title: "Quality Health Africa",
    category: "Behind The Mission",
    location: "Ghana",
  },

  {
    youtubeId: "ZFeH7PTaOAs",
    title: "Care In The Community",
    category: "Outreach",
    location: "Ghana",
  },

  {
    youtubeId: "ESs1K4CPGDk",
    title: "Media Coverage",
    category: "News",
    location: "USA",
  },

  {
    youtubeId: "Mqp9Y8X8gcA",
    title: "Health Equity In Action",
    category: "Community Health",
    location: "Ghana",
  },

  {
    youtubeId: "EOTMmTn-u30",
    title: "The People Behind The Work",
    category: "Conference",
    location: "USA",
  },

];


// ============================================================
// STORY CARD
// ============================================================

function StoryCard({
  story,
  index,
}) {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Box
        bg="white"
        borderRadius={{
          base: "18px",
          md: "22px",
        }}
        overflow="hidden"
        border="1px solid"
        borderColor="gray.200"
        transition="all 0.35s ease"
        _hover={{
          transform: "translateY(-6px)",
          boxShadow:
            "0 25px 55px rgba(0,0,0,0.10)",
        }}
      >

        {/* =================================================
            VIDEO
        ================================================= */}
        <Box
          position="relative"
          w="100%"
          bg="black"
          aspectRatio="9 / 12"
          overflow="hidden"
        >
          <Box
            as="iframe"
            src={`https://www.youtube-nocookie.com/embed/${story.youtubeId}?rel=0`}
            title={story.title}
            position="absolute"
            inset="0"
            w="100%"
            h="100%"
            border="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "
            allowFullScreen
            loading="lazy"
          />

          {/* NUMBER */}
          <Flex
            position="absolute"
            top={4}
            left={4}
            zIndex="3"
            align="center"
            justify="center"
            w="34px"
            h="34px"
            borderRadius="full"
            bg="rgba(0,0,0,0.68)"
            backdropFilter="blur(8px)"
            pointerEvents="none"
          >
            <Text
              color="white"
              fontSize="10px"
              fontWeight="800"
            >
              {String(index + 1).padStart(2, "0")}
            </Text>
          </Flex>
        </Box>


        {/* =================================================
            POST INFORMATION
        ================================================= */}
        <Box
          px={{
            base: 5,
            md: 6,
          }}
          py={{
            base: 5,
            md: 6,
          }}
        >
          <Flex
            align="center"
            gap={2}
          >
            <Box
              w="7px"
              h="7px"
              bg="qha.red"
              borderRadius="full"
            />

            <Text
              color="qha.red"
              fontSize="10px"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="0.14em"
            >
              {story.category}
            </Text>
          </Flex>


          <Heading
            as="h3"
            mt={3}
            color="qha.black"
            fontSize={{
              base: "xl",
              md: "2xl",
            }}
            lineHeight="1.15"
            letterSpacing="-0.03em"
            fontWeight="650"
          >
            {story.title}
          </Heading>


          <Text
            mt={3}
            color="gray.500"
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="0.1em"
          >
            {story.location}
          </Text>
        </Box>

      </Box>
    </motion.div>
  );
}


// ============================================================
// STORIES PAGE
// ============================================================

function Stories() {
  const thumbnailStories = stories.filter(
    (story) =>
      story.youtubeId &&
      !story.youtubeId.startsWith("YOUR_VIDEO_ID")
  );

  return (
    <Box bg="qha.warmWhite">

      <Navbar />


      <Box as="main">

        {/* =====================================================
            CINEMATIC STORIES HERO
        ===================================================== */}
        <Box
          as="section"
          position="relative"
          overflow="hidden"
          bg="black"
          color="white"
          minH={{
            base: "620px",
            md: "700px",
            lg: "760px",
          }}
          display="flex"
          alignItems="center"
        >

          {/* =================================================
              BACKGROUND MEDIA WALL
          ================================================= */}
          <Box
            position="absolute"
            inset="0"
            overflow="hidden"
            opacity="0.44"
          >

            {/* =============================================
                TOP MOVING ROW
            ============================================= */}
            <motion.div
              animate={{
                x: ["0%", "-25%"],
              }}
              transition={{
                duration: 34,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                display: "flex",
                gap: "18px",
                width: "max-content",
                position: "absolute",
                top: "4%",
                left: "-5%",
              }}
            >
              {[
                ...thumbnailStories,
                ...thumbnailStories,
                ...thumbnailStories,
              ].map((story, index) => (
                <Box
                  key={`top-${story.youtubeId}-${index}`}
                  position="relative"
                  w={{
                    base: "190px",
                    sm: "230px",
                    md: "280px",
                    lg: "320px",
                  }}
                  h={{
                    base: "120px",
                    sm: "145px",
                    md: "175px",
                    lg: "195px",
                  }}
                  borderRadius={{
                    base: "12px",
                    md: "16px",
                  }}
                  overflow="hidden"
                  flexShrink={0}
                >
                  <Box
                    as="img"
                    src={`https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`}
                    alt=""
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />

                  <Box
                    position="absolute"
                    inset="0"
                    bg="rgba(0,0,0,0.12)"
                  />
                </Box>
              ))}
            </motion.div>


            {/* =============================================
                BOTTOM MOVING ROW
            ============================================= */}
            <motion.div
              animate={{
                x: ["-25%", "0%"],
              }}
              transition={{
                duration: 39,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                display: "flex",
                gap: "18px",
                width: "max-content",
                position: "absolute",
                bottom: "4%",
                left: "-10%",
              }}
            >
              {[
                ...thumbnailStories,
                ...thumbnailStories,
                ...thumbnailStories,
              ].map((story, index) => (
                <Box
                  key={`bottom-${story.youtubeId}-${index}`}
                  position="relative"
                  w={{
                    base: "190px",
                    sm: "230px",
                    md: "280px",
                    lg: "320px",
                  }}
                  h={{
                    base: "120px",
                    sm: "145px",
                    md: "175px",
                    lg: "195px",
                  }}
                  borderRadius={{
                    base: "12px",
                    md: "16px",
                  }}
                  overflow="hidden"
                  flexShrink={0}
                >
                  <Box
                    as="img"
                    src={`https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`}
                    alt=""
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />

                  <Box
                    position="absolute"
                    inset="0"
                    bg="rgba(0,0,0,0.12)"
                  />
                </Box>
              ))}
            </motion.div>

          </Box>


          {/* =================================================
              GENERAL DARK OVERLAY
          ================================================= */}
          <Box
            position="absolute"
            inset="0"
            zIndex="1"
            bg="rgba(0,0,0,0.38)"
          />


          {/* =================================================
              CENTER FOCUS GRADIENT
          ================================================= */}
          <Box
            position="absolute"
            inset="0"
            zIndex="2"
            bgGradient="
              radial(
                circle at center,
                rgba(0,0,0,0.32) 0%,
                rgba(0,0,0,0.70) 58%,
                rgba(0,0,0,0.94) 100%
              )
            "
          />


          {/* =================================================
              SUBTLE TOP + BOTTOM FADE
          ================================================= */}
          <Box
            position="absolute"
            inset="0"
            zIndex="2"
            bgGradient="
              linear(
                to-b,
                rgba(0,0,0,0.70),
                transparent 25%,
                transparent 72%,
                rgba(0,0,0,0.78)
              )
            "
          />


          {/* =================================================
              CENTER HERO CONTENT
          ================================================= */}
          <Flex
            position="relative"
            zIndex="5"
            w="100%"
            justify="center"
            align="center"
            textAlign="center"
            px={{
              base: 5,
              sm: 7,
              md: 10,
            }}
            py={{
              base: 24,
              md: 28,
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{
                width: "100%",
              }}
            >
              <Box
                maxW="1050px"
                mx="auto"
              >

                {/* =============================================
                    QHA LABEL
                ============================================= */}
                <motion.div variants={fadeUp}>
                  <Flex
                    justify="center"
                    align="center"
                    gap={4}
                    mb={7}
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
                      color="whiteAlpha.800"
                      fontSize="10px"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.22em"
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
                    STORIES LABEL
                ============================================= */}
                <motion.div variants={fadeUp}>
                  <Text
                    color="qha.red"
                    fontSize={{
                      base: "xs",
                      md: "sm",
                    }}
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.35em"
                    mb={5}
                  >
                    Stories
                  </Text>
                </motion.div>


                {/* =============================================
                    HERO HEADLINE
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
                    letterSpacing="-0.05em"
                    fontWeight="700"
                    textShadow="0 4px 30px rgba(0,0,0,0.3)"
                  >
                    This is what
                    <br />
                    impact looks like.
                  </Heading>
                </motion.div>


                {/* =============================================
                    DESCRIPTION
                ============================================= */}
                <motion.div variants={fadeUp}>
                  <Text
                    mt={{
                      base: 7,
                      md: 9,
                    }}
                    mx="auto"
                    maxW="680px"
                    color="whiteAlpha.800"
                    fontSize={{
                      base: "md",
                      md: "lg",
                    }}
                    lineHeight="1.8"
                  >
                    The people, places, partnerships, and moments behind
                    Quality Health Africa&apos;s work across communities.
                  </Text>
                </motion.div>


                {/* =============================================
                    SCROLL INDICATOR
                ============================================= */}
                <motion.div variants={fadeUp}>
                  <Flex
                    mt={{
                      base: 9,
                      md: 11,
                    }}
                    direction="column"
                    align="center"
                    gap={3}
                  >
                    <Text
                      color="whiteAlpha.600"
                      fontSize="9px"
                      fontWeight="800"
                      textTransform="uppercase"
                      letterSpacing="0.22em"
                    >
                      Explore The Stories
                    </Text>

                    <motion.div
                      animate={{
                        y: [0, 7, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Box
                        w="1px"
                        h="38px"
                        bgGradient="
                          linear(
                            to-b,
                            qha.red,
                            transparent
                          )
                        "
                      />
                    </motion.div>
                  </Flex>
                </motion.div>

              </Box>
            </motion.div>
          </Flex>

        </Box>


        {/* =====================================================
            MEDIA FEED
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
            md: 24,
            lg: 28,
          }}
        >
          <Box
            maxW="1500px"
            mx="auto"
          >

            {/* =================================================
                FEED INTRO
            ================================================= */}
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
                <Flex
                  align="center"
                  gap={4}
                  mb={7}
                >
                  <Text
                    color="qha.black"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.2em"
                  >
                    The QHA Feed
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
                  color="qha.black"
                  maxW="900px"
                  fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "6xl",
                  }}
                  lineHeight="1"
                  letterSpacing="-0.045em"
                  fontWeight="700"
                >
                  From the field.
                </Heading>
              </motion.div>


              <motion.div variants={fadeUp}>
                <Text
                  mt={6}
                  maxW="680px"
                  color="gray.600"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  lineHeight="1.8"
                >
                  Watch moments from QHA&apos;s programs, partnerships,
                  communities, and the people making the work possible.
                </Text>
              </motion.div>

            </motion.div>


            {/* =================================================
                INSTAGRAM-STYLE GRID
            ================================================= */}
            <Grid
              mt={{
                base: 12,
                md: 16,
              }}
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={{
                base: 6,
                md: 7,
                lg: 8,
              }}
            >
              {stories.map((story, index) => (
                <GridItem
                  key={`${story.youtubeId}-${index}`}
                  alignSelf="start"
                  mt={{
                    base: 0,

                    lg:
                      index % 3 === 1
                        ? 10
                        : index % 3 === 2
                          ? 4
                          : 0,
                  }}
                >
                  <StoryCard
                    story={story}
                    index={index}
                  />
                </GridItem>
              ))}
            </Grid>

          </Box>
        </Box>


        {/* =====================================================
            CLOSING SECTION
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
          <Box
            maxW="1500px"
            mx="auto"
          >
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
                letterSpacing="0.18em"
              >
                Behind The Work
              </Text>


              <Heading
                as="h2"
                mt={5}
                maxW="1100px"
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
                Healthcare has a human story.
                <br />
                We&apos;re here to tell it.
              </Heading>


              <Text
                mt={{
                  base: 7,
                  md: 9,
                }}
                maxW="760px"
                color="whiteAlpha.700"
                fontSize={{
                  base: "md",
                  md: "lg",
                }}
                lineHeight="1.85"
              >
                Every video captures a different part of the mission —
                the people receiving care, the professionals providing it,
                the partners making it possible, and the communities at
                the center of it all.
              </Text>


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


      <Footer />

    </Box>
  );
}

export default Stories;