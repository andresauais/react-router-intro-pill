import React, {useState, useEffect} from "react";
import {useParams, Link, useLocation} from 'react-router-dom';
import Header from "../components/Header";
import BeerCard from "../components/BeerCard";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Find() {
  let query = useQuery();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [beers, setBeers] = useState([]);

  useEffect(()=>{
    async function getBeers(){
      try{
        setLoading(true);
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?brewed_after=${query.get("brewed_after")}`
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
    <div>
      <Header />
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API Finder</h1>
            </div>
            <hr />
          </div>
        </section>
        {beers.length > 0 && (
          <section className="row">
            {beers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default Find;
