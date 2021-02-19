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
                    <h1 className={Styles.lable}> Tack för din beställning  </h1>

                    <div className={Styles.ticketInfo} >


                        <div className={Styles.artist} >
                            <h4>WHAT</h4>
                            <h2>{ticket.artist}</h2>
                        </div>
                        <div className={Styles.location}>
                            <h4>WHERE</h4>
                            <h2>{ticket.location}</h2>
                        </div>
                        <div className={Styles.time}>
                            <h4>WHEN</h4>
                            <h2>{ticket.date}</h2>
                        </div>
                        <div className={Styles.time}>
                            <h4>FROM</h4>
                            <h2>{ticket.from}</h2>
                        </div>
                        <div className={Styles.time}>
                            <h4>TO</h4>
                            <h2>{ticket.to}</h2>
                        </div>
                    </div>
                    <div />
                </div> : <Error />
            }

        </>

    );
}

export default Tickets;