import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate  } from "react-router-dom";
import styles from "./CartPage.module.scss";
import { CountsContext } from '../App'; 
import { getUserInfo } from '../features/auth/authSlice';

function Cart() {
    const { counts, setCounts, ticketsData, setTicketsData } = useContext(CountsContext);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [sum, setSum] = useState(0.0);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const isAuthenticated = !!user;
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(ticketsData);
    }, [ticketsData]);

    useEffect(() => {
        var collector = 0
        ticketsData.forEach(ticket => {
            var price = (ticket.tickets_prix * ticket.counter)
            collector = collector + price
            setSum(collector)
        });

        const filtered = ticketsData.filter(ticket => ticket.counter > 0);
        setFilteredTickets(filtered);
    }, [ticketsData, sum]);

    //To check if user is authenticated, to be able to continue checkout payment. Otherwise redirect to register page.
    const handleCartModel = () => {
        if (!isAuthenticated) {
            navigate("/register");
            return;
        }

        // Fetch user info from Redux store
        dispatch(getUserInfo())
            .then((response) => {
                // Handle successful retrieval of user info
                const userData = response.payload;
                console.log(userData); // User data retrieved successfully
                // Cart operation, including sending the user data to the backend
                const apiUrl = "http://51.20.5.75:8000/api/update_cart/";
                const cartData = {
                    user: userData,
                    sum:sum,
                    tickets: filteredTickets.map(ticket => ({
                        id: ticket.id,
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
                            
                            console.log(response.data.cart_id)
/*                            setCartID(response.data.cart_id)
                            console.log("cartID")
                            console.log(cartID)*/
                            console.log('Stripe url data:', response.data);
                            console.log('Stripe url response.data.stripeurl:', response.data.stripeurl);
                            window.location.href = response.data.stripeurl;
                        })
                        .catch(error => {
                            console.error('Error adding item to cart:', error);
                        });
                } catch (error) {
                    console.error('Error adding item to cart:', error);
                }
            })
            .catch((error) => {
                // Handle error if user info retrieval fails
                console.error('Error retrieving user info:', error);
            });
        
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
