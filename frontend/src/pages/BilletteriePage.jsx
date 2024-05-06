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
        <Tickets />  {/* Render the NavBar component */}
      </div>





      <div>
        <Footer />  {/* Render the NavBar component */}
      </div>

    </>

    );
  }
  
  export default App;