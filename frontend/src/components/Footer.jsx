
import {Link} from "react-router-dom"
import styles from "./Footer.module.scss"

function App () {
    return (
            <footer>
                <Link className={styles.addspace} to= "/contact">Contact</Link>
                <Link className={styles.addspace} to= "/legalsmentions">Crédits et mentions légales</Link>
                <Link className={styles.addspace} to= "/generalcondition">Conditions générales d{"'"}achat</Link>
            </footer>
    );
}
  
  export default App;