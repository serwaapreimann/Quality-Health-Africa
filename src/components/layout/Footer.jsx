import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import qhaLogo from "../../assets/logos/qha-logo.png";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Conference", href: "/conference" },
];

const programLinks = [
  {
    label: "Quarterly Health Fairs",
    href: "/programs/health-fairs",
  },
  {
    label: "Medical Equipment Donations",
    href: "/programs/equipment-donations",
  },
  {
    label: "Hospital & Clinic Construction",
    href: "/programs/healthcare-infrastructure",
  },
  {
    label: "Eva's Women's Health Initiative",
    href: "/programs/evas-womens-health",
  },
];

const involvementLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/get-involved#volunteer" },
  { label: "Partner With Us", href: "/get-involved#partner" },
  { label: "Contact Us", href: "/contact" },
];

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      color="whiteAlpha.700"
      fontSize="sm"
      lineHeight="1.6"
      transition="color 0.2s ease"
      _hover={{
        color: "qha.orange",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="qha.tealDark"
      color="white"
    >
      {/* =====================================================
          DESKTOP / TABLET FOOTER
      ===================================================== */}
      <Box
        display={{
          base: "none",
          md: "block",
        }}
        px={{
          md: 10,
          lg: 14,
          xl: 16,
        }}
        pt={{
          md: 20,
          lg: 24,
        }}
        pb={8}
      >
        <Box maxW="1500px" mx="auto">
          {/* TOP FOOTER */}
          <Grid
            templateColumns={{
              md: "1fr",
              lg: "1.15fr 1.85fr",
            }}
            gap={{
              md: 14,
              lg: 20,
              xl: 28,
            }}
          >
            {/* BRAND */}
            <GridItem>
              <Link
                href="/"
                display="inline-block"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Image
                  src={qhaLogo}
                  alt="Quality Health Africa"
                  w={{
                    md: "190px",
                    lg: "210px",
                  }}
                  h="auto"
                />
              </Link>
            </GridItem>

            {/* NAVIGATION */}
            <GridItem>
              <SimpleGrid
                columns={3}
                spacingX={{
                  md: 8,
                  lg: 12,
                }}
                spacingY={12}
              >
                {/* EXPLORE */}
                <Box>
                  <Text
                    mb={5}
                    color="white"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                  >
                    Explore
                  </Text>

                  <VStack
                    align="flex-start"
                    spacing={3}
                  >
                    {exploreLinks.map((link) => (
                      <FooterLink
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </FooterLink>
                    ))}
                  </VStack>
                </Box>

                {/* PROGRAMS */}
                <Box>
                  <Text
                    mb={5}
                    color="white"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                  >
                    Programs
                  </Text>

                  <VStack
                    align="flex-start"
                    spacing={3}
                  >
                    {programLinks.map((link) => (
                      <FooterLink
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </FooterLink>
                    ))}
                  </VStack>
                </Box>

                {/* GET INVOLVED */}
                <Box>
                  <Text
                    mb={5}
                    color="white"
                    fontSize="xs"
                    fontWeight="800"
                    textTransform="uppercase"
                    letterSpacing="0.16em"
                  >
                    Get Involved
                  </Text>

                  <VStack
                    align="flex-start"
                    spacing={3}
                  >
                    {involvementLinks.map((link) => (
                      <FooterLink
                        key={link.label}
                        href={link.href}
                      >
                        {link.label}
                      </FooterLink>
                    ))}
                  </VStack>
                </Box>
              </SimpleGrid>
            </GridItem>
          </Grid>


          {/* DESKTOP BOTTOM BAR */}
          <Flex
            justify="space-between"
            align="center"
            gap={6}
            pt={7}
          >
            {/* COPYRIGHT */}
            <Box flex="1">
              <Text
                color="whiteAlpha.600"
                fontSize="xs"
              >
                © {currentYear} Quality Health Africa. All rights reserved.
              </Text>
            </Box>

            {/* TECHNOLOGY */}
            <Flex
              flex="1"
              justify="center"
              align="center"
              gap={2}
              color="whiteAlpha.600"
              fontSize="xs"
              whiteSpace="nowrap"
            >
              <Text>React</Text>

              <Text color="qha.orange">
                •
              </Text>

              <Text>JavaScript</Text>

              <Text color="qha.orange">
                •
              </Text>

              <Text>Chakra UI</Text>
            </Flex>

            {/* DEVELOPER */}
            <Flex
              flex="1"
              justify="flex-end"
            >
              <Text
                color="whiteAlpha.600"
                fontSize="xs"
              >
                Developed by{" "}
                <Link
                  href="https://x.com/SerwaaPreimann"
                  isExternal
                  color="white"
                  fontWeight="700"
                  transition="color 0.2s ease"
                  _hover={{
                    color: "qha.orange",
                    textDecoration: "none",
                  }}
                >
                  Serwaa Preimann
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* =====================================================
          MOBILE FOOTER — SIMPLE
      ===================================================== */}
      <Flex
        display={{
          base: "flex",
          md: "none",
        }}
        justify="center"
        align="center"
        px={5}
        py={6}
        textAlign="center"
      >
        <Text
          color="whiteAlpha.700"
          fontSize="xs"
        >
          Developed by{" "}
          <Link
            href="https://x.com/SerwaaPreimann"
            isExternal
            color="white"
            fontWeight="700"
            transition="color 0.2s ease"
            _hover={{
              color: "qha.orange",
              textDecoration: "none",
            }}
          >
            Serwaa Preimann
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;