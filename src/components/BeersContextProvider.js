import React, {useState, useEffect} from "react";
import BeersContext from '../context/BeersContext'
import axios from "axios";

const BeersContextProvider = ({children}) =>{
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [beers, setBeers] = useState([]);
  const [isAuthenticated, setAuthState] = useState(false);

  function login(){
    return setAuthState(true);
  }

  function logout(){
    return setAuthState(false);
  }
  useEffect(()=>{
    async function getBeers(){
      try{
        setLoading(true);
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?page=1&per_page=9`
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

  return(
    <BeersContext.Provider value={{
      beers,
      error,
      loading,
      isAuthenticated,
      login,
      logout,
    }}>{children}</BeersContext.Provider>
  )
}

export default BeersContextProvider;