import React, {useContext} from "react";
import {useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import BeersContext from "../context/BeersContext"

function BeerInfo() {
  const { beers, isAuthenticated, login, logut } = useContext(BeersContext);
  let { id } = useParams();
  const foundBeer = beers.find((beer) => beer.id == id)

  return (
    <div>
      <Header />
      <main className="container mt-4">
        <section className="row mb-2">
          <div className="col">
            <div className="d-flex align-items-center">
              <h1 className="h3 m-0">Punk API</h1>
              {foundBeer && (
                <div className="ml-auto">
                  <p className="mb-0">
                    First brewed:{" "}
                    <Link
                      to={`/beers/find?brewed_after=${foundBeer.first_brewed}`}
                    >
                      {foundBeer.first_brewed}
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <hr />
          </div>
        </section>
        <section>
        {foundBeer ? (
              <pre>
                <code>{JSON.stringify(foundBeer, null, 2)}</code>
              </pre>
            ) : (
              <code>Beer not found in memory, fetch it from the api</code>
            )}
        </section>
      </main>
    </div>
  );
}

export default BeerInfo;
