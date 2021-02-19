import React, { useContext } from 'react';
import { EventContext, UpdateTicketsContext } from '../../App'
import { useHistory } from 'react-router-dom';
import Styles from './buy.module.css'
import Error from '../erorr';

function Buy() {
    const history = useHistory();
    const event = useContext(EventContext);
    const setTicket = useContext(UpdateTicketsContext);


    function orderNumber() {
        var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
            serialLength = 10, randomSerial = "", randomNumber;

        for (let i = 0; i < serialLength; i = i + 1) {
            randomNumber = Math.floor(Math.random() * chars.length);
            randomSerial += chars.substring(randomNumber, randomNumber + 1);
        };

        return (randomSerial)

    }


    function handleClick() {
        setTicket({
            ticketinfo: event,
            orderNumber: orderNumber()
        });
        history.push(`/tickets/${event.id}`)

    }



    return (
        <>
            {event ?
                <div className={Styles.buyContainer}>
                    <h3> You are about to score some tickets to </h3>
                    <h3>{event.date} kl {event.from} - {event.to}</h3>
                    <h4> @ {event.location}</h4>
                    <h1> {event.price}  </h1>
                    <button onClick={handleClick} > Beställ </button>
                </div> : <Error />}
        </>

    );
}


export default Buy;