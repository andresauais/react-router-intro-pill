import React, {useState, useEffect} from "react";
import {Route, Switch, useParams} from 'react-router-dom';

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";

import BeersContextProvider from './components/BeersContextProvider'


function App() {
  
  const [page, setPage] = useState(1);

  

  function nextPage(){
    console.log(page)
    setPage(page +1);
  }
  return (
    <BeersContextProvider>
      <Switch>
        <Route path="/beers/find" component={Find} />
        <Route path="/beers/:id">
          <BeerInfo/>
        </Route>
        <Route exact path="/">
          <Home
            page={nextPage}
            nextPage={nextPage}
          />
        </Route>
      </Switch>
    </BeersContextProvider>
  )
}

export default App;
