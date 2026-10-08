
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import abigailImg from "../assets/images/partners/partner-abigail.jpeg";
import benjaminImg from "../assets/images/partners/partner-benjamin.jpeg";
import brobbeyLogo from "../assets/images/partners/partner-brobbey.jpeg";
import healthWealthLogo from "../assets/images/partners/partner-health-wealth.jpeg";


const MotionBox = motion.create(Box);

const RED = "#B91C2B";
const RED_DARK = "#8E1420";
const BLACK = "#151515";
const CREAM = "#FAF8F5";
const MUTED = "#666666";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const people = [
  {
    id: "abigail",
    name: "Dr. Abigail Wilson",
    category: "GLOBAL HEALTH & HEALTHCARE INNOVATION",
    title: "Award-Winning Clinical Pharmacist & Global Health Innovator",
    image: abigailImg,
    introduction:
      "A healthcare innovator advancing equitable access to health education, technology, and improved patient outcomes for underserved communities.",
    biography: [
      "Dr. Abigail Wilson is a clinical pharmacist whose work spans global health, healthcare innovation, education, and policy. Her commitment to developing practical, technology-driven solutions has focused on improving outcomes for marginalized populations.",
      "In 2023, she received the Presidential Lifetime Achievement Award in recognition of her contributions. She was also recognized by Ghana Police Hospital in 2020 for developing a tailored COVID-19 testing booth during the pandemic.",
      "As founder and lead implementer of Health Is Wealth Youth, she has contributed to health education initiatives reaching more than 20,000 students on non-communicable diseases, alongside training for healthcare professionals in appropriate oxytocin dosing to support maternal health.",
      "Her affiliations include WHO Fides, UN Women affinity membership, and serving as a technical advisor to the Center for Learning and Childhood Development in Ghana, where she has contributed to the design of a mobile rehabilitation clinic for children with cerebral palsy.",
    ],
    credentials: [
      "Doctor of Pharmacy — Ohio, USA",
      "Data Analytics Certification — Harvard Business School",
      "Women's Entrepreneurship Certification — Cornell University",
    ],
    highlights: [
      { value: "20K+", label: "Students educated" },
      { value: "2023", label: "Lifetime Achievement Award" },
    ],
  },
  {
    id: "benjamin",
    name: "Benjamin Bedford Taylor",
    category: "TECHNOLOGY & STRATEGIC LEADERSHIP",
    title: "Technology Executive & Digital Transformation Leader",
    image: benjaminImg,
    introduction:
      "An accomplished technology executive bringing more than two decades of leadership in digital transformation, enterprise strategy, and global program delivery.",
    biography: [
      "Benjamin Bedford Taylor is a PMP-certified program leader with more than 20 years of experience delivering enterprise technology strategy and complex global initiatives across government, telecommunications, healthcare, retail, housing, and software industries.",
      "He has directed large-scale transformation initiatives with budgets exceeding $120 million and led global organizations of more than 200 cross-functional professionals.",
      "His expertise includes enterprise program and portfolio management, technology modernization, PMO leadership, IT governance, strategic planning, and organizational change management.",
      "A trusted advisor to executive leadership teams, Benjamin specializes in aligning technology investments with organizational objectives, strengthening operational performance, and delivering measurable results through strategic governance and effective program execution.",
    ],
    credentials: [
      "Executive Certificate in Technology — MIT Sloan Executive Education",
      "Master of Business Administration — University of Toledo",
      "Bachelor of Science in Mechanical Engineering — University of Toledo",
      "Project Management Professional (PMP)",
    ],
    highlights: [
      { value: "20+", label: "Years of experience" },
      { value: "$120M+", label: "Programs led" },
    ],
  },
];

const organizations = [
  {
    name: "Brobbey Group",
    type: "REAL ESTATE • BUSINESS DEVELOPMENT • PARTNERSHIPS",
    image: brobbeyLogo,
    description:
      "Building relationships. Creating opportunities. Delivering results.",
    location: "Virginia • Washington, DC • Maryland",
  },
  {
    name: "Health Is Wealth Youth",
    type: "HEALTH EDUCATION • EMPOWERMENT • EQUITY",
    image: healthWealthLogo,
    description:
      "A nonprofit advancing health education, empowerment, and equitable access to health knowledge.",
    location: "Educate • Empower • Equity",
  },
];

