import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePageNavBar from './components/HomePageNavBar';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LegalsMentions from "./pages/LegalsMentions";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ActivatePage from "./pages/ActivatePage";
import ResetPasswordPage from "./pages/ResetPasswordPage"
import ResetPasswordPageConfirm from "./pages/ResetPasswordPageConfirm";
import BilletteriePageNavBar from './components/BilletteriePageNavBar';
import BilletteriePage from './pages/BilletteriePage';
import CartPage from './pages/Cartpage';
import Footer from './components/Footer';
import Welcome from './pages/WelcomePage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage><HomePageNavBar /></HomePage >}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
          <Route path="/billetterie" element={<BilletteriePage><BilletteriePageNavBar /><Footer/></BilletteriePage >}/>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legalsmentions" element={<LegalsMentions />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
