import React from 'react';
import { Route, Link } from "react-router-dom";

const Topics = (props) => {
    console.log(props,'props from topics')
    let {match} = props;
return (
    <div className="topics-wrapper">
        <h2>Topics</h2>
        <div className="topics">
            <ul>
                <li>
                    <Link to={`${match.url}/Topic-1`}>Topic-1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic-2`}>Topic-2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic-3`}>Topic-3</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>} />
        </div>
    </div>
);
}
const Topic = ({ match }) => (
    <div>
        <h3>Topic Name: {match.params.topicId}</h3>
    </div>
);

export default Topics;