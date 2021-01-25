import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import particlesConfig from "./config/particlesConfig";
import Particles from "react-particles-js";
import Home from "./Routes/Components/Home";
import Restaurant from "./Routes/Components/Restaurant";
import Store from "./Routes/Components/StoreOnLine";
import Error from "./Routes/Components/Error";// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ position: "absolute" }}>
          <Particles
            className="Particless"
            paddingTop="153px"
            marginBottom="50%"
            width="100vw"
            justifyContent="center"
            params={particlesConfig}
          />
        </div>
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/restaurant' exact component={Restaurant} /> 
          <Route path='/store' exact component={Store} /> 
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;