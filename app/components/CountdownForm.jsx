'use strict';

import React from 'react';

class CountdownForm extends React.Component {
    onSubmit = (e)=> {
        e.preventDefault();
        var seconds = this.refs.seconds.value;
        if (seconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(seconds));
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}
export default CountdownForm;