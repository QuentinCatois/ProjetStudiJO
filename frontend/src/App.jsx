import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LegalsMentions from "./pages/LegalsMentions";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legalsmentions" element={<LegalsMentions />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
