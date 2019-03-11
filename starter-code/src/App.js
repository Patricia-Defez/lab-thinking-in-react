import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import ProdTable from './components/ProTable';
import SearchBar from './components/SearchBar';
// import logo from './logo.svg';
// import './App.css';
import data from './data.json'


class App extends Component {
    constructor(props){
      super(props);
       this.state = {
         h
       }
    }



  render() {
    return (
   
        <div className="App">
          <SearchBar/>
          <ProdTable products={ data } />
      
        </div>
     
    );
  }
}

export default App;
