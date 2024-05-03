import styles from "./HomePage.module.scss"
import HomePageNavBar from '../components/HomePageNavBar';
import { Link} from "react-router-dom"

//import images breakpoints

//Eiffel Tower Picture
import EffelTower1 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_200.png';
import EffelTower2 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_242.png';
import EffelTower3 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_278.png';
import EffelTower4 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_307.png';
import EffelTower5 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_308.png';
import EffelTower6 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_349.png';
import EffelTower7 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_386.png';
import EffelTower8 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_397.png';
import EffelTower9 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_440.png';
import EffelTower10 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_471.png';
import EffelTower11 from '../img/HomePage/EiffelTower/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_480.png';
import EffelTower12 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_480.png';
import EffelTower13 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_521.png';
import EffelTower14 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_560.png';
import EffelTower15 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_597.png';
import EffelTower16 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_634.png';
import EffelTower17 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_668.png';
import EffelTower18 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_701.png';
import EffelTower19 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_734.png';
import EffelTower20 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_767.png';
import EffelTower21 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_798.png';
import EffelTower22 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_827.png';
import EffelTower23 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_856.png';
import EffelTower24 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_886.png';
import EffelTower25 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_915.png';
import EffelTower26 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_943.png';
import EffelTower27 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_970.png';
import EffelTower28 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_998.png';
import EffelTower29 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_1019.png';
import EffelTower30 from '../img/HomePage/EiffelTower/main_photo_luff0u_c_scale,w_1021.png';

//medals

import medals1 from '../img/HomePage/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_200.png';
import medals2 from '../img/HomePage/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_241.png';
import medals3 from '../img/HomePage/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_276.png';
import medals4 from '../img/HomePage/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_307.png';
import medals5 from '../img/HomePage/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_308.png';
import medals6 from '../img/HomePage/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_344.png';
import medals7 from '../img/HomePage/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_382.png';
import medals8 from '../img/HomePage/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_397.png';
import medals9 from '../img/HomePage/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_397.png';
import medals10 from '../img/HomePage/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_442.png';
import medals11 from '../img/HomePage/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_478.png';
import medals12 from '../img/HomePage/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_480.png';
import medals13 from '../img/HomePage/medals/medals_rivccn_c_scale,w_480.png';
import medals14 from '../img/HomePage/medals/medals_rivccn_c_scale,w_617.png';
import medals15 from '../img/HomePage/medals/medals_rivccn_c_scale,w_731.png';
import medals16 from '../img/HomePage/medals/medals_rivccn_c_scale,w_840.png';
import medals17 from '../img/HomePage/medals/medals_rivccn_c_scale,w_927.png';
import medals18 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1020.png';
import medals19 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1087.png';
import medals20 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1113.png';
import medals21 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1117.png';
import medals22 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1124.png';
import medals23 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1164.png';
import medals24 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1209.png';
import medals25 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1255.png';
import medals26 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1293.png';
import medals27 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1334.png';
import medals28 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1339.png';
import medals29 from '../img/HomePage/medals/medals_rivccn_c_scale,w_1344.png';

//torch
import torch1 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_77.png';
import torch2 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_77.png';
import torch3 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_100.png';
import torch4 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_199.png';
import torch5 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_240.png';
import torch6 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_240.png';
import torch7 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_300.png';
import torch8 from '../img/HomePage/torch/torch_olympic_thmwrs_c_scale,w_358.png';

//Athletisme
import athletism1 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_154.jpg';
import athletism2 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_199.jpg';
import athletism3 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_240.jpg';
import athletism4 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_360.jpg';
import athletism5 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_558.jpg';
import athletism6 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_718.jpg';
import athletism7 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_842.jpg';
import athletism8 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_989.jpg';
import athletism9 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_1116.jpg';
import athletism10 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_1225.jpg';
import athletism11 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_1277.jpg';
import athletism12 from '../img/HomePage/athletism/action-athletes_nxl3jz_c_scale,w_1280.jpg';

//basketball

