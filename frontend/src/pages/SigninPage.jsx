import { Link} from "react-router-dom"
import "./SigninPage.css"

//import images breakpoints

//logo JO
import logo1 from '../img/Signin/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/Signin/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/Signin/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/Signin/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/Signin/olympic-games-logo_ehfceh_c_scale,w_512.png';
import sportcollage from '../img/Signin/Sport-abstract-collage-2.png';

function App () {
    return (
        <div className="container">
            <div className="contact-box">
                <img className="left" src={sportcollage}/>

                <div className="right">

                    <source
                        media="(max-width: 767px)"
                        sizes="(max-width: 770px) 20vw, 154px"
                        srcSet={logo1}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 993px) 30vw, 298px"
                        srcSet={logo2 + " 231w, " +
                        logo3 + " 298w, "}
                    />
                    <img
                        sizes="(max-width: 2560px) 20vw, 512px"
                        srcSet={logo4 + " 199w, " +
                        logo5 + " 512w, "}
                        src={logo5}
                        alt="logo_JO"
                    />

                    <h2>Se connecter</h2>

                    <form>
                        <input
                        type="text"
                        className="field"
                        name="email"
                        placeholder="email"
                        required
                        />
                        <input
                        type="password"
                        className="field"
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        required
                        />
                        <button className="btn">Me connecter</button>
                        <p className="lien_vers_page_connexion">
                        Besoin de créer un compte?{" "}
                            <Link to= "/">M'inscrire</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default App;