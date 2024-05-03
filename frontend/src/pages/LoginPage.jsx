import { Link, useNavigate} from "react-router-dom"
import styles from "./LoginPage.module.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { login, reset, getUserInfo } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

//import images breakpoints

//logo JO
import logo1 from '../img/Signin/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/Signin/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/Signin/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/Signin/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/Signin/olympic-games-logo_ehfceh_c_scale,w_512.png';
import sportcollage from '../img/Signin/Sport-abstract-collage-2.png';

function App () {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const { email, password } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(login(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/")
        }

        dispatch(reset())
        dispatch(getUserInfo())

    }, [isError, isSuccess, user, navigate, dispatch, message])

    return (
        <div className={styles.container}>
            <div className={styles.contact_box}>
                <img className={styles.left} src={sportcollage}/>

                <div className={styles.right}>

                    <source
                        media="(max-width: 767px)"
                        sizes="(max-width: 770px) 20vw, 154px"
                        srcSet={logo1}/>
                    <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 993px) 30vw, 298px"
                        srcSet={logo2 + " 231w, " +
                        logo3 + " 298w, "}/>
                    <img
                        sizes="(max-width: 2560px) 20vw, 512px"
                        srcSet={logo4 + " 199w, " +
                        logo5 + " 512w, "}
                        src={logo5}
                        alt="logo_JO"/>

                    <h2>Se connecter</h2>

                    <form>
                        <input type="text" className={styles.field} name="email" placeholder="email" onChange={handleChange} value={email} required/>

                        <input type="password" className={styles.field} id="password" name="password" placeholder="Mot de passe" onChange={handleChange} value={password} required/>

                        <button className={styles.btn} type="submit" onClick={handleSubmit}>Me connecter</button>

                        

                    </form>

                    <br></br>

                        <Link to="/reset-password">Mot de passe oublié?</Link>

                        <p className={styles.lien_vers_page_connexion}>Besoin de créer un compte? {" "} <Link to= "/register">M{"'"}inscrire</Link></p>
                </div>
            </div>
        </div>
    );
  }
  
  export default App;