import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home'
import Movies from "./pages/Movies";


function Routes() {
  return (
    <BrowserRouter>
         <Route path="/" exact component={Home} />
      <Route path="/movies" component={Movies} />
    </BrowserRouter>
  );
}

export default Routes;
