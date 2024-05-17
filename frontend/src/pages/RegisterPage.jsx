import { Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import styles from "./RegisterPage.module.scss"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

//import images breakpoints

//logo JO
import logo1 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/RegisterPage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/RegisterPage/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/RegisterPage/olympic-games-logo_ehfceh_c_scale,w_512.png';
import imagesportcollage from '../img/RegisterPage/sports-abstract-collage.jpg';

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const { first_name, last_name, email, password, re_password } = formData

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


        if (password !== re_password) {
            toast.error("Les mots de passe ne correspondent pas.")
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            }
            dispatch(register(userData)) /* To dispatch the new data into authSlice.js */
        }
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate("/Welcome")
            toast.success("Un message de confirmation d'activation a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception.")
        }

        dispatch(reset())

    }, [isError, isSuccess, user, navigate, dispatch, message])

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

                    <h2>S{"'"}inscrire</h2>

                    <form>
                        

                        <input type="text" className={`${styles.field} ${styles.surname}`} id="nom" name="first_name" placeholder="Prénom" onChange={handleChange} value={first_name} required/>

                        <input type="text" className={styles.field} id="prenom" name="last_name" placeholder="Nom" onChange={handleChange} value={last_name} required/>
                        

                        <input type="email" className={styles.field} name="email" placeholder="Email" onChange={handleChange} value={email} required/>

                        <input type="password" className={styles.field} id="password" name="password" placeholder="Mot de passe (minimum 8 caractères)" onChange={handleChange} value={password} required/>

                        <input type="password" className={styles.field} id="confirm-password" name="re_password" placeholder="Confirmation de mot de passe" onChange={handleChange} value={re_password} required/>
                    
                        <button className={styles.btn} type="submit" onClick={handleSubmit}>Valider</button>
                    
                    </form>


                    

                    <p className={styles.lien_vers_page_connexion}> Vous avez déjà un compte? {" "} <Link to= "/signin">Se connecter</Link> </p>
                    

                </div>
            </div>
        </div>

    );
  }
  
  export default RegisterPage