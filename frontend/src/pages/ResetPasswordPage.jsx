import styles from "./ResetPasswordPage.module.scss"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from "../features/auth/authSlice"

//logo JO
import logo1 from '../img/ResetPassword/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/ResetPassword/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/ResetPassword/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/ResetPassword/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/ResetPassword/olympic-games-logo_ehfceh_c_scale,w_512.png';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isError, isSuccess, message } = useSelector((state) => state.auth)

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
            email
        }

        dispatch(resetPassword(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("Un message de réinitialisation de mot de passe vous a été envoyé.")

        }

    }, [isError, isSuccess, message, navigate, dispatch])

    return (
        <>
            <div className={styles.formstyle}>

              <picture className={styles.logoformatting}>
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

              </picture>

              <h1 className={styles.titleformatting}>Reset Password</h1>

              <form className={styles.formaform}>
                <input className={styles.fieldinput} type="text" placeholder="email" name="email" onChange={handleChange} value={email} required/>

                <button className={styles.buttonreset} type="submit" onClick={handleSubmit}>Reset Password</button>
              </form>
            </div>
        </>
    )
}

export default LoginPage