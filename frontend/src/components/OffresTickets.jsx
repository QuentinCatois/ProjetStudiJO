import styles from "./OffresTickets.module.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CountsContext } from '../App'; 

function Tickets() {

    const [searchEvent, setSearchEvent] = useState(""); //To search for specific event
    const [searchVille, setSearchVille] = useState(""); //To search for a specific city
    const [filteredTickets, setFilteredTickets] = useState([]);
    const { counts, setCounts, ticketsData, setTicketsData  } = useContext(CountsContext);

    useEffect(() => {
        const fetchData = async () => {
            console.log(ticketsData)
            if (ticketsData.length === 0) {
            try {
                const endpoint = `http://127.0.0.1:8000/api/tickets/tickets/`;
                const response = await axios.get(endpoint);
                const { data } = response;
    
                const ticketsWithData = data.map(ticket => ({
                    ...ticket,
                    counter: 0 // Adding a counter field initialized to 0
                }));
                setTicketsData(ticketsWithData);
                console.log(data);
                return ticketsWithData;
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error if needed
            }}
        };
    
        fetchData(); // Invoke fetchData immediately
    }, [setTicketsData, ticketsData]);


    const handleSearchEvent = (event) => {
        setSearchEvent(event.target.value.toLowerCase()); // Update search term for Event
    };

    const handleSearchVille = (event) => {
        setSearchVille(event.target.value.toLowerCase()); // Update search term for city
    };

    useEffect(() => {
        const filtered = ticketsData.filter(ticket =>
          (searchEvent === "" || ticket.name.toLowerCase().includes(searchEvent.toLowerCase())) &&
          (searchVille === "" || ticket.ville.toLowerCase().includes(searchVille.toLowerCase()))
        );
        setFilteredTickets(filtered);
      }, [searchEvent, searchVille, ticketsData]);

    useEffect(() => {
        // Initialize counts array with zeroes when filteredTickets changes
        if (filteredTickets.length > 0  && counts.length === 0) {
            setCounts(new Array(filteredTickets.length).fill(0));
        }
    }, [filteredTickets,counts, setCounts]);

    const increment = (ticket) => {
        if (ticket.counter + 1 > ticket.nombre_total_ticket) {
          return;
        }
        
        const updatedTickets = ticketsData.map(t => {
          if (t.id === ticket.id) {
            return {
              ...t,
              counter: t.counter + 1
            };
          }
          return t;
        });
      
        setTicketsData(updatedTickets);
      };

    // Decrement counter for a specific index
    const decrement = (ticket) => {
        console.log(ticket)
        if (ticket.counter > 0) {
        const updatedTickets = ticketsData.map(t => {
            if (t.id === ticket.id) {
              return {
                ...t,
                counter: t.counter - 1
              };
            }
            return t;
          });
          setTicketsData(updatedTickets);}
    };

    return (

        <>
            <div>
                <input
                    type="text"
                    placeholder="Rechercher un événement"
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
                            <button className={styles.rounding_button} onClick={() => decrement(ticket)}> - </button>
                            <p>{ticket.counter}</p>
                            <button className={styles.rounding_button} onClick={() => increment(ticket)}> + </button>
                        </div>

                        <p className={styles.item_8}>Total :</p>
                        <p className={styles.item_9}>{(ticket.counter * ticket.tickets_prix).toFixed(2)}</p>
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