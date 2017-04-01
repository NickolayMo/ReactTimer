'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Countdown from './../../components/Countdown';
import $ from 'jquery/dist/jquery.min';


describe('Countdown', ()=>{
    it('should exist',()=>{
        expect(Countdown).toExist();
    });
    describe('handleSetCountdown', ()=>{
        it('should set state "started" and countdown', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.seconds).toBe(10);
            expect(countdown.state.status).toBe('started');

            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(9);
                done();
            }, 1001);
        });
        it('should not set countdown to negative', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);
            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(0);
                done();
            }, 3001);
        });
        it('should set countdown status to pause', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(3);
                expect(countdown.state.status).toBe('paused');
                done();
            }, 1001);
        });
        it('should set countdown status to stopped', (done)=>{
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            setTimeout(()=>{
                expect(countdown.state.seconds).toBe(0);
                expect(countdown.state.status).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
