import React from 'react';
import Clock from '../components/clock'

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Clock />
            </div>
        );
    };
}

export default Home;