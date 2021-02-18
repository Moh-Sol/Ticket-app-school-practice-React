import './App.css';
import React, { createContext, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Tickets from './components/ticket/ticket';
import Buy from './components/buy/buy';
import Events from './components/events/events';
import Error from './components/erorr';


const EventContext = createContext(undefined)
const UpdateEventContext = createContext(undefined)
const TicketsContext = createContext(undefined)
const UpdateTicketsContext = createContext(undefined)



function App() {

  const [currentEvent, setCurrentEvent] = useState('');
  const [purchasedTicket, setPurchasedTicket] = useState('');


  // const history = useHistory();

  // useEffect(() => {
  //   history.push('/events')
  // }, [])





  return (

    <div className="App">
      <EventContext.Provider value={currentEvent}>
        <UpdateEventContext.Provider value={setCurrentEvent}>
          <TicketsContext.Provider value={purchasedTicket}>
            <UpdateTicketsContext.Provider value={setPurchasedTicket}>
              <Switch>
                <Route path="/" component={Events} exact />
                <Route path="/events" component={Events} />
                <Route path="/buy" component={Buy} />
                <Route path="/tickets/:id" component={Tickets} />
                <Route component={Error} />
              </Switch>
            </UpdateTicketsContext.Provider>
          </TicketsContext.Provider>
        </UpdateEventContext.Provider>
      </EventContext.Provider>
    </div>
  );
}

export { App, EventContext, UpdateEventContext, TicketsContext, UpdateTicketsContext };



