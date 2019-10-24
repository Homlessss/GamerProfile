import React, {Component} from 'react';

export default class SearchBar extends Component{
    _handleTextChange = event => this.props.onSearchChanged(event.target.value);
    render(){
        return(
            <form className="search col-3">
                <input onChange={this._handleTextChange} className="form-control" type="text" placeholder="Search..." />      
            </form>
        );
    }
}

