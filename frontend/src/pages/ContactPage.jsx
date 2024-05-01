import { Link} from "react-router-dom"
import styles from "./ContactPage.module.scss"

//import images breakpoints

//logo JO
import logo from '../img/ContactPage/logo/logo_gdevqk_c_scale,w_154.png';
//main image
import image154 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_154.jpg';
import image199 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_199.jpg';
import image240 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_240.jpg';
import image360 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_360.jpg';
import image651 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_651.jpg';
import image846 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_846.jpg';
import image1044 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1044.jpg';
import image1160 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1160.jpg';
import image1278 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1278.jpg';
import image1379 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1379.jpg';
import image1399 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1399.jpg';
import image1400 from '../img/ContactPage/mainpicture/sports-abstract-collage_3_i8lays_c_scale,w_1400.jpg';
//logo geolocation
import image77 from '../img/ContactPage/flagmagsymbol/maps-and-flags_sbyzwi_ar_1_1,c_fill,g_auto__c_scale,w_77.png';
import image100 from '../img/ContactPage/flagmagsymbol/maps-and-flags_sbyzwi_ar_4_3,c_fill,g_auto__c_scale,w_100.png';
import image120 from '../img/ContactPage/flagmagsymbol/maps-and-flags_sbyzwi_ar_16_9,c_fill,g_auto__c_scale,w_120.png';
import image_120 from '../img/ContactPage/flagmagsymbol/maps-and-flags_sbyzwi_c_scale,w_120.png';
import image512 from '../img/ContactPage/flagmagsymbol/maps-and-flags_sbyzwi_c_scale,w_512.png';
//logo phone
import imagephone1 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_ar_1_1,c_fill,g_auto__c_scale,w_77.png';
import imagephone2 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_ar_4_3,c_fill,g_auto__c_scale,w_77.png';
import imagephone3 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_ar_4_3,c_fill,g_auto__c_scale,w_100.png';
import imagephone4 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_ar_16_9,c_fill,g_auto__c_scale,w_120.png';
import imagephone5 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_c_scale,w_120.png';
import imagephone6 from '../img/ContactPage/flagmagsymbol/phone-call_wkdvzv_c_scale,w_512.png';
//logo envelop
import imageenvelop1 from '../img/ContactPage/flagmagsymbol/email_c2eis4_ar_1_1,c_fill,g_auto__c_scale,w_77.png';
import imageenvelop2 from '../img/ContactPage/flagmagsymbol/email_c2eis4_ar_4_3,c_fill,g_auto__c_scale,w_100.png';
import imageenvelop3 from '../img/ContactPage/flagmagsymbol/email_c2eis4_ar_16_9,c_fill,g_auto__c_scale,w_120.png';
import imageenvelop4 from '../img/ContactPage/flagmagsymbol/email_c2eis4_c_scale,w_120.png';
import imageenvelop5 from '../img/ContactPage/flagmagsymbol/email_c2eis4_c_scale,w_512.png';

 
// tried to set class container on first div to replace body to set layout grid page, not rendering as expected.
function App () {
    return (
        <>
            <div className={styles.container}>
                <header>

                    <h1>Contactez-nous</h1>

                    <picture>
                    <source
                        media="(max-width: 767px)"
                        sizes="(max-width: 770px) 20vw, 154px"
                        srcSet={logo}
                        />
                        <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 770px) 20vw, 154px"
                        srcSet={logo}
                        />
                        <source
                        media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 770px) 20vw, 154px"
                        srcSet={logo}
                        />
                        <img
                        sizes="(max-width: 513px) 30vw, 154px"
                        srcSet={logo}
                        src={logo}
                        alt="Logo_JO"/>
                    </picture>

                </header>

                <form>
                    <div className={styles.align}>

                        <label htmlFor="nom"> </label>
                        <input type="text" className={`${styles.field} ${styles.surname}`} id="nom" name="nom" placeholder="Nom" required/>

                        <label htmlFor="prenom"> </label>
                        <input type="text" className={styles.field} id="prenom" name="prenom" placeholder="Prénom" required/>

                    </div>

                    <label htmlFor="email"> </label>
                    <input type="email" className={styles.field} name="email" placeholder="Email" required/>

                    <label htmlFor="textarea"> </label>
                    <textarea className={styles.field} rows={10} name="textarea" placeholder="Message" required defaultValue={" "}/>

                    <button>envoyer</button>

                </form>

                <item-1>

                    <picture>
                        <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 995px) 20vw, 199px"
                        srcSet={image154 + " 154w, " +
                        image199 + " 199w, "}
                        />
                        <source
                        media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 1200px) 20vw, 240px"
                        srcSet={image199 + " 199w, " +
                        image240 + " 240w, "}
                        />
                        <img
                        className={styles.image_item_1_resizing}
                        sizes="(max-width: 4667px) 30vw, 1400px"
                        srcSet={image360 + " 360w, " +
                        image651 + " 651w, " +
                        image846 + " 846w, " + 
                        image1044 + " 1044w, " + 
                        image1160 + " 1160w, " +
                        image1278 + " 1278w, " + 
                        image1379 + " 1379w, " + 
                        image1399 + " 1399w, " +
                        image1400 + " 1400w, "}
                        src={image1400}
                        alt="Image principales représentent plusieurs athlétes dans différentes disciplines sportives"/>
                    </picture>
                </item-1>
                
                <item-2>
                    <picture>
                        <source
                        media="(max-width: 767px)"
                        sizes="(max-width: 770px) 10vw, 77px"
                        srcSet={image77}
                        />
                        <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 1000px) 10vw, 100px"
                        srcSet={image100} 
                        />
                        <source
                        media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 1200px) 10vw, 120px"
                        srcSet={image120}
                        />
                        <img
                        className={styles.image_resizing}
                        sizes="(max-width: 5120px) 10vw, 512px"
                        srcSet={image_120 + " 120w , " + 
                                image512 + " 512w , "}
                        src={image512}
                        alt="symbole indicant une location sur une carte"/>
                    </picture>
                </item-2>

                <item-3>
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            sizes="(max-width: 770px) 10vw, 77px"
                            srcSet={imagephone1}
                            />
                            <source
                            media="(min-width: 768px) and (max-width: 991px)"
                            sizes="(max-width: 1000px) 10vw, 100px"
                            srcSet={imagephone2 + " 77w , " + 
                                imagephone3 + " 100w , "}
                            />
                            <source
                            media="(min-width: 992px) and (max-width: 1199px)"
                            sizes="(max-width: 1200px) 10vw, 120px"
                            srcSet={imagephone4}
                            />
                            <img
                            className={styles.image_resizing}
                            sizes="(max-width: 5120px) 10vw, 512px"
                            srcSet={imagephone5 + " 120w , " + 
                                imagephone6 + " 512w , "}
                            src={imagephone6}
                            alt="symbole téléphone"/>
                    </picture>
                </item-3>

                <item-4>
                    <picture>
                        <source
                        media="(max-width: 767px)"
                        sizes="(max-width: 770px) 10vw, 77px"
                        srcSet={imageenvelop1}
                        />
                        <source
                        media="(min-width: 768px) and (max-width: 991px)"
                        sizes="(max-width: 1000px) 10vw, 100px"
                        srcSet={imageenvelop2}
                        />
                        <source
                        media="(min-width: 992px) and (max-width: 1199px)"
                        sizes="(max-width: 1200px) 10vw, 120px"
                        srcSet={imageenvelop3}
                        />
                        <img
                        className={styles.image_resizing}
                        sizes="(max-width: 5120px) 10vw, 512px"
                        srcSet={imageenvelop4 + " 120w , " + 
                            imageenvelop5 + " 512w , "}
                        src={imageenvelop5}
                        alt="symbole enveloppe"
                        />
                    </picture>
                </item-4>

                <item-5>Address</item-5>

                <item-6>Phone number</item-6>

                <item-7>email</item-7>

                <footer>
                    <Link to= "/">Page d{"'"}acceuil</Link>
                </footer>
            </div>    
            
        </>      

    );
  }
  
  export default App;