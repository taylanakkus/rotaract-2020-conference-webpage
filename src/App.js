import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';
import Reservation from './components/reservation';
import Hotel from './components/hotel/hotel';
import HomePage from './components/homepage';
import Contact from './components/contact';
import Participant from './components/participant';
import Messages from './components/messages';



function App() {
  return (

    <BrowserRouter>

      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/kayit' component={Reservation} />
        <Route path='/otel' component={Hotel} />
        <Route path='/katilim' component={Participant} />
        <Route path='/iletisim' component={Contact} />
        <Route path='/mesajlar' component={Messages} />
      </Switch>
      <Footer />

    </BrowserRouter>



  );
}

export default App;
