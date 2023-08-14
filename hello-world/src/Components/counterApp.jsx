import React,{useState,useEffect} from "react";

function CounterApp(){

    //intial value + setcounter new renders
    const [counter,setCounter]=useState(0);
    function increase(){
     setCounter(counter+1);   
    }
    function decrease(){
     //function update set counter
    //  setCounter(function(oldValue){
    //     return oldValue-1;
    //  });
    setCounter(oldValue=> oldValue-1);  
      }
      // useEffect(function,[array of var jo change hue toh fnction kaam kare])
      useEffect(()=>{console.log("useEffectUsed")},[counter]);
    return (
        <div>
            <h2>Counter:{counter}</h2>
            <button onClick={increase}>IncreaseCount</button>
            <button onClick={decrease}>DecreaseCount</button>
        </div>
    )

}

export default CounterApp;