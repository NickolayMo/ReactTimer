'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Timer from './../../components/Timer';
import $ from 'jquery/dist/jquery.min';


describe('Timer', ()=>{
    it('should exist',()=>{
        expect(Timer).toExist();
    });
    describe('handleStatusChange', ()=>{
        it('should set state "started" and timer', (done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.handleStatusChange('started');
            setTimeout(()=>{
                expect(timer.state.seconds).toBe(3);
                expect(timer.state.status).toBe('started');
                done();
            }, 3001);
        });

        it('should set timer status to "pause"', (done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.seconds = 3;
            timer.handleStatusChange('paused');
            setTimeout(()=>{
                expect(timer.state.seconds).toBe(3);
                expect(timer.state.status).toBe('paused');
                done();
            }, 3001);
        });

        it('should set timer status to "stopped"', (done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.seconds = 3;
            timer.handleStatusChange('stopped');
            setTimeout(()=>{
                expect(timer.state.status).toBe('stopped');
                done();
            }, 1001);
        });
    });
});

