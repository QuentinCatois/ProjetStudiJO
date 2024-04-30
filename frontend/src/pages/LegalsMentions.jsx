import { Link} from "react-router-dom"
import "./LegalsMentions.css"

//import images
import logo1 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154.png';
import logo2 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-1.png';
import logo3 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-2.png';
import logo4 from '../img/LegalsMention/logo_gdevqk_c_scale,w_154-3.png';


function App () {


    return (
        <>
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
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi accusamus
            libero asperiores accusantium fugit? Deleniti esse explicabo laborum,
            dignissimos, tempora omnis, asperiores tenetur nisi illum expedita
            excepturi perferendis aperiam iure.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero
            numquam molestias debitis quas, possimus facere nesciunt corporis qui
            tempore error adipisci! Sed id, aut fuga velit facere aliquid non?
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo laborum
            fuga molestiae repellendus rem fugit inventore ipsam, ab sit
            necessitatibus mollitia omnis adipisci dicta magni amet architecto ad
            expedita!
            </p>
        </main>

        <footer>
            <Link to= "/">Page d acceuil</Link>
        </footer>
        </>
    );
  }
  
  export default App;