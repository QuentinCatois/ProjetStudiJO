import styles from "./OffresTickets.module.scss";
import { useState, useEffect} from "react";
import axios from "axios";

function Tickets() {

    const [count, setCount] = useState(0); //State Initialization counter
    const [ticketsData, setTicketsData] = useState([])
    const [searchEvent, setSearchEvent] = useState(""); //To search for specific event
    const [searchVille, setSearchVille] = useState(""); //To search for a specific city

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

    const handleSearchEvent = (event) => {
        setSearchEvent(event.target.value.toLowerCase()); // Update search term for Event
    };

    const handleSearchVille = (event) => {
        setSearchVille(event.target.value.toLowerCase()); // Update search term for city
    };

    const filteredTickets = ticketsData.filter((ticket) => (
        (searchEvent === "" || ticket.name.toLowerCase().includes(searchEvent)) &&
        (searchVille === "" || ticket.ville.toLowerCase().includes(searchVille))
    ));  
      
    //Increment counter
    const increment = () => {
          setCount(count + 1);
    };
      
    //Decrement counter
    const decrement = () => {
        if (count > 0) {
                setCount(count - 1);
        }
    };


    return (

        <>
            <div>
                <input
                type="text"
                placeholder="Rechercher d'un événement"
                className={styles.search_field}
                value={searchEvent}
                onChange={handleSearchEvent} // Update search event on input change
                />

                <input
                type="text"
                placeholder="Chercher une ville"
                className={styles.search_field}
                value={searchVille}
                onChange={handleSearchVille} // Update search city on input change
                />

                {filteredTickets.map((ticket) => (
                    <div className={styles.container} key={ticket.id}>
                        <img className={styles.item_1} src={ticket.thumbnail.url} alt="tickets" />
                        <h2 className={styles.item_2}>{ticket.name}</h2>
                        <p className={styles.item_11}>Ville :</p>
                        <p className={styles.item_3}>{ticket.ville}</p>
                        <p className={styles.item_12}>Date :</p>
                        <p className={styles.item_4}>{ticket.date}</p>
                        <p className={styles.item_13}>Catégorie :</p>
                        <p className={styles.item_5}>{ticket.categories_id}</p>
                        <p className={styles.item_14}>Prix € :</p>
                        <p className={styles.item_6}>{ticket.tickets_prix}</p>

                        <div className={styles.item_7}>
                            <button className={styles.rounding_button}onClick={decrement}> - </button>
                            <p>{count}</p>
                            <button className={styles.rounding_button}onClick={increment}> + </button>
                        </div>
                        
                        <p className={styles.item_8}>Total :</p>
                        <p className={styles.item_9}>{(count * ticket.tickets_prix).toFixed(2)}</p>
                        <button className={styles.item_10}> Ajouter au panier</button>
                    </div>
                ))}
            </div>
        </>
    );

}

export default Tickets;