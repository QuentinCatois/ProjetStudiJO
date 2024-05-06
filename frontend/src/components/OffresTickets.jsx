import styles from "./OffresTickets.module.scss";
/*import { useState, useEffect} from "react";
import axios from "axios";*/

function Tickets() {

        /*const [data, setData] = useState([])

        useEffect(() => {
            const fetchData = async () => {
              const response = await axios.get('http://127.0.0.1:8000/get_tickets/');
              setData(response.data.results);
            };
            
            fetchData();
          }, []);*/

    return (
        <>
            <div className={styles.container}>
                    <img className={styles.item_1} src="" alt="tickets" />
                    <h2 className={styles.item_2}>name</h2>
                    <p className={styles.item_3}>lieu</p>
                    <p className={styles.item_4}>date</p>
                    <p className={styles.item_5}>category</p>
                    <p className={styles.item_6}>prix</p>
                    <div className={styles.item_7}>
                    <button className={styles.rounding_button}> - </button>
                    <p>...</p>
                    <button className={styles.rounding_button}> + </button>
                    </div>
                    <p className={styles.item_8}>Total :</p>
                    <p className={styles.item_9}>...</p>
                    <button className={styles.item-10}> Ajouter au panier</button>
            </div>
        </>
  );
}

export default Tickets;