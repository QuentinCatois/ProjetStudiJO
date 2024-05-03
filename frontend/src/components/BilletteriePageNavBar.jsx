
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./BilletteriePageNavBar.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

//logo JO
import logo1 from '../img/HomePage/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/HomePage/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_77.png';
import logo3 from '../img/HomePage/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_100.png';
import logo4 from '../img/HomePage/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_120.png';
import logo5 from '../img/HomePage/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_154.png';

//icon
import cart from './img/Logo_shopping_cart.png';
import userConnexion from './img/User_connexion.png'
import userRegistration from './img/user_registration.png'
import home from './img/Home.png'
import userlogout from './img/logout.png'

const BilletterieNavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

    return (
      
    
    <nav className={styles.navbar}>

      <div id="test" className={styles.logo}>
        <picture>
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 770px) 20vw, 154px"
            srcSet={logo1}
          />
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 1000px) 10vw, 100px"
            srcSet={logo2 + " 77w, " +
            logo3 + " 100w, "}
          />
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 10vw, 120px"
            srcSet={logo3 + " 100w, " +
            logo4 + " 120w, "}
          />
          <img
            sizes="(max-width: 1540px) 10vw, 154px"
            srcSet={logo5}
            src={logo5}
            alt="Logo_JO"
          />
        </picture>

        <h2>Jeux Olympiques France</h2>
      </div>

      <ul id="2" className={styles.nav_links}>

        <div className={styles.align}>
          <li>
            <NavLink to="/"><img className={styles.icon_nav_sizing} src={home} alt="icon_home"/>Page d{"'"}acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/cart"><img className={styles.icon_nav_sizing} src={cart} alt="logo_cart"/>Panier</NavLink>
          </li>
        </div>

        <div className={styles.align}>
          <li>
            {/* Conditionally render Logout link if user is logged in */}
            {user ? (
              <NavLink to="/" onClick={handleLogout}><img className={styles.icon_nav_sizing} src={userlogout} alt="icon_logout"/>Se déconnecter</NavLink>
            ) : (
              <>
                <NavLink to="/login"><img className={styles.icon_nav_sizing} src={userConnexion} alt="icon_user"/>Se connecter</NavLink>
                <NavLink to="/register"><img className={styles.icon_nav_sizing} src={userRegistration} alt="icon_user"/>S{"'"}inscrire</NavLink>
              </>
            )}
          </li>
        </div>

      </ul>

    </nav>


    );
  }
  
  export default BilletterieNavBar;