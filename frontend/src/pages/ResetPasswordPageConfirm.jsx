import styles from "./ResetPasswordPageConfirm.module.scss"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux"
import { resetPasswordConfirm } from '../features/auth/authSlice'

const ResetPasswordPageConfirm = () => {

    const { uid, token } = useParams()
    const [formData, setFormData] = useState({
        'new_password': '',
        're_new_password': ''
    })

    const { new_password, re_new_password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            uid,
            token,
            new_password,
            re_new_password
        }

        dispatch(resetPasswordConfirm(userData))
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate("/")
            toast.success("Votre mot de passe a été réinitialisé avec succès.")

        }


    }, [isError, isSuccess, message, navigate, dispatch])


    return (
        <>
            <div>
                <h1 className={styles.title}> Réinitialiser le mot de passe</h1>

                <form>
                    <input className={styles.inputformat} type="password"
                        placeholder="Nouveau mot de passe"
                        name="new_password"
                        onChange={handleChange}
                        value={new_password}
                        required
                    />
                    <input className={styles.inputformat} type="password"
                        placeholder="Confirmer le nouveau mot de passe"
                        name="re_new_password"
                        onChange={handleChange}
                        value={re_new_password}
                        required
                    />
                    <button type="submit" onClick={handleSubmit}>Reset Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPasswordPageConfirm