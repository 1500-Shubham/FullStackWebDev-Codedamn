import React,{useState,useEffect} from "react";

function QuoteGeneratorApp(){
    const quote=['abc','def','ghi','jkl','mno'];
    const [counter,setCounter]=useState('');
    function increase(){
    var random=Math.floor(Math.random()*quote.length);  
    setCounter(quote[random]);
    }
    return (
        <div>
            <h2>QuoteGenerated: {counter}</h2>
            <button onClick={increase}>Generate Quote</button>
        </div>
    )
}

export default QuoteGeneratorApp;