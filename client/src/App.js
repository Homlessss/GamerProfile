<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar.js";
import axios from "axios";
import Content from "./components/Content";
import Login from "./components/Login";

export default class App extends Component {
  // state = {
  //   players: [
  //     // {
  //     //   // _id: "5db1a5e91c9d440000ca61ff",
  //     //   // name: "Faker",
  //     //   // nationality: "Korea",
  //     //   // Team: "SKT T1"
  //     // },
  //     // {
  //     //   _id: "5db1a63b1c9d440000ca6201",
  //     //   name: "Khan",
  //     //   nationality: "Korea",
  //     //   Team: "SKT T1"
  //     // }
  //   ],
  //   searchString: ""
  // };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3000/api/player")
  //     .then(data => {
  //       console.log("sadd");
  //       this.setState({
  //         players: data.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // _onSearchChanged = text => this.setState({ searchString: text });
  render() {
    // const displayedPlayer = this.state.players.filter(players =>
    //   players.name.include(this.state.searchString)
    // );
    return (
      <div className="container">
        <div className="App">
          {/* <Navbar
            onSearchChanged={this._onSearchChanged}
            // username={this.state.username}
            // onLogin={this.state._onLogin}
          /> */}
          <Login />
          {/* <Content player={displayedPlayer} /> */}
        </div>
      </div>
    );
  }
}
=======
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar.js";
import axios from "axios";
import Content from "./components/Content";
import Login from "./components/Login";

export default class App extends Component {
  state = {
    players: [
      // {
      //   // _id: "5db1a5e91c9d440000ca61ff",
      //   // name: "Faker",
      //   // nationality: "Korea",
      //   // Team: "SKT T1"
      // },
      // {
      //   _id: "5db1a63b1c9d440000ca6201",
      //   name: "Khan",
      //   nationality: "Korea",
      //   Team: "SKT T1"
      // }
    ],
    searchString: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/player")
      .then(data => {
        console.log("sadd");
        this.setState({
          players: data.data
        });
      })
      .catch(err => console.log(err));
  }

  _onSearchChanged = text => this.setState({ searchString: text });
  render() {
    const displayedPlayer = this.state.players.filter(players =>
      players.name.include(this.state.searchString)
    );
    return (
      <div className="container">
        <div className="App">
          <Navbar
            onSearchChanged={this._onSearchChanged}
            // username={this.state.username}
            // onLogin={this.state._onLogin}
          />
          {/* <Login /> */}
          <Content player={displayedPlayer} />
        </div>
      </div>
    );
  }
}
>>>>>>> f83ad308d0a74d7932b349dac358d51804fb37ed
