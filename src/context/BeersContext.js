import { createContext } from "react";

const BeersContext = createContext({
  beers: [],
  error: null,
  loading: false,
  isAuthenticated: {},
  login: () => {},
  logout: () => {},
});

export default BeersContext;