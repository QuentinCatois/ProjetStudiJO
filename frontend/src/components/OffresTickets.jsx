import styles from "./OffresTickets.module.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CountsContext } from '../App'; 

function Tickets() {

    const [ticketsData, setTicketsData] = useState([])
    const [searchEvent, setSearchEvent] = useState(""); //To search for specific event
    const [searchVille, setSearchVille] = useState(""); //To search for a specific city

    const endpoint = `http://127.0.0.1:8000/api/tickets/tickets/`

    const fetchData = async () => {
        const response = await axios.get(endpoint)
        console.log(response)
        const { data } = response
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

    //const [counts, setCounts] = useState([]);
    const { counts, setCounts } = useContext(CountsContext);

    useEffect(() => {
        // Initialize counts array with zeroes when filteredTickets changes
        if (filteredTickets.length > 0  && counts.length === 0) {
            setCounts(new Array(filteredTickets.length).fill(0));
        }
    }, [filteredTickets,counts, setCounts]);

    // Increment counter for a specific index
    const increment = (index, nombre_total_ticket) => {
        const newCounts = [...counts];
        if (newCounts[index] +1 > nombre_total_ticket) {
            return
        }
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    // Decrement counter for a specific index
    const decrement = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
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

                {filteredTickets.map((ticket, index) => 
                
                {
                    console.log("ticket.imageSrc");
                console.log(ticket);
                //console.log(index);
                console.log(counts);
                console.log(counts[index]);
                //console.log(count);
                return (
                    <div className={styles.container} key={ticket.id}>
                        <img className={styles.item_1} src={ticket.image} alt="tickets" />
                        <h2 className={styles.item_2}>{ticket.name}</h2>
                        <p className={styles.item_11}>Ville :</p>
                        <p className={styles.item_3}>{ticket.ville}</p>
                        <p className={styles.item_12}>Date :</p>
                        <p className={styles.item_4}>{ticket.date}</p>
                        <p className={styles.item_13}>Catégorie :</p>
                        <p className={styles.item_5}>{ticket.categories_id.categories}</p>
                        <p className={styles.item_14}>Prix € :</p>
                        <p className={styles.item_6}>{ticket.tickets_prix}</p>

                        <div className={styles.item_7}>
                            <button className={styles.rounding_button} onClick={() => decrement(index)}> - </button>
                            <p>{counts[index]}</p>
                            <button className={styles.rounding_button} onClick={() => increment(index, ticket.nombre_total_tickets)}> + </button>
                        </div>

                        <p className={styles.item_8}>Total :</p>
                        <p className={styles.item_9}>{(counts[index] * ticket.tickets_prix).toFixed(2)}</p>
                        <button className={styles.item_10}> Ajouter au panier</button>
                    </div>
                )

                ;
            }
                )}
            </div>
        </>
    );

}

export default Tickets;