import React from 'react';
import { Prompt } from "react-router-dom";

class Home extends React.Component {
  
    state = { 
        allowNavigation: true 
    };

    toggleNavigation = () => {
        this.setState({
            allowNavigation: !this.state.allowNavigation
        })
    };

    render() {
        let {allowNavigation} = this.state;
        return (
            <div>
                <h2>Home</h2>
                <div onClick={this.toggleNavigation} className="navigation-button">
                    {allowNavigation?'Block Navigation':'Unblock Navigation'}
                </div>
                <Prompt
                    when={!allowNavigation}
                    message={location => `Are you sure you want to redirect` }
                    />
            </div>
        );
    };
}

export default Home;