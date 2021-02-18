import React, {  useContext } from 'react';
import { EventContext, UpdateTicketsContext } from '../../App'
import { useHistory } from 'react-router-dom';
import Error from '../erorr';

function Buy() {
    const history = useHistory();
    const event = useContext(EventContext);
    const setTicket = useContext(UpdateTicketsContext);



    return (
        <>
            {event ?
                <div>
                    <h3> You are about to score some tickets to </h3>
                    <h1>{event.artist}  </h1>
                    <div>
                        <h3>{event.date}</h3>
                        <h4> @ {event.from} {event.to}</h4>
                    </div>
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