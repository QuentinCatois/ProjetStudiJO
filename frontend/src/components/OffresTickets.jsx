import styles from "./OffresTickets.module.scss";
import { useState, useEffect} from "react";
import axios from "axios";

function Tickets() {

    const [ticketsData, setTicketsData] = useState([])

    const endpoint = `http://127.0.0.1:8000/api/tickets/tickets/`

    const fetchData = async() => {
        console.log('fetching...')
        const response = await axios.get(endpoint)
        console.log(response)
        const {data} = response
        setTicketsData(data)
        console.log(data)
        return data
    }

    useEffect(() => { 
        fetchData()
    }, [])

    return (

        <>
            
            <div className={styles.container}>
                    {ticketsData.map(ticket => (
                        <div key={ticket.id}>
                            <img className={styles.item_1} src="" alt="tickets"/>
                            <h2 className={styles.item_2}>{ticket.name}</h2>
                            <p className={styles.item_3}>{ticket.ville}</p>
                            <p className={styles.item_4}>{ticket.date}</p>
                            <p className={styles.item_5}>{ticket.categories_id}</p>
                            <p className={styles.item_6}>{ticket.tickets_prix}</p>
                            <div className={styles.item_7}>
                            <button className={styles.rounding_button}> - </button>
                            <p>...</p>
                            <button className={styles.rounding_button}> + </button>
                            </div>
                            <p className={styles.item_8}>Total :</p>
                            <p className={styles.item_9}>...</p>
                            <button className={styles.item-10}> Ajouter au panier</button>
                        </div>
                    ))}
            </div>
                
            
        </>
    );
}

export default Tickets;