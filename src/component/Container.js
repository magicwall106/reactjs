import React from 'react';
import Nav from './Nav.js';

export default class Container extends React.Component {
    render() {
        return(
    <div>
        <Nav />
        {this.props.children}
    </div>);
    }
}
