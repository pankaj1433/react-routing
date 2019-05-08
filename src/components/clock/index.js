import React from 'react';

//Custom component.
import FormattedDate from '../FormattedDate';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date} = this.state; 
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={date}/>
            </div>
        );
    }
}

export default Clock;
