import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LegalsMentions from "./pages/LegalsMentions";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import OfferPage from "./pages/OfferPage"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets" element={<OfferPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legalsmentions" element={<LegalsMentions />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
