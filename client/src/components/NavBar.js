import React, {Component} from 'react';
import SearchBar from "./SearchBar.js";

export default class NavBar extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <div className="home-btn col-2">
                        <a href="">GProfile</a>
                        {/* logo */}
                    </div>
                    <SearchBar onSearchChanged= {this.props.onSearchChanged} />
                    {/* <div className="signin col-2">
                        <a href="">Sign In</a>
                    </div>
                    <div className="register col-2">
                        <a href="">Register</a> */}
                    {/* </div> */}
                        {/* add user and login */}
                    
                </div>
            </div>
        );
    }
}

 