import styles from "./ActivatePage.module.scss"
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activate, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'


//logo JO
import logo1 from '../img/ActivatePage/olympic-games-logo_ehfceh_ar_1_1,c_fill,g_auto__c_scale,w_154.png';
import logo2 from '../img/ActivatePage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_231.png';
import logo3 from '../img/ActivatePage/olympic-games-logo_ehfceh_ar_4_3,c_fill,g_auto__c_scale,w_298.png';
import logo4 from '../img/ActivatePage/olympic-games-logo_ehfceh_c_scale,w_199.png';
import logo5 from '../img/ActivatePage/olympic-games-logo_ehfceh_c_scale,w_512.png';

const ActivatePage = () => {

    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {isError, isSuccess, message } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        toast.success("Votre compte a été créé avec succés ! Vous pouvez maintenant vous connecter.")
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate("/signin")
        }

        dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch, message])


    return (
        <div className={styles.parentelement}>

          <picture className={styles.logoActiveAccount}>
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

          <h1>Activer mon compte utilisateur</h1>

          <button className={styles.btn} type="submit" onClick={handleSubmit}>Activer mon compte</button>

        </div>
    )
}

export default ActivatePage