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
            <div key={item.id} onClick={() => {
                event(item)
                history.push('/buy')
            }}>
                <div>
                    <h3> {item.date}</h3>
                </div>
                <div>
                    <h2>{item.artist}</h2>
                    <h4>{item.location}</h4>
                    <div>
                        <h5>{item.from}</h5>
                        <h5>{item.to}</h5>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={Styles.eventContiner}>
            <h1> Events </h1>
            {events}
        </div>
    );
}

export default Events;


