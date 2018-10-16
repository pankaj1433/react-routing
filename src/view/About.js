import React from 'react';

const About = ({location}) => (
    <div>
        <h2>About</h2>
        <p>{location.state ? location.state.extraData : 'This is about page'}</p>
    </div>
);

export default About;