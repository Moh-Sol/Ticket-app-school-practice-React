import React, { useContext } from 'react';
import { TicketsContext } from '../../App'
import Error from '../erorr';
import Styles from './ticket.module.css'


function Tickets() {
    const ticket = useContext(TicketsContext)
    console.log(ticket)

    return (
        <>
            {ticket ?
                <div className={Styles.ticketContainer}>
                    <h1> Tickets </h1>
                    <h4>WHAT</h4>
                    <h2>{ticket.artist}</h2>
                    <h4>WHERE</h4>
                    <h2>{ticket.location}</h2>
                    <h4>WHEN</h4>
                    <h2>{ticket.date}</h2>
                    <h4>FROM</h4>
                    <h2>{ticket.from}</h2>
                    <h4>TO</h4>
                    <h2>{ticket.to}</h2>
                </div> : <Error />}
        </>

    );
}

export default Tickets;