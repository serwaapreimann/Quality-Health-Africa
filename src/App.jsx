import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Mission";
import MedicalSupplies from "./pages/MedicalEquipmentDonations";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
import Challenge from "./pages/Challenge";
import QuarterlyHealthFairs from "./pages/QuarterlyHealthFairs";
import ClinicsHospitals from "./pages/ClinicsHospitals";
import Stories from "./pages/OurStories";
import Partners from "./pages/Partners";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about/who-we-are" element={<About />} />

      <Route path="/about/mission" element={<Impact />} />


     <Route
        path="/get-involved"
        element={<GetInvolved />}
      /> 

      <Route path="/donate" element={<Donate />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/about/founder" element={<Founder />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route
        path="/programs/health-fairs"
        element={<QuarterlyHealthFairs />}
      />
      <Route
        path="/programs/equipment-donations"
        element={<MedicalSupplies />}
      />
      <Route
        path="/programs/healthcare-infrastructure"
        element={<ClinicsHospitals />}
      />
      <Route path="/stories" element={<Stories />} />
      <Route path="/about-partners" element={<Partners />} />
    </Routes>
  );
}

export default App;