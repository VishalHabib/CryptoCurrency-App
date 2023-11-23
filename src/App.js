import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainRoute from './Route/MainRoute';
import Currency from './Route/Currency';



function App() {
  return (
  <div className="App">
    <Router>
      <Route path='/' exact render={(props)=><MainRoute/>} />
      <Route 
        path='/currency/:id' render={(props)=><Currency/>}
      />
    </Router>
  </div>
  );
  
}

export default App;
