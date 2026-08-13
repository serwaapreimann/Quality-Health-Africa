import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa"

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Conference", href: "/conference" },
]

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
]

const involvementLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/get-involved#volunteer" },
  { label: "Partner With Us", href: "/get-involved#partner" },
  { label: "Contact Us", href: "/contact" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/teamqha/",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/qualityhealthafrica",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?app=desktop&v=R_OIMjRlWBw",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/qualityhealthafrica/",
    icon: FaInstagram,
  },
]

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
  )
}

function SocialIcon({ social, size = "42px", iconSize = "17px" }) {
  return (
    <Link
      href={social.href}
      isExternal
      aria-label={social.label}
      w={size}
      h={size}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      color="whiteAlpha.800"
      transition="all 0.25s ease"
      _hover={{
        bg: "qha.orange",
        color: "black",
        transform: "scale(1.08)",
        textDecoration: "none",
      }}
    >
      <Icon
        as={social.icon}
        boxSize={iconSize}
      />
    </Link>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* =====================================================
          DESKTOP FIXED SOCIAL RAIL
      ===================================================== */}
      <Flex
        display={{
          base: "none",
          lg: "flex",
        }}
        position="fixed"
        right={{
          lg: 5,
          xl: 7,
        }}
        top="50%"
        transform="translateY(-50%)"
        direction="column"
        align="center"
        gap={2}
        bg="rgba(0, 0, 0, 0.88)"
        backdropFilter="blur(12px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="full"
        px={2}
        py={3}
        zIndex="9999"
        boxShadow="0 12px 32px rgba(0, 0, 0, 0.18)"
      >
        {socialLinks.map((social) => (
          <SocialIcon
            key={social.label}
            social={social}
          />
        ))}
      </Flex>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Box
        as="footer"
        bg="black"
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
            xl: 20,
          }}
          pt={{
            md: 16,
            lg: 20,
          }}
          pb={8}
        >
          <Box
            maxW="1500px"
            mx="auto"
          >
            {/* NAVIGATION */}
            <SimpleGrid
              columns={3}
              spacingX={{
                md: 10,
                lg: 20,
                xl: 28,
              }}
              spacingY={12}
              pb={{
                md: 12,
                lg: 14,
              }}
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

            {/* =====================================================
                TABLET SOCIALS
            ===================================================== */}
            <Flex
              display={{
                base: "none",
                md: "flex",
                lg: "none",
              }}
              align="center"
              justify="flex-start"
              pb={8}
            >
              <HStack spacing={3}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    isExternal
                    aria-label={social.label}
                    w="42px"
                    h="42px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    borderRadius="full"
                    color="whiteAlpha.800"
                    transition="all 0.25s ease"
                    _hover={{
                      bg: "qha.orange",
                      borderColor: "qha.orange",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    <Icon
                      as={social.icon}
                      boxSize="17px"
                    />
                  </Link>
                ))}
              </HStack>
            </Flex>

            {/* DIVIDER */}
            <Box
              borderTop="1px solid"
              borderColor="whiteAlpha.200"
            />

            {/* BOTTOM BAR */}
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
                  textAlign="right"
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
            MOBILE FOOTER
        ===================================================== */}
        <Flex
          display={{
            base: "flex",
            md: "none",
          }}
          direction="column"
          justify="center"
          align="center"
          px={5}
          py={7}
          textAlign="center"
          gap={5}
        >
          {/* MOBILE SOCIALS */}
          <HStack spacing={3}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                isExternal
                aria-label={social.label}
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="full"
                color="whiteAlpha.800"
                transition="all 0.25s ease"
                _hover={{
                  bg: "qha.orange",
                  borderColor: "qha.orange",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Icon
                  as={social.icon}
                  boxSize="16px"
                />
              </Link>
            ))}
          </HStack>

          {/* MOBILE DEVELOPER */}
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
    </>
  )
}

export default Footer