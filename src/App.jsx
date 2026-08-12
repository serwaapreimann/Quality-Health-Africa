import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Conference from "./pages/Conference";
import Impact from "./pages/Impact";
import Stories from "./pages/Stories";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Founder from "./pages/Founder";
import Challenge from "./pages/Challenge";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about/who-we-are" element={<About />} />

      <Route path="/programs" element={<Programs />} />

      <Route path="/about/mission" element={<Impact />} />

      <Route path="/conference" element={<Conference />} />

      <Route path="/stories" element={<Stories />} />

      <Route
        path="/get-involved"
        element={<GetInvolved />}
      />

      <Route path="/donate" element={<Donate />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/about/founder" element={<Founder />} />
      <Route path="/challenge" element={<Challenge />} />
    </Routes>
  );
}

export default App;