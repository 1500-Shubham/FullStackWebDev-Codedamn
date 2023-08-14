import React from "react";
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';
import User from "./User";

function App(){
    return (
        <BrowserRouter>
        <div>
            <nav>
                <li>
                    <Link to="/hello-world" exact>Go to helloWorld</Link>
                </li>
                <li>
                <Link to="/" exact>Go to Home</Link>
                </li>
                <li>
                <Link to="/user/shubham" exact>Go to Shubham Profile</Link>
                </li>
                <li>
                <Link to="/user/satyam" exact>Go to Satyam Profile</Link>
                </li>
            </nav>
           
    <Routes>
      <Route path="/hello-world" exact element={
        <h1>This is hello-world</h1>
      }>
        
      </Route>
      <Route path="/" exact element={
        <h1>This is home</h1>
      }>
      </Route>
      <Route path="/user/:username" exact element={
       <User/>
      }>
      </Route>
    </Routes>

        </div>
        </BrowserRouter>
    )
}

export default App;