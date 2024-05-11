import styles from "./CartPage.module.scss"
import { Link} from "react-router-dom"
import { CountsContext } from '../App'; 
import {useContext, useEffect, useState } from "react";

function Cart() {


    const { counts, setCounts, ticketsData, setTicketsData  } = useContext(CountsContext);
    const [filteredTickets, setFilteredTickets] = useState([]);


    useEffect(() => {
        console.log(ticketsData); // Log counts when the component mounts or counts changes
      }, [ticketsData]);

    useEffect(() => {
        const filtered = ticketsData.filter(ticket =>
            ticket.counter > 0
        );
        setFilteredTickets(filtered);
      }, [ticketsData]);
 
    return (
      <>
        
        <h2>Mon panier</h2>

        <div className={styles.container}>
            
            <table>
                <thead>
                    <tr>
                        <th>Tickets</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Sous-total</th>
                    </tr>
                </thead>
                <tbody>
                 {filteredTickets.map((ticket, index) => (
                     <tr key={index}>
                         <td>{ticket.name}</td> {/* Assuming ticket object has a 'name' property */}
                         <td>{ticket.categories_id.categories}</td> {/* Assuming ticket object has a 'price' property */}
                        <td>{ticket.tickets_prix}</td> {/* Assuming ticket object has a 'quantity' property */}
                        <td>{ticket.counter}</td> {/* Assuming ticket object has 'price' and 'quantity' properties */}
                        <td>{(ticket.counter * ticket.tickets_prix).toFixed(2)}</td>
                    </tr>
                    ))}
                 </tbody>
                
            </table>

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