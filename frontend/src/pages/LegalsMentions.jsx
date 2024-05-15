import { Link} from "react-router-dom"
import styles from "./LegalsMentions.module.scss"

//import images
import logo1 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154.png';
import logo2 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-1.png';
import logo3 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-2.png';
import logo4 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-3.png';


function App () {


    return (
        <>
            <div className={styles.container}>
                <title>Document</title>

                <header>
                    <h1>Crédits et mentions légales</h1>
                    
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

                    <h3>Propriété du Site</h3>

                    <br></br>

                    <p>Le présent site internet est la propriété de l{"'"}entreprise des JO, dont le siège social est situé à Paris, immatriculée sous le numéro 01010101.</p>

                    <br></br>

                    <h3>Responsabilité</h3>

                    <br></br>

                    <p>L{"'"}entreprise des JO met tout en œuvre pour garantir l{"'"}exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. <br></br>
                    Toutefois, l{"'"} ne peut garantir l{"'"}exactitude, la précision ou l{"'"}exhaustivité des informations mises à disposition sur ce site et décline toute responsabilité quant à leur utilisation ou interprétation.</p>

                    <br></br>

                    <h3>Propriété Intellectuelle</h3>

                    <br></br>

                    <p>Tous les éléments constituant ce site (textes, images, graphismes, logos, icônes, vidéos, sons, etc.) sont la propriété exclusive de l{"'"}organisation des JO ou de ses partenaires et sont protégés par les lois nationales et internationales relatives à la propriété intellectuelle. <br></br>
                    Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite.
                    </p>

                    <br></br>

                    <h3>Données Personnelles</h3>

                    <br></br>

                    <p>Les données personnelles collectées sur ce site sont destinées à l{"'"}entreprise des JO et peuvent être utilisées à des fins de gestion de la relation client, de prospection commerciale ou d{"'"}études marketing.<br></br>
                    Conformément à la loi en vigueur, vous disposez d{"'"}un droit d{"'"}accès, de rectification, de suppression et d{"'"}opposition à l{"'"}utilisation de vos données personnelles.<br></br>
                    </p>

                    <br></br>

                    <h3>Crédits Photos et Utilisation d{"'"}Images Extérieures</h3>

                    <br></br>

                    <p>Les photos et images utilisées sur ce site sont soit la propriété des JO soit acquises auprès de fournisseurs de contenu sous licence. <br></br>
                     Pour les images extérieures, nous tenons à remercier les sources suivantes :</p>

                    <br></br>

                    <p>https://www.freepik.com/free-photo/sports-abstract-collage_136956544.htm#fromView=search&page=1&position=0&uuid=3e796f03-a7f6-4fee-895d-969c4e4b8a3f - Image by freepik</p>

                    <br></br>

                    <p>https://www.freepik.com/free-photo/sports-abstract-collage_136956507.htm#fromView=search&page=1&position=41&uuid=26ce43e9-be1f-40a2-86d2-c06a45f2c7b9 - Image by freepik</p>

                    <br></br>

                    <p>https://www.freepik.com/free-photo/sports-abstract-collage_136956503.htm#&position=1&from_view=collections&uuid=a7446649-baa7-42ea-b916-af5764c06b00#position=1 - Image by Freepik</p>

                    <br></br>

                </main>

                <footer>
                    <Link to= "/">Page d acceuil</Link>
                </footer>
            </div>
        </>
    );
  }
  
  export default App;