import basketball1 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_154.jpg';
import basketball2 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_154.jpg';
import basketball3 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_199.jpg';
import basketball4 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_199.jpg';
import basketball5 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_240.jpg';
import basketball6 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_360.jpg';
import basketball7 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_518.jpg';
import basketball8 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_655.jpg';
import basketball9 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_770.jpg';
import basketball10 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_886.jpg';
import basketball11 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_992.jpg';
import basketball12 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1091.jpg';
import basketball13 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1193.jpg';
import basketball14 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1253.jpg';
import basketball15 from '../img/HomePage/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1280.jpg';

//fencing

import fencing1 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_154.jpg';
import fencing2 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_154.jpg';
import fencing3 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_199.jpg';
import fencing4 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_199.jpg';
import fencing5 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_240.jpg';
import fencing6 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_360.jpg';
import fencing7 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_650.jpg';
import fencing8 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_982.jpg';
import fencing9 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_1189.jpg';
import fencing10 from '../img/HomePage/fencing/fencing-1839325_1280_jd9iro_c_scale,w_1280.jpg';

//swimming
import swimming1 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_154.jpg';
import swimming2 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_154.jpg';
import swimming3 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_199.jpg';
import swimming4 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_199.jpg';
import swimming5 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_240.jpg';
import swimming6 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_360.jpg';
import swimming7 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_537.jpg';
import swimming8 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_690.jpg';
import swimming9 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_812.jpg';
import swimming10 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_922.jpg';
import swimming11 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_1016.jpg';
import swimming12 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_1118.jpg';
import swimming13 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_1209.jpg';
import swimming14 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_1264.jpg';
import swimming15 from '../img/HomePage/swimming/swimming-78112_1280_iumcpz_c_scale,w_1280.jpg';

