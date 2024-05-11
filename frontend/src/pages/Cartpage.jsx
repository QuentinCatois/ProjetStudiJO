import styles from "./CartPage.module.scss"
import { Link} from "react-router-dom"
import { CountsContext } from '../App'; 
import {useContext, useEffect } from "react";

function Cart() {


    const { counts, setCounts } = useContext(CountsContext);

    useEffect(() => {
        console.log(counts); // Log counts when the component mounts or counts changes
      }, [counts]);

    return (
      <>
        
        <h2>Mon panier</h2>

        <div className={styles.container}>
            
            <table>
                <thead>
                    <tr>
                        <th>Tickets</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Sous-total</th>
                    </tr>
                </thead>
            </table>
            {/* Here you can add your item adding component */}

          </div>
          
          <div className={styles.btn}>
            <button className={styles.button}>Procéder au paiement</button>
          </div>

          <div className={styles.link}>
            <Link to= "/billetterie">Billetterie</Link>
          </div>


      </>
    );
}

export default Cart;