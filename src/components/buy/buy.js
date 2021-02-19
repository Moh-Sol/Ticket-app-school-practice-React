import React, { useContext } from 'react';
import { EventContext, UpdateTicketsContext } from '../../App'
import { useHistory } from 'react-router-dom';
import Styles from './buy.module.css'

import Error from '../erorr';

function Buy() {
    const history = useHistory();
    const event = useContext(EventContext);
    const setTicket = useContext(UpdateTicketsContext);


    return (
        <>
            {event ?
                <div className={Styles.buyContainer}>
                    <h3> You are about to score some tickets to </h3>
                    <h1>{event.artist}  </h1>
                    <h3>{event.date} kl {event.from} - {event.to}</h3>
                    <h4> @ {event.location}</h4>
                    <h1> {event.price}  </h1>
                    <button onClick={() => {
                        setTicket(event);
                        history.push(`/tickets/${event.id}`);
                    }} > Beställ </button>
                </div> : <Error />}
        </>

    );
}


export default Buy;