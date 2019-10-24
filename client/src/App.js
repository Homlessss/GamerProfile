import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/NavBar.js";
import axios from 'axios';
import Content from './components/Content';

export default class App extends Component {
  state={
    player: [{
      "_id": "5db1a5e91c9d440000ca61ff",
      "name": "Faker",
      "nationality": "Korea",
      "Team": "SKT T1"
  },
  {
      "_id": "5db1a63b1c9d440000ca6201",
      "name": "Khan",
      "nationality": "Korea",
      "Team": "SKT T1"
  }],
    searchString:""
};

  componentDidMount(){
      axios.get('http://localhost:3000/api/player')
      .then(data=> {
          this.setState({
          player: data.data,
          })
      })
      .catch(err=> console.log(err));
    }

  _onSearchChanged= text =>this.setState ({searchString: text});
  render(){
    const displayedPlayer= this.state.player.filter(player => player.name.include(this.state.searchString));
    return (
      <div className="App">
        <Navbar 
          onSearchChanged={this._onSearchChanged} 
          // username={this.state.username}
          // onLogin={this.state._onLogin} 
        />
        <Content 
          player={displayedPlayer}
        />
      </div>
    );
  }
}


