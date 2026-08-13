import { Box } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import Challenge from "./Challenge";
import ProgramsSection from "../components/home/ProgramsPreview";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <Box minH="100vh" bg="qha.black">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <ProgramsSection />
      <Footer />
    </Box>
  );
}

export default Home;