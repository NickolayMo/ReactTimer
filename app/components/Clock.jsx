'use strict';
import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
    }
    static defaultProps = {
        totalSeconds: 0
    };
    static propTypes = {
        totalSeconds: React.PropTypes.number

    };
    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return minutes + ':' + seconds;
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-text">
                    {this.formatSeconds(this.props.totalSeconds)}
                </div>
            </div>
        );
    }
}
export default Clock;