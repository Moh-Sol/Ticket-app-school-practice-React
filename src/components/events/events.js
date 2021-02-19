import React, { useContext } from 'react';
import data from '../../assets/data.json';
import { useHistory } from 'react-router-dom';
import { UpdateEventContext } from '../../App'
import Styles from './events.module.css'

function Events() {

    const history = useHistory();
    const event = useContext(UpdateEventContext)

    let events = data.map(item => {
        return (
            <div  className={Styles.eventContiner} key={item.id} onClick={() => {
                event(item)
                history.push('/buy')
            }}>
                <h3> {item.date}</h3>
                <h2>{item.artist}</h2>
                <h4>{item.location}</h4>
                <h5>{item.from} - {item.to}</h5>
                <h3>{item.price}</h3>
         
            </div>
        )
    })

    return (
        <div className={Styles.eventsContiner}>
            <h1> Events </h1>
            {events}
        </div>
    );
}

export default Events;


