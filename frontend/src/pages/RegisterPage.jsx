import { Link} from "react-router-dom"
import styles from "./RegisterPage.module.scss"

//import images breakpoints

//logo JO
import logo1 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/RegisterPage/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/RegisterPage/olympic-games-logo_ehfceh_c_scale,w_512.png';
import imagesportcollage from '../img/RegisterPage/sports-abstract-collage.jpg';

function App () {
    return (

        <div className={styles.container}>
            <div className={styles.contact_box}>
                <img className={styles.left} src={imagesportcollage} />
                <div className={styles.right}>

                    <picture>
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
                    </picture>

                    <h2>S inscrire</h2>

                    <div className={styles.test}>

                        <input type="text" className={`${styles.field} ${styles.surname}`} id="nom" name="first_name" placeholder="Nom" required/>

                        <input type="text" className={styles.field} id="prenom" name="last_name" placeholder="Prénom" required/>
                    </div>

                    <input type="email" className={styles.field} name="email" placeholder="Email" required/>

                    <input type="password" className={styles.field} id="password" name="password" placeholder="Mot de passe" required/>

                    <input
                        type="password" className={styles.field} id="confirm-password" name="confirm-password" placeholder="Confirmation de mot de passe" required/>

                    <p className={styles.checkbox}> <input type="checkbox" name="checkbox" defaultValue="validated" /> {" "} J{"'"}accepte les conditions d{"'"}utilisation et la politique de confidentialité.</p>

                    <button className={styles.btn}>Valider</button>

                    <p className={styles.lien_vers_page_connexion}> Vous avez déjà un compte? {" "} <Link to= "/signin">Se connecter</Link> </p>
                </div>
            </div>
        </div>

    );
  }
  
  export default App;