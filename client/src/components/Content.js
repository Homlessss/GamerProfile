import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        const displayedPlayer= this.props.player.filter(player => player.name.include(this.props.searchString));
        return (
            <div className="player container">
                {displayedPlayer}
            </div>
        );
    }
}