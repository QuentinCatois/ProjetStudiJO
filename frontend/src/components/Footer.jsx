
import {Link} from "react-router-dom"
import styles from "./Footer.module.scss"

function App () {
    return (
            <footer>
                <Link className={styles.link} to= "/contact">Contact</Link>
                <Link to= "/legalsmentions">Crédits et mentions légales</Link>
                <Link to= "/generalcondition">Conditions générales d{"'"}achat</Link>
            </footer>
    );
}
  
  export default App;