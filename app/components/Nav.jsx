'use strict';
import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{

    render(){

        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <strong>TimerApp</strong>
                </div>
                <div id="responsive-menu">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">
                                <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                            </li>
                            <li className="menu-text">
                                <Link to="/countdown" activeClassName="active">Countdown</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;