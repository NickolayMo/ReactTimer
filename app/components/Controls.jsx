'use strict';

import React from 'react';

class Controls extends React.Component{
    static propTypes = {
        status: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    };
    onStatusChange(status){
        return ()=>{
            this.props.onStatusChange(status);

        };
    }
    render(){
        var {status} = this.props;
        var renderStartStopButton = ()=>{
            if(status === 'started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }else{
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );

    }
}

export default Controls;