function SectionLabel({ children }) {
  return (
    <Flex align="center" gap="12px" mb="20px">
      <Box w="28px" h="2px" bg={RED} />
      <Text
        fontSize="11px"
        fontWeight="800"
        letterSpacing="2.5px"
        color={RED}
      >
        {children}
      </Text>
    </Flex>
  );
}

function PersonProfile({ person, index }) {
  const [expanded, setExpanded] = useState(false);
  const reversed = index % 2 === 1;
  return (

    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
      mb={{ base: "95px", lg: "150px" }}
    > 
      <Flex
        direction={{
          base: "column",
          lg: reversed ? "row-reverse" : "row",
        }}
        gap={{ base: "36px", lg: "85px" }}
        align="center"
      >
        <Box
          w={{ base: "100%", lg: "46%" }}
          position="relative"
          flexShrink={0}
        >
          <Box
            position="absolute"
            top="18px"
            left={reversed ? "auto" : "-15px"}
            right={reversed ? "-15px" : "auto"}
            w="100%"
            h="100%"
            border="1px solid"
            borderColor="rgba(185,28,43,0.22)"
            zIndex={0}
            display={{ base: "none", md: "block" }}
          />

          <Image
            src={person.image}
            alt={`Portrait of ${person.name}`}
            w="100%"
            h={{ base: "440px", md: "580px" }}
            objectFit="cover"
            objectPosition="center top"
            position="relative"
            zIndex={1}
            loading="lazy"
          />

          <Box
            position="absolute"
            bottom="-16px"
            right={reversed ? "auto" : "-12px"}
            left={reversed ? "-12px" : "auto"}
            w="100px"
            h="100px"
            bg={RED}
            zIndex={0}
          />
        </Box>

        <Box flex="1" w="100%">
          <SectionLabel>{person.category}</SectionLabel>

          <Heading
            as="h3"
            fontSize={{ base: "38px", md: "54px", lg: "62px" }}
            lineHeight="1.06"
            letterSpacing="-2px"
            color={BLACK}
            fontWeight="800"
            mb="20px"
          >
            {person.name}
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight="600"
            color={RED_DARK}
            mb="25px"
            lineHeight="1.6"
          >
            {person.title}
          </Text>

          <Text
            fontSize="16px"
            color={MUTED}
            lineHeight="1.95"
            mb="32px"
          >
            {person.introduction}
          </Text>

          <SimpleGrid columns={2} gap="22px" mb="35px">
            {person.highlights.map((highlight) => (
              <Box
                key={highlight.label}
                borderTop="1px solid"
                borderColor="#E2DDD8"
                pt="18px"
              >
                <Heading
                  fontSize={{ base: "30px", md: "39px" }}
                  color={BLACK}
                  fontWeight="800"
                >
                  {highlight.value}
                </Heading>
                <Text
                  fontSize="12px"
                  color={MUTED}
                  mt="5px"
                  lineHeight="1.6"
                >
                  {highlight.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`bio-${person.id}`}
            bg={BLACK}
            color="white"
            borderRadius="0"
            px="30px"
            py="25px"
            fontWeight="700"
            fontSize="12px"
            letterSpacing="1px"
            _hover={{ bg: RED }}
          >
            {expanded ? "CLOSE BIOGRAPHY −" : "EXPLORE BIOGRAPHY +"}
          </Button>
        </Box>
      </Flex>

      {expanded && (
        <MotionBox
          id={`bio-${person.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          mt={{ base: "45px", lg: "65px" }}
          p={{ base: "28px", md: "50px", lg: "65px" }}
          bg={CREAM}
          borderLeft="3px solid"
          borderColor={RED}
        >
          <SectionLabel>THE STORY & EXPERIENCE</SectionLabel>

          <Heading
            fontSize={{ base: "25px", md: "34px" }}
            mb="28px"
            color={BLACK}
          >
            A commitment to meaningful impact.
          </Heading>

          <Box maxW="850px">
            {person.biography.map((paragraph, i) => (
              <Text
                key={i}
                fontSize="15px"
                color="#505050"
                lineHeight="2"
                mb="20px"
              >
                {paragraph}
              </Text>
            ))}
          </Box>

          <Box mt="35px" pt="28px" borderTop="1px solid #DED9D4">
            <Heading fontSize="17px" color={BLACK} mb="18px">
              Education & Credentials
            </Heading>

            {person.credentials.map((credential) => (
              <Flex key={credential} gap="12px" mb="12px" align="start">
                <Box
                  mt="9px"
                  w="6px"
                  h="6px"
                  bg={RED}
                  flexShrink={0}
                />
                <Text fontSize="14px" lineHeight="1.7" color={MUTED}>
                  {credential}
                </Text>
              </Flex>
            ))}
          </Box>
        </MotionBox>
      )}
    </MotionBox>
  );
}

function OrganizationCard({ organization }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      bg="white"
      border="1px solid #ECE8E4"
      overflow="hidden"
      _hover={{
        boxShadow: "0 22px 65px rgba(0,0,0,0.07)",
        borderColor: "#D6C9C9",
      }}
    >
      <Flex
        h={{ base: "240px", md: "330px" }}
        align="center"
        justify="center"
        p={{ base: "25px", md: "48px" }}
        bg="white"
        borderBottom="1px solid #F0ECE8"
      >
        <Image
          src={organization.image}
          alt={`${organization.name} logo`}
          maxW="100%"
          maxH="100%"
          objectFit="contain"
          loading="lazy"
        />
      </Flex>

      <Box p={{ base: "28px", md: "42px" }}>
        <Text
          color={RED}
          fontSize="10px"
          fontWeight="800"
          letterSpacing="1.5px"
          lineHeight="1.8"
          mb="14px"
        >
          {organization.type}
        </Text>

        <Heading
          as="h3"
          fontSize={{ base: "27px", md: "34px" }}
          color={BLACK}
          letterSpacing="-1px"
          mb="15px"
        >
          {organization.name}
        </Heading>

        <Text fontSize="15px" lineHeight="1.85" color={MUTED} mb="25px">
          {organization.description}
        </Text>

        <Box h="1px" bg="#EAE5E0" mb="18px" />

        <Text
          fontSize="12px"
          fontWeight="700"
          color="#888"
          letterSpacing="0.5px"
        >
          {organization.location}
        </Text>
      </Box>
    </MotionBox>
  );
}

export default function Partners() {
  return (
    
    <Box bg="qha.warmWhite" overflow="hidden">
      <Navbar />
      {/* HERO */}
      <Box
        bg="BLACK"
        color="white"
        position="relative"
        overflow="hidden"
        pt={{ base: "120px", md: "160px" }}
        pb={{ base: "110px", md: "155px" }}
        px={{ base: "22px", md: "55px" }}
      >
        <Box
          position="absolute"
          right="-120px"
          top="-170px"
          w={{ base: "360px", md: "650px" }}
          h={{ base: "360px", md: "650px" }}
          border="1px solid rgba(255,255,255,0.10)"
          borderRadius="50%"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          right="-35px"
          top="-85px"
          w={{ base: "250px", md: "470px" }}
          h={{ base: "250px", md: "470px" }}
          border="1px solid rgba(255,255,255,0.10)"
          borderRadius="50%"
          pointerEvents="none"
        />

        <Box maxW="1250px" mx="auto" position="relative" zIndex={1}>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>OUR PARTNERS & COLLABORATORS</SectionLabel>

            <Heading
              as="h1"
              fontSize={{
                base: "53px",
                md: "85px",
                lg: "112px",
              }}
              lineHeight="0.99"
              letterSpacing={{ base: "-2px", md: "-5px" }}
              fontWeight="800"
              maxW="1100px"
              mb="35px"
            >
              Stronger together.
              <Box as="span" display="block" color="#E34C58">
                Greater impact.
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "16px", md: "20px" }}
              lineHeight="1.85"
              color="#C9C9C9"
              maxW="680px"
            >
              Meaningful progress begins with people and organizations
              who believe that quality healthcare should be within
              everyone's reach.
            </Text>
          </MotionBox>
        </Box>

        <Box
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          h="5px"
          bg={RED}
        />
      </Box>

      {/* INTRODUCTION */}
      <Box
        px={{ base: "22px", md: "55px" }}
        py={{ base: "90px", md: "135px" }}
      >
        <Flex
          maxW="1250px"
          mx="auto"
          gap={{ base: "25px", lg: "90px" }}
          direction={{ base: "column", lg: "row" }}
          align="start"
        >
          <Box flex="1">
            <SectionLabel>COLLECTIVE PURPOSE</SectionLabel>
            <Heading
              as="h2"
              fontSize={{ base: "37px", md: "57px" }}
              lineHeight="1.15"
              letterSpacing="-2px"
              color={BLACK}
            >
              Progress is never
              <Box as="span" color={RED}>
                {" "}made alone.
              </Box>
            </Heading>
          </Box>

          <Box flex="1">
            <Text
              color={MUTED}
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight="1.95"
            >
              At Quality Health Africa, collaboration is central to
              our vision for a healthier, more equitable future.
              We value the knowledge, leadership, innovation, and
              commitment that our partners bring to this mission.
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* INDIVIDUAL PARTNERS */}
      <Box
        px={{ base: "22px", md: "55px" }}
        pt={{ base: "20px", md: "35px" }}
        pb={{ base: "25px", md: "40px" }}
      >
        <Box maxW="1250px" mx="auto">
          <Box mb={{ base: "65px", md: "100px" }}>
            <SectionLabel>THE PEOPLE BEHIND THE PROGRESS</SectionLabel>
            <Heading
              as="h2"
              fontSize={{ base: "40px", md: "65px" }}
              letterSpacing="-2px"
              color={BLACK}
              maxW="850px"
            >
              Leadership that inspires change.
            </Heading>
          </Box>

          {people.map((person, index) => (
            <PersonProfile
              key={person.id}
              person={person}
              index={index}
            />
          ))}
        </Box>
      </Box>

      {/* ORGANIZATIONAL PARTNERS */}
      <Box
        bg={CREAM}
        px={{ base: "22px", md: "55px" }}
        py={{ base: "95px", md: "145px" }}
      >
        <Box maxW="1250px" mx="auto">
          <Box mb="60px">
            <SectionLabel>ORGANIZATIONAL PARTNERS</SectionLabel>

            <Heading
              as="h2"
              fontSize={{ base: "40px", md: "65px" }}
              letterSpacing="-2px"
              color={BLACK}
              mb="22px"
            >
              United by purpose.
            </Heading>

            <Text
              fontSize="17px"
              color={MUTED}
              maxW="650px"
              lineHeight="1.9"
            >
              Organizations bringing their own strengths and
              perspectives to the shared pursuit of lasting impact.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="28px">
            {organizations.map((organization) => (
              <OrganizationCard
                key={organization.name}
                organization={organization}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* CALL TO ACTION */}
      <Box
        bg={RED_DARK}
        color="white"
        px={{ base: "22px", md: "55px" }}
        py={{ base: "105px", md: "145px" }}
        textAlign="center"
      >
        <Box maxW="850px" mx="auto">
          <Text
            fontSize="11px"
            fontWeight="800"
            letterSpacing="3px"
            mb="25px"
            color="#F4BEC2"
          >
            BUILD WITH US
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: "45px", md: "75px" }}
            letterSpacing="-3px"
            lineHeight="1.08"
            mb="28px"
          >
            The next chapter of impact starts together.
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "19px" }}
            lineHeight="1.9"
            color="#F5DDDF"
            mb="38px"
            maxW="650px"
            mx="auto"
          >
            Whether through expertise, innovation, resources, or
            shared vision, there is a place for meaningful
            collaboration in advancing healthcare equity.
          </Text>

          <Link to="/contact">
            <Button
              bg="white"
              color={RED_DARK}
              borderRadius="0"
              px="38px"
              py="27px"
              fontSize="12px"
              fontWeight="800"
              letterSpacing="1px"
              _hover={{ bg:"black", color: "white" }}
            >
              BECOME A PARTNER →
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
