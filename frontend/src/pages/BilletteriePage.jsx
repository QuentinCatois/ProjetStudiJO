import BilletterieNavBar from '../components/BilletteriePageNavBar';
import Footer from '../components/Footer';
import Tickets from '../components/OffresTickets';


function App () {
    return (

    <>

      <div>
        <BilletterieNavBar />  {/* Render the NavBar component */}
      </div>

      <div>
        <Tickets />  {/* Render the OffresTickets component */}
      </div>

      <div>
        <Footer />  {/* Render the Footer component */}
      </div>

    </>

    );
  }
  
  export default App;