function App () {
  
  return (

    <>
      <div>
        <HomePageNavBar />  {/* Render the NavBar component */}
      </div>


      <div className={styles.container}>

        <div id="item-1">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 768px) 40vw, 307px"
              srcSet={EffelTower1 + " 200w, " +
              EffelTower2 + " 242w, " +
              EffelTower3 + " 278w, " +
              EffelTower4 + " 307w, "}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 993px) 40vw, 397px"
              srcSet={EffelTower5 + " 308w, " +
              EffelTower6 + " 349w, " +
              EffelTower7 + " 386w, " +
              EffelTower8 + " 397w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 40vw, 480px"
              srcSet={EffelTower8 + " 397w, " +
              EffelTower9 + " 440w, " +
              EffelTower10 + " 471w, " +
              EffelTower11 + " 480w, "}/>
            <img
              className={styles.main_photo}
              sizes="(max-width: 2553px) 40vw, 1021px"
              srcSet={EffelTower12 + " 480w, " +
              EffelTower13 + " 521w, " +
              EffelTower14 + " 560w, " +
              EffelTower15 + " 597w, "+
              EffelTower16 + " 634w, " +
              EffelTower17 + " 668w, " +
              EffelTower18 + " 701w, "+
              EffelTower19 + " 734w, " +
              EffelTower20 + " 767w, " +
              EffelTower21 + " 798w, " +
              EffelTower22 + " 827w, " +
              EffelTower23 + " 856w, "+
              EffelTower24 + " 886w, " +
              EffelTower25 + " 915w, " +
              EffelTower26 + " 943w, "+
              EffelTower27 + " 970w, " +
              EffelTower28 + " 998w, " +
              EffelTower29 + " 1019w, " +
              EffelTower30 + " 1021w, "}
              src={EffelTower30}
              alt="Photo de la Tour Eiffel avec le symbol des JO et la phrase Bienvenue sue le site officiel des JO"
            />
          </picture>
        </div>

        <div id="item-2">
          <p className={styles.paragraph_format}>
            Les Jeux Olympiques de Paris vont durer pendant <b>16</b> jours, du 26 juillet au 11 août 2024. 

            Les différentes compétitions pour les <b>32</b> sports vont se dérouler au sein de <b>35</b> lieux d’exception allant de la Concorde, au Champ de Mars, en passant par les Invalides, et 
            bien d autres.
            
            Au total <b>10 500</b> athlètes vont participer, représentant <b>206</b> nationalites.</p>
        </div>

        <div id="item-3">
          <h2 className={styles.first_title}>Rejoignez-nous et venez vivre une expérience unique !</h2>
        </div>

        <div id="item-4">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 768px) 40vw, 307px"
              srcSet={medals1 + " 200w, " +
              medals2 + " 241w, " +
              medals3 + " 276w, " +
              medals4 + " 307w, "}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 993px) 40vw, 397px"
              srcSet={medals5 + " 308w, " +
              medals6 + " 344w, " +
              medals7 + " 382w, " +
              medals8 + " 397w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 40vw, 480px"
              srcSet={medals9 + " 397w, " +
              medals10 + " 442w, " +
              medals11 + " 478w, " +
              medals12 + " 480w, "}/>
            <img
              className={styles.medals_photo}
              sizes="(max-width: 3360px) 40vw, 1344px"
              srcSet={medals13 + " 480w, " +
              medals14 + " 617w, " +
              medals15 + " 731w, "+
              medals16 + " 840w, " +
              medals17 + " 927w, " +
              medals18 + " 1020w, "+
              medals19 + " 1087w, " +
              medals20 + " 1113w, " +
              medals21 + " 1117w, " +
              medals22 + " 1124w, " +
              medals23 + " 1164w, "+
              medals24 + " 1209w, " +
              medals25 + " 1255w, " +
              medals26 + " 1293w, " +
              medals27 + " 1334w, " +
              medals28 + " 1339w, " +
              medals29 + " 1344w, "}
              src={medals29}
              alt="Photo_médailles_d'or, d'argent et de bronze"/>
          </picture>
        </div>

        <div id="item-5">
          <p className={styles.paragraph_format}>Trois magnifiques médailles représentant seront remises aux champions. Médailles en composants et matériaux recyclés.</p>
        </div>

        <div id="item-6">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 10vw, 77px"
              srcSet={torch1}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 1000px) 10vw, 100px"
              srcSet={torch2 + " 77w, " +
              torch3 + " 100w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 20vw, 240px"
              srcSet={torch4 + " 199w, " +
              torch5 + " 240w, "}/>
            <img
              className={styles.torch_photo}
              sizes="(max-width: 1790px) 20vw, 358px"
              srcSet={torch6 + " 240w, " +
              torch7 + " 300w, " +
              torch8 + "358w, "}
              src={torch8}
              alt="Logo torche des JO"/>
          </picture>
        </div>

        <div id="item-7">
          <p className={styles.paragraph_format}>Le logo des Jeux Olympiques de Paris incarne parfaitement l esprit et l essence de la ville lumière. Au premier coup d œil, il évoque une torche flamboyante, symbole universel de la flamme olympique, porteur de valeurs d unité, de paix et d excellence sportive. Toutefois, ce n est pas tout ce que ce logo révèle si on y regarde de plus près</p>
        </div>

        <div id="item-8">
          <h2 className={styles.second_title}>Assistez à de multiples disciplines sportives</h2>
        </div>

        <div id="item-9">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 20vw, 154px"
              srcSet={athletism1}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 995px) 20vw, 199px"
              srcSet={athletism1 + " 154w, " +
              athletism2 + " 199w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 20vw, 240px"
              srcSet={athletism2 + " 199w, " +
              athletism3 + " 240w, "}/>
            <img
              className={styles.athletism}
              sizes="(max-width: 4267px) 30vw, 1280px"
              srcSet={athletism4 + " 360w, " +
              athletism5 + " 558w, " +
              athletism6 + " 718w, "+
              athletism7 + " 842w, " +
              athletism8 + " 989w, " +
              athletism9 + " 1116w, "+
              athletism10 + " 1225w, " +
              athletism11 + " 1277w, " +
              athletism12 + " 1280w, "}
              src={athletism12}
              alt="photo athlètisme course"/>
          </picture>
        </div>

        <div id="item-10">
          <h3 className={styles.h3_center}>Athlétisme</h3>
        </div>

        <div id="item-11">
          <p>Une large gamme d épreuves englobant les épreuves de sprint, marathon, sauts en longueur et en hauteur, le lancer de javelot, et bien d autres diciplines.</p>
        </div>

        <div id="item-12">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 10vw, 77px"
              srcSet={basketball1}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 1000px) 10vw, 100px"
              srcSet={basketball2 + " 154w, " +
              basketball3 + " 199w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 20vw, 240px"
              srcSet={basketball4 + " 199w, " +
              basketball5 + " 240w, "}/>
            <img
              className={styles.basketball}
              sizes="(max-width: 4267px) 30vw, 1280px"
              srcSet={basketball6 + " 360w, " +
              basketball7 + " 518w, " +
              basketball8 + " 655w, "+
              basketball9 + " 770w, " +
              basketball10 + " 886w, " +
              basketball11 + " 992w, "+
              basketball12 + " 1091w, " +
              basketball13 + " 1193w, " +
              basketball14 + " 1253w, " +
              basketball15 + " 1280w, "}
              src={basketball15}
              alt="photo basketball"/>
            </picture>
        </div>

        <div id="item-13">
          <h3 className={styles.h3_center}>Sports d équipe</h3>
        </div>

        <div id="item-14">
          <p>Variété de sports comprenant le basketball, le volleyball, le handball, le football.</p>
        </div>

        <div id="item-15">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 20vw, 154px"
              srcSet={fencing1}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 995px) 20vw, 199px"
              srcSet={fencing2 + " 154w, " +
              fencing3 + " 199w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 20vw, 240px"
              srcSet={fencing4 + " 199w, " +
              fencing5+ " 240w, "}/>
            <img
              className={styles.fencing}
              sizes="(max-width: 4267px) 30vw, 1280px"
              srcSet={fencing6 + " 360w, " +
              fencing7 + " 650w, " +
              fencing8 + " 982w, "+
              fencing9 + " 1189w, " +
              fencing10 + " 1280w, "}
              src={fencing10}
              alt="photo escrimeurs en match"/>
            </picture>
        </div>

        <div id="item-16">
          <h3 className={styles.h3_center}>Sports de précision</h3>
        </div>

        <div id="item-17">
          <p>Disciplines alliant dextérité, concentration : tir à l arc, l escrime, la voile.</p>
        </div>

        <div id="item-18">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 20vw, 154px"
              srcSet={swimming1}/>
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 995px) 20vw, 199px"
              srcSet={swimming2 + " 154w, " +
              swimming3+ " 199w, "}/>
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 20vw, 240px"
              srcSet={swimming4 + " 199w, " +
              swimming5+ " 240w, "}/>
            <img
              className={styles.swimming}
              sizes="(max-width: 4267px) 30vw, 1280px"
              srcSet={swimming6 + " 360w, " +
              swimming7 + " 537w, " +
              swimming8 + " 690w, "+
              swimming9 + " 812w, " +
              swimming10 + " 922w, " +
              swimming11 + " 1016w, "+
              swimming12 + " 1118w, " +
              swimming13 + " 1209w, " +
              swimming14 + " 1264w, " +
              swimming15 + " 1280w, " }
              src={swimming15}
              alt="photo nageuse faisant du crawl"/>
            </picture>
        </div>

        <div id="item-19">
          <h3 className={styles.h3_center}>Sports aquatiques</h3>
        </div>

        <div id="item-20">
          <p>L habilité, la puissance et la grâce feront partie des traits de caractère des athlètes particpant à la natation, le water-polo, la natation synchronisée.</p>
        </div>

        <footer>
          <Link to= "/register">Contact</Link>
          <Link to= "/register">Crédits et mentions<br />légales</Link>
          <Link to= "/register">Conditions générales<br />d achat</Link>
        </footer>
      </div>

    </>

  );
}

export default App;