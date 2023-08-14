import React from "react";
import Header from "./header";
import Props from "./props";
function App(){
    return( 
    <div>
        <Header/>
        <h3> This is main App Component {2+2}</h3>
        {1&&<p>This is visible conditional rendering</p>}
        <br/>
        <Props name="Shubham"/>
    </div>)
}

export default App;