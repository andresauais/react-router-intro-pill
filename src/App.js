import React, {useState, useEffect} from "react";
import {Route, Switch, useParams} from 'react-router-dom';

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";


import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [beers, setBeers] = useState([]);

  useEffect(()=>{
    async function getBeers(){
      try{
        setLoading(true);
        const response = await axios.get(
          "https://api.punkapi.com/v2/beers?page=1&per_page=9"
        );
        setError(null);
        setLoading(false);
        setBeers(response.data);
      }
      catch(error){
        setError(error.message);
        setLoading(false);
      }
    }
    if(beers.length === 0){
      getBeers();
    }
  }, [beers]);
  return (
    <Switch>
      <Route path="/beers/find" component={Find} />
      <Route path="/beers/:id">
        <BeerInfo
          beers={beers}
        />
      </Route>
      <Route exact path="/">
        <Home
          beers={beers}
          errors={error}
          loading={loading}
        />
      </Route>
    </Switch>
  )
}

export default App;
