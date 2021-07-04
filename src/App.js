import React from 'react';
import "./style.css";
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
export default function App() {
  return (
    <>
      <BrowserRouter>
         <Switch>
             <Route path="/" component={Home} exact></Route>
             <Route path="/about" component={About} exact></Route>
              
        </Switch>
         
      </BrowserRouter>

  
    </>
    
  );
}
