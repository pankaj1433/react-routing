import React from 'react';
import Topic from './Topic';
import { Prompt, Route, Link } from "react-router-dom";

class Home extends React.Component {
  
    state = { 
        allowNavigation: true ,
        topic: 'Routing'
    };

    toggleNavigation = () => {
        this.setState({
            allowNavigation: !this.state.allowNavigation
        })
    };

    render() {
        let {allowNavigation, topic} = this.state;
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
                <br/>
                <Link to="/home/topic">Topic</Link>
                <Route path="/home/topic" render={props => <Topic topic={topic}/>} />
            
            </div>
        );
    };
}

export default Home;