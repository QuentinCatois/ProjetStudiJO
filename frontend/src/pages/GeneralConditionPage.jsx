import { Link} from "react-router-dom"
import styles from "./GeneralConditionPage.module.scss"

//import images
import logo1 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154.png';
import logo2 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-1.png';
import logo3 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-2.png';
import logo4 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-3.png';


function GeneralCondition () {


    return (
        <>
            <div className={styles.container}>
                <title>Document</title>

                <header>
                    <h1>Condition Générales d{"'"}achat</h1>
                    
                    <picture>
                    <source
                    media="(max-width: 767px)"
                    sizes="(max-width: 770px) 20vw, 154px"
                    srcSet={logo1}
                    />
                    <source
                    media="(min-width: 768px) and (max-width: 991px)"
                    sizes="(max-width: 770px) 20vw, 154px"
                    srcSet={logo2}
                    />
                    <source
                    media="(min-width: 992px) and (max-width: 1199px)"
                    sizes="(max-width: 770px) 20vw, 154px"
                    srcSet={logo3}
                    />
                    <img
                    sizes="(max-width: 513px) 30vw, 154px"
                    srcSet={logo4}
                    src={logo4}
                    alt="Logo_JO"
                    />
                    </picture>

                </header>

                <main>

                    <h3>Les présentes conditions générales d{"'"}achat régissent l{"'"}achat de billets pour les Jeux Olympiques par le client sur ce site web.</h3>

                    <br></br> 

                    <h3>Acceptation des Conditions :</h3>

                    <p>
                    En effectuant un achat sur notre site web, vous acceptez sans réserve les présentes conditions générales d{"'"}achat.
                    </p>

                    <br></br> 

                    <h3>Achat de Billets :</h3>

                    <ul>
                        <li>Les billets pour les Jeux Olympiques sont disponibles à l{"'"}achat sur notre site web, sous réserve de disponibilité.</li>
                        <li>Les prix des billets sont indiqués en devise locale et incluent toutes les taxes applicables.</li>
                        <li>Le paiement intégral est requis au moment de l{"'"}achat.</li>
                    </ul>

                    <br></br> 

                    <h3>Disponibilité des Billets :</h3>

                    <ul>
                        <li>La disponibilité des billets est sujette à modification et peut varier en fonction de la demande.</li>
                        <li>Nous ne pouvons garantir la disponibilité des billets jusqu{"'"}à ce que votre commande soit confirmée.</li>
                    </ul>

                    <br></br> 

                    <h3>Confirmation de la Commande :</h3>

                    <ul>
                        <li>Une fois votre commande passée et votre paiement confirmé, vous recevrez une confirmation de commande par email.</li>
                        <li>La confirmation de commande constitue une preuve d{"'"}achat et contient les détails de vos billets.</li>
                    </ul>

                    <br></br> 

                    <h3>Livraison des Billets :</h3>

                    <ul>
                        <li>Les billets seront livrés par voie électronique à l{"'"}adresse email fournie lors de l{"'"}achat.</li>
                        <li>Vous êtes responsable de vous assurer que les informations de livraison sont correctes et à jour.</li>
                    </ul>

                    <br></br> 

                    <h3>Conditions d{"'"}Utilisation des Billets :</h3>

                    <ul>
                        <li>Les billets sont strictement personnels et non transférables.</li>
                        <li>La revente des billets est interdite sauf autorisation expresse du vendeur.</li>
                        <li>Les billets sont soumis aux conditions générales d{"'"}entrée des Jeux Olympiques et à toute règle ou réglementation applicable.</li>
                    </ul>

                    <br></br> 

                    <h3>Politique d{"'"}Annulation et de Remboursement :</h3>

                    <ul>
                        <li>Les billets ne sont ni échangeables ni remboursables, sauf en cas d{"'"}annulation des Jeux Olympiques.</li>
                        <li>En cas d{"'"}annulation des Jeux Olympiques, un remboursement sera effectué selon les modalités définies par l{"'"}organisateur des Jeux.</li>
                    </ul>

                    <br></br> 

                    <h3>Responsabilité :</h3>

                    <ul>
                        <li>Nous ne sommes pas responsables des changements de programme, annulations ou autres modifications apportées aux Jeux Olympiques.</li>
                        <li>Notre responsabilité est limitée au montant payé pour les billets.</li>
                    </ul>

                    <br></br> 

                    <h3>Droit Applicable et Juridiction :</h3>

                    <p>Les présentes conditions générales d{"'"}achat sont régies et interprétées conformément au droit français. <br></br> 
                    Tout litige découlant de ces conditions générales d{"'"}achat sera soumis à la compétence exclusive des tribunaux français compétents, notamment ceux du lieu du domicile du défendeur ou du lieu de livraison effective, conformément aux dispositions du Code de procédure civile.</p>

                    <br></br> 

                    <p>
                    En acceptant ces conditions générales d{"'"}achat, vous reconnaissez avoir lu, compris et accepté toutes les conditions énoncées ci-dessus.</p>

                    <br></br>

                    <p>Pour toute question ou assistance, veuillez nous contacter</p>

                    <br></br> 

                    <p>L{"'"}Équipe des Jeux Olympiques de Paris 2024</p>

                </main>

                <footer>
                    <Link to= "/">Page d acceuil</Link>
                </footer>
            </div>
        </>
    );
  }
  
  export default GeneralCondition ;