import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <Link onlyActiveOnIndex activeStyle={{ color: '#53acff' }} to='/'>Home</Link>&nbsp;
                <Link activeStyle={{ color: '#53acff' }} to='/task'>Task</Link>&nbsp;
                <Link activeStyle={{ color: '#53acff' }} to='/about'>About</Link>
            </div>);
    }
}
