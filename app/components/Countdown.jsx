'use strict';

import React from 'react';
import Clock from './Clock';
import CoundownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seconds: 0,
            status: 'stopped'
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.status !== prevState.status){
            switch (this.state.status){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({seconds: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }
    startTimer(){
        this.timer = setInterval(()=>{
            var newCount = this.state.seconds - 1;
            this.setState({
                seconds: newCount >=0 ? newCount : 0
            });
            if(newCount === 0){
                this.setState({status: 'stopped'});
            }
        },1000);
    }
    handleSetCountdown = (seconds)=>{
        this.setState({
            seconds: seconds,
            status: 'started'
        });
    };
    handleStatusChange = (status)=>{
        this.setState({status: status});
    };

    render(){
        var {seconds, status} = this.state;
        var renderControls = ()=>{
            if(status !== 'stopped'){
                return <Controls status={status} onStatusChange={this.handleStatusChange}/>;
            }else {
                return <CoundownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <h2 className="page-title">Countdown</h2>
                <Clock totalSeconds={seconds} />
                {renderControls()}
            </div>
        );
    }
}
export default Countdown;