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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PaymentSuccessfull from "./pages/StripePaymentSuccess";
import PaymentCancelled from "./pages/StripePaymentCancelled";


// Create CountsContext outside of the App function
export const CountsContext = React.createContext();

// Create CountsProvider outside of the App function
export const CountsProvider = ({ children }) => {
  const [counts, setCounts] = useState([]);
  const [ ticketsData, setTicketsData ] = useState([]);

  return (
    <CountsContext.Provider value={{ counts, setCounts, ticketsData, setTicketsData}}>
      {children}
    </CountsContext.Provider>
  );
};

CountsProvider.propTypes = {children: PropTypes.node};





function App() {

  return (
    <>
      <CountsProvider>
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
            <Route path="/success" element={<PaymentSuccessfull />} />
            <Route path="/cancel" element={<PaymentCancelled />} />
          </Routes>
        </Router>
      </CountsProvider>
    </>
  )
}

export default App