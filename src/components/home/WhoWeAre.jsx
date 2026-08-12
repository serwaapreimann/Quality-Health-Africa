import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

function WhoWeAre() {
  return (
    <Box
      as="section"
      id="about"
      bg="qha.warmWhite"
      px={{
        base: 5,
        sm: 7,
        md: 10,
        lg: 14,
        xl: 16,
      }}
      py={{
        base: 10,
        md: 18,
        lg: 22,
      }}
    >
      <Box maxW="1500px" mx="auto">
        {/* SECTION LABEL */}
        <Flex
          align="center"
          gap={4}
          mb={{
            base: 10,
            md: 14,
          }}
        >
          <Text
            color="qha.teal"
            fontSize="xs"
            fontWeight="800"
            textTransform="uppercase"
            letterSpacing="0.2em"
            whiteSpace="nowrap"
          >
            Who We Are
          </Text>

          <Box
            w="55px"
            h="2px"
            bg="qha.orange"
          />
        </Flex>

        {/* MAIN CONTENT */}
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          gap={{
            base: 10,
            lg: 20,
            xl: 28,
          }}
          align="flex-start"
        >
          {/* LARGE STATEMENT */}
          <Box
            flex="1.15"
            maxW={{
              base: "100%",
              lg: "720px",
            }}
          >
            <Heading
              as="h2"
              color="qha.tealDark"
              fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "6xl",
                lg: "6xl",
                xl: "7xl",
              }}
              lineHeight={{
                base: "1.05",
                md: "1",
              }}
              letterSpacing="-0.045em"
              fontWeight="700"
            >
              Healthcare access shouldn&apos;t depend on where you live.
            </Heading>
          </Box>

          {/* DESCRIPTION */}
          <Box
            flex="0.85"
            maxW={{
              base: "100%",
              lg: "520px",
            }}
            pt={{
              base: 0,
              lg: 3,
            }}
          >
            <Text
              color="qha.charcoal"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.9"
            >
              Quality Health Africa is a nonprofit organization
              dedicated to making quality healthcare accessible to
              underserved communities across Africa.
            </Text>

            <Text
              mt={6}
              color="gray.600"
              fontSize={{
                base: "md",
                md: "lg",
              }}
              lineHeight="1.9"
            >
              Through direct healthcare services, essential medical
              equipment, sustainable healthcare infrastructure, and
              global collaboration, QHA works to bring care closer to
              the communities that need it most.
            </Text>

            {/* LINK */}
            <Link
              href="/about"
              display="inline-flex"
              alignItems="center"
              gap={3}
              mt={8}
              color="qha.tealDark"
              fontSize="sm"
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="0.1em"
              _hover={{
                color: "qha.orange",
                textDecoration: "none",
              }}
              transition="all 0.2s ease"
            >
              Discover Our Story

              <Box
                as="span"
                fontSize="lg"
                transition="transform 0.2s ease"
                sx={{
                  "a:hover &": {
                    transform: "translateX(5px)",
                  },
                }}
              >
                →
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default WhoWeAre;