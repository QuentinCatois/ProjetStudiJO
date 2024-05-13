import styles from "./CartPage.module.scss"
import { Link} from "react-router-dom"
import { CountsContext } from '../App'; 
import {useContext, useEffect, useState } from "react";
import axios from "axios";

function Cart() {
    const { counts, setCounts, ticketsData, setTicketsData  } = useContext(CountsContext);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [sum, setSum] = useState(0.0);


    useEffect(() => {
        console.log(ticketsData); // Log counts when the component mounts or counts changes
    }, [ticketsData]);

    useEffect(() => {
      var collector = 0
      ticketsData.forEach(ticket => {
        var price = (ticket.tickets_prix * ticket.counter)
        collector = collector + price
        setSum(collector )
      });

      const filtered = ticketsData.filter(ticket =>
            ticket.counter > 0
      );
      setFilteredTickets(filtered);
    }, [ticketsData,sum]);

      const handleCartModel = () => {
        const apiUrl = "http://127.0.0.1:8000/api/update_cart/";
        const cartData = {
            tickets: filteredTickets.map(ticket => ({
                title: ticket.name,
                category: ticket.categories_id.categories,
                price: ticket.tickets_prix,
                quantity: ticket.counter
            })),
        };
    
        try {
            axios.post(apiUrl, cartData)
                .then(response => {
                    console.log('Cart item added:', response.data);
                })
                .catch(error => {
                    console.error('Error adding item to cart:', error);
                });
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };  

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
                         <td>{ticket.name}</td>
                         <td>{ticket.categories_id.categories}</td> 
                        <td>{ticket.tickets_prix}</td> 
                        <td>{ticket.counter}</td> 
                        <td>{(ticket.counter * ticket.tickets_prix).toFixed(2)}</td>
                    </tr>
                    ))}
                 </tbody>
                <p>sum: {sum}</p>
            </table>

          </div>
          
          <div className={styles.btn}>
            <button className={styles.button} onClick={handleCartModel}>Procéder au paiement</button>
          </div>

          <div className={styles.link}>
            <Link to= "/billetterie">Billetterie</Link>
          </div>


      </>
    );
}

export default Cart;