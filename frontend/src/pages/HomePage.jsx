import styles from "./HomePage.module.scss"

function App () {
  
  return (

    <div className={styles.container}>

      <header className={styles.Header}>
        <div className={styles.Logo}>
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 770px) 20vw, 154px"
              srcSet="
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_154.png 154w"
            />
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 1000px) 10vw, 100px"
              srcSet="
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_77.png 77w,
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_100.png 100w"
            />
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 1200px) 10vw, 120px"
              srcSet="
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_100.png 100w,
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_120.png 120w"
            />
            <img
              sizes="(max-width: 1540px) 10vw, 154px"
              srcSet="
                img/header/logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_154.png 154w"
              src="logo_ibvftx_ar_16_9,c_fill,g_auto__c_scale,w_154.png"
              alt="Logo_JO"
            />
          </picture>

          <h2>Jeux Olympiques France</h2>

        </div>
        <nav className={styles.Nav}>
          <div>
            <button><a href="#"><img className={styles.img_header_sizing} src="img/header/tickets.png" alt="logo_tickets"/>Billetterie</a></button>
            <button><a href="#"><img className={styles.img_header_sizing} src="img/header/Logo shopping cart.png" alt="logo_cart"/>Panier</a></button>
          </div>
          <div>
            <button><a href="../Loginpage/login.html"><img className={styles.img_header_sizing} src="img/header/User_connexion.png" alt="logo_user_connexion"/>Se connecter</a></button>
            <button><a href="../Subscriptionpage/subscriptionpage.html"><img className={styles.img_header_sizing} src="img/header/user.png" alt="logo_user_subscribtion"/>S inscrire</a></button>
          </div>
        </nav>
      </header>

      <div id="item-1">
        <picture>
          <source
            media="(max-width: 767px)"
            sizes="(max-width: 768px) 40vw, 307px"
            srcSet="
            img/main_photo/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_200.png 200w,
            img/main_photo/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_242.png 242w,
            img/main_photo/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_278.png 278w,
            img/main_photo/main_photo_luff0u_ar_1_1,c_fill,g_auto__c_scale,w_307.png 307w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 993px) 40vw, 397px"
            srcSet="
            img/main_photo/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_308.png 308w,
            img/main_photo/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_349.png 349w,
            img/main_photo/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_386.png 386w,
            img/main_photo/main_photo_luff0u_ar_4_3,c_fill,g_auto__c_scale,w_397.png 397w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 40vw, 480px"
            srcSet="
            img/main_photo/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_397.png 397w,
            img/main_photo/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_440.png 440w,
            img/main_photo/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_471.png 471w,
            img/main_photo/main_photo_luff0u_ar_16_9,c_fill,g_auto__c_scale,w_480.png 480w"
          />
          <img
            className={styles.main_photo}
            sizes="(max-width: 2553px) 40vw, 1021px"
            srcSet="
            img/main_photo/main_photo_luff0u_c_scale,w_480.png 480w,
            img/main_photo/main_photo_luff0u_c_scale,w_521.png 521w,
            img/main_photo/main_photo_luff0u_c_scale,w_560.png 560w,
            img/main_photo/main_photo_luff0u_c_scale,w_597.png 597w,
            img/main_photo/main_photo_luff0u_c_scale,w_634.png 634w,
            img/main_photo/main_photo_luff0u_c_scale,w_668.png 668w,
            img/main_photo/main_photo_luff0u_c_scale,w_701.png 701w,
            img/main_photo/main_photo_luff0u_c_scale,w_734.png 734w,
            img/main_photo/main_photo_luff0u_c_scale,w_767.png 767w,
            img/main_photo/main_photo_luff0u_c_scale,w_798.png 798w,
            img/main_photo/main_photo_luff0u_c_scale,w_827.png 827w,
            img/main_photo/main_photo_luff0u_c_scale,w_856.png 856w,
            img/main_photo/main_photo_luff0u_c_scale,w_886.png 886w,
            img/main_photo/main_photo_luff0u_c_scale,w_915.png 915w,
            img/main_photo/main_photo_luff0u_c_scale,w_943.png 943w,
            img/main_photo/main_photo_luff0u_c_scale,w_970.png 970w,
            img/main_photo/main_photo_luff0u_c_scale,w_998.png 998w,
            img/main_photo/main_photo_luff0u_c_scale,w_1019.png 1019w,
            img/main_photo/main_photo_luff0u_c_scale,w_1021.png 1021w"
            src="main_photo_luff0u_c_scale,w_1021.png"
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
            srcSet="
            img/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_200.png 200w,
            img/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_241.png 241w,
            img/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_276.png 276w,
            img/medals/medals_rivccn_ar_1_1,c_fill,g_auto__c_scale,w_307.png 307w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 993px) 40vw, 397px"
            srcSet="
            img/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_308.png 308w,
            img/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_344.png 344w,
            img/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_382.png 382w,
            img/medals/medals_rivccn_ar_4_3,c_fill,g_auto__c_scale,w_397.png 397w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 40vw, 480px"
            srcSet="
            img/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_397.png 397w,
            img/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_442.png 442w,
            img/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_478.png 478w,
            img/medals/medals_rivccn_ar_16_9,c_fill,g_auto__c_scale,w_480.png 480w"/>
          <img
            className={styles.medals_photo}
            sizes="(max-width: 3360px) 40vw, 1344px"
            srcSet="
            img/medals/medals_rivccn_c_scale,w_480.png 480w,
            img/medals/medals_rivccn_c_scale,w_617.png 617w,
            img/medals/medals_rivccn_c_scale,w_731.png 731w,
            img/medals/medals_rivccn_c_scale,w_840.png 840w,
            img/medals/medals_rivccn_c_scale,w_927.png 927w,
            img/medals/medals_rivccn_c_scale,w_1020.png 1020w,
            img/medals/medals_rivccn_c_scale,w_1087.png 1087w,
            img/medals/medals_rivccn_c_scale,w_1113.png 1113w,
            img/medals/medals_rivccn_c_scale,w_1117.png 1117w,
            img/medals/medals_rivccn_c_scale,w_1124.png 1124w,
            img/medals/medals_rivccn_c_scale,w_1164.png 1164w,
            img/medals/medals_rivccn_c_scale,w_1209.png 1209w,
            img/medals/medals_rivccn_c_scale,w_1255.png 1255w,
            img/medals/medals_rivccn_c_scale,w_1293.png 1293w,
            img/medals/medals_rivccn_c_scale,w_1334.png 1334w,
            img/medals/medals_rivccn_c_scale,w_1339.png 1339w,
            img/medals/medals_rivccn_c_scale,w_1344.png 1344w"
            src="medals_rivccn_c_scale,w_1344.png"
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
            srcSet="
                img/torch/torch_olympic_zai8pg_c_scale,w_77.png 77w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 1000px) 10vw, 100px"
            srcSet="
                img/torch/torch_olympic_zai8pg_c_scale,w_77.png 77w,
                img/torch/torch_olympic_zai8pg_c_scale,w_100.png 100w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 10vw, 120px"
            srcSet="
                img/torch/torch_olympic_zai8pg_c_scale,w_100.png 100w,
                img/torch/torch_olympic_zai8pg_c_scale,w_120.png 120w"/>
          <img
            className={styles.torch_photo}
            sizes="(max-width: 3580px) 10vw, 358px"
            srcSet="
                img/torch/torch_olympic_zai8pg_c_scale,w_120.png 120w,
                img/torch/torch_olympic_zai8pg_c_scale,w_205.png 205w,
                img/torch/torch_olympic_zai8pg_c_scale,w_270.png 270w,
                img/torch/torch_olympic_zai8pg_c_scale,w_327.png 327w,
                img/torch/torch_olympic_zai8pg_c_scale,w_358.png 358w"
            src="torch_olympic_zai8pg_c_scale,w_358.png"
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
            srcSet="
            img/athletism/action-athletes_nxl3jz_c_scale,w_154.jpg 154w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 995px) 20vw, 199px"
            srcSet="
            img/athletism/action-athletes_nxl3jz_c_scale,w_154.jpg 154w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_199.jpg 199w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 20vw, 240px"
            srcSet="
            img/athletism/action-athletes_nxl3jz_c_scale,w_199.jpg 199w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_240.jpg 240w"/>
          <img
            className={styles.athletism}
            sizes="(max-width: 4267px) 30vw, 1280px"
            srcSet="
            img/athletism/action-athletes_nxl3jz_c_scale,w_360.jpg 360w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_558.jpg 558w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_718.jpg 718w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_842.jpg 842w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_989.jpg 989w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_1116.jpg 1116w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_1225.jpg 1225w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_1277.jpg 1277w,
            img/athletism/action-athletes_nxl3jz_c_scale,w_1280.jpg 1280w"
            src="action-athletes_nxl3jz_c_scale,w_1280.jpg"
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
            sizes="(max-width: 770px) 20vw, 154px"
            srcSet="
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_154.jpg 154w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 995px) 20vw, 199px"
            srcSet="
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_154.jpg 154w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_199.jpg 199w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 20vw, 240px"
            srcSet="
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_199.jpg 199w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_240.jpg 240w"/>
          <img
            className={styles.basketball}
            sizes="(max-width: 4267px) 30vw, 1280px"
            srcSet="
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_360.jpg 360w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_518.jpg 518w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_655.jpg 655w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_770.jpg 770w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_886.jpg 886w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_992.jpg 992w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1091.jpg 1091w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1193.jpg 1193w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1253.jpg 1253w,
            img/basketball/basketball-1544370_1280_tiduyj_c_scale,w_1280.jpg 1280w"
            src="basketball-1544370_1280_tiduyj_c_scale,w_1280.jpg"
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
            srcSet="
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_154.jpg 154w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 995px) 20vw, 199px"
            srcSet="
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_154.jpg 154w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_199.jpg 199w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 20vw, 240px"
            srcSet="
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_199.jpg 199w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_240.jpg 240w"/>
          <img
            className={styles.fencing}
            sizes="(max-width: 4267px) 30vw, 1280px"
            srcSet="
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_360.jpg 360w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_650.jpg 650w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_982.jpg 982w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_1189.jpg 1189w,
                img/fencing/fencing-1839325_1280_jd9iro_c_scale,w_1280.jpg 1280w"
            src="fencing-1839325_1280_jd9iro_c_scale,w_1280.jpg"
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
            srcSet="
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_154.jpg 154w"/>
          <source
            media="(min-width: 768px) and (max-width: 991px)"
            sizes="(max-width: 995px) 20vw, 199px"
            srcSet="
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_154.jpg 154w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_199.jpg 199w"/>
          <source
            media="(min-width: 992px) and (max-width: 1199px)"
            sizes="(max-width: 1200px) 20vw, 240px"
            srcSet="
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_199.jpg 199w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_240.jpg 240w"/>
          <img
            className={styles.swimming}
            sizes="(max-width: 4267px) 30vw, 1280px"
            srcSet="
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_360.jpg 360w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_537.jpg 537w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_690.jpg 690w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_812.jpg 812w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_922.jpg 922w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_1016.jpg 1016w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_1118.jpg 1118w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_1209.jpg 1209w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_1264.jpg 1264w,
                img/swimming/swimming-78112_1280_iumcpz_c_scale,w_1280.jpg 1280w"
            src="swimming-78112_1280_iumcpz_c_scale,w_1280.jpg"
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
        <a href="#">Contact</a>
        <a href="../Legalsmention/legalsmention.html">Crédits et mentions<br />légales</a>
        <a href="#">Conditions générales<br />d achat</a>
      </footer>
    </div>

  );
}

export default App;