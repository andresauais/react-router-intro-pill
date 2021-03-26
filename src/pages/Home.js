import React, {useState, useEffect, useContext} from "react";

import Header from "../components/Header";
import BeerCard from "../components/BeerCard";

import BeersContext from "../context/BeersContext";

import axios from "axios";

function Home() {
  const { beers, error, loading, nextPage, isAuthenticated, login, logout } = useContext(BeersContext);
  return (
    <div>
      <Header/>
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
              <button
                className="btn btn-dark btn-sm ml-auto"
                onClick={nextPage}
              >
                Next page
              </button>
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

export default Home;
