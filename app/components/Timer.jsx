'use strict';

import React from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds:0,
            status: 'stopped'
        }
    }

    componentDidUpdate(prevProps, prevState) {
        var {status, seconds} = this.state;
        if (status !== prevState.status) {
            switch (status) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({seconds: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;

            }
        }
    }
    startTimer(){
        this.timer = setInterval(()=>{
            var {seconds} = this.state;
            var newTime = seconds+1;
            this.setState({
                seconds: newTime
            });
        }, 1000);
    }
    handleStatusChange = (status)=>{
        this.setState({status: status});
    };

    render(){
        var {status, seconds} = this.state;
        return (
          <div>
              <h2 className="page-title">Timer</h2>
              <Clock totalSeconds={seconds}/>
              <Controls status={status} onStatusChange={this.handleStatusChange}/>
          </div>
        );
    }
}
export default Timer;