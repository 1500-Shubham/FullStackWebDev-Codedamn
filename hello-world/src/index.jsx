import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import App from './Components/App';
import CounterApp from './Components/counterApp';
//learning export import
import sub,{add} from './calculator'
import QuoteGeneratorApp from './Components/QuoteGeneratorApp';
//older version
// ReactDOM.render(
//   // const adding=add(5,6)
//   // var Subtracting=sub(6,4)
//   // alert(adding)
//  <App/> ,document.getElementById('root')
// )

//latest version
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
//root.render(<h1>Check {add(5,6)}</h1>);
root.render(<QuoteGeneratorApp/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
