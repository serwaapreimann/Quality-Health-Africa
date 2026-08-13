import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

// Replace these with your actual program images
import healthFairsImage from "../../assets/images/qha-healthfair.png";
import equipmentImage from "../../assets/images/qha-clinics.jpg";
import infrastructureImage from "../../assets/images/qha-hero--4.jpg";
import conferenceImage from "../../assets/images/qha-conference.jpg";

const programs = [
  {
    number: "01",
    title: "Quarterly Health Fairs",
    description:
      "Bringing free, comprehensive healthcare directly into underserved communities through screenings, primary care, maternal and child health services, medications, health education, and referrals.",
    image: healthFairsImage,
    href: "/programs/health-fairs",
  },
  {
    number: "02",
    title: "Medical Equipment Donations",
    description:
      "Strengthening hospitals, clinics, and health centers with essential medical equipment and supplies while supporting the training and maintenance needed for sustainable use.",
    image: equipmentImage,
    href: "/programs/equipment-donations",
  },
  {
    number: "03",
    title: "Hospital & Clinic Construction",
    description:
      "Building and strengthening healthcare infrastructure designed to serve communities for the long term, from community clinics and maternity wards to diagnostic facilities and mobile health services.",
    image: infrastructureImage,
    href: "/programs/healthcare-infrastructure",
  },
  {
    number: "04",
    title: "Quality Health Africa Conference",
    description:
      "Connecting healthcare professionals, policymakers, innovators, community leaders, NGOs, corporate partners, and diaspora advocates to advance practical solutions for healthcare access across Africa.",
    image: conferenceImage,
    href: "/programs/conference",
  },
];

function ProgramsSection() {
  return (
    <Box
      as="section"
      id="programs"
      bg="qha.warmWhite"
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
        {/* SECTION INTRO */}
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          justify="space-between"
          align={{
            base: "flex-start",
            lg: "flex-end",
          }}
          gap={8}
          mb={{
            base: 16,
            md: 20,
            lg: 24,
          }}
        >
          <Box>
            <Flex align="center" gap={4} mb={7}>
              <Text
                color="qha.teal"
                fontSize="xs"
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.2em"
              >
                Our Response
              </Text>

              <Box
                w="55px"
                h="2px"
                bg="qha.orange"
              />
            </Flex>

            <Heading
              as="h2"
              maxW="760px"
              color="qha.tealDark"
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
              From access
              <br />
              to action.
            </Heading>
          </Box>

          <Text
            maxW="430px"
            color="gray.600"
            fontSize={{
              base: "md",
              md: "lg",
            }}
            lineHeight="1.8"
          >
            QHA addresses healthcare inequities through four core
            programs designed to deliver care today while strengthening
            the systems communities depend on tomorrow.
          </Text>
        </Flex>

        {/* PROGRAMS */}
        <Box>
          {programs.map((program, index) => {
            const imageOnLeft = index % 2 !== 0;

            return (
              <Flex
                key={program.number}
                direction={{
                  base: "column",
                  lg: imageOnLeft ? "row" : "row-reverse",
                }}
                align="stretch"
                gap={{
                  base: 8,
                  lg: 14,
                  xl: 20,
                }}
                py={{
                  base: 12,
                  md: 16,
                  lg: 20,
                }}
                borderTop="1px solid"
                borderColor="gray.300"
              >
                {/* IMAGE */}
                <Box
                  flex="1.15"
                  overflow="hidden"
                  borderRadius={{
                    base: "18px",
                    md: "24px",
                  }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    w="100%"
                    h={{
                      base: "320px",
                      sm: "400px",
                      md: "500px",
                      lg: "560px",
                    }}
                    objectFit="cover"
                    transition="transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
                    _hover={{
                      transform: "scale(1.04)",
                    }}
                  />
                </Box>

                {/* CONTENT */}
                <Flex
                  flex="0.85"
                  direction="column"
                  justify="center"
                  align="flex-start"
                  py={{
                    base: 0,
                    lg: 8,
                  }}
                >
                  <Text
                    color="qha.orange"
                    fontSize="xs"
                    fontWeight="800"
                    letterSpacing="0.18em"
                    mb={5}
                  >
                    {program.number}
                  </Text>

                  <Heading
                    as="h3"
                    color="qha.tealDark"
                    maxW="540px"
                    fontSize={{
                      base: "3xl",
                      sm: "4xl",
                      md: "5xl",
                      lg: "5xl",
                    }}
                    lineHeight="1.05"
                    letterSpacing="-0.04em"
                    fontWeight="700"
                  >
                    {program.title}
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
                    {program.description}
                  </Text>

                  <Link
                    href={program.href}
                    display="inline-flex"
                    alignItems="center"
                    gap={3}
                    mt={8}
                    color="qha.tealDark"
                    fontSize="sm"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.1em"
                    transition="color 0.2s ease"
                    _hover={{
                      color: "qha.orange",
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
                </Flex>
              </Flex>
            );
          })}
        </Box>

        {/* ALL PROGRAMS LINK */}
        <Flex
          justify={{
            base: "flex-start",
            md: "flex-end",
          }}
          pt={{
            base: 8,
            md: 12,
          }}
          borderTop="1px solid"
          borderColor="gray.300"
        >
          <Link
            href="/programs"
            color="qha.tealDark"
            fontSize="sm"
            fontWeight="800"
            textTransform="uppercase"
            letterSpacing="0.1em"
            _hover={{
              color: "qha.orange",
              textDecoration: "none",
            }}
          >
            View All Programs &nbsp; →
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProgramsSection;