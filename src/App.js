import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Beers} from "./pages/Beers";
import {Pokemons} from "./pages/Pokemons";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Archi JS</span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-blue-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">Home</Link>
              <Link to="/beers" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">Bières</Link>
              <Link to="/pokemons" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">Pokemons</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="text-3xl text-center mt-8">This is the home</h2>;
}
