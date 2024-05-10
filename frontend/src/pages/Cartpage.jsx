import styles from "./CartPage.module.scss"
import { useState } from 'react';
import { Link} from "react-router-dom"

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to the cart
    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove item from the cart
    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

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
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => removeItemFromCart(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
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