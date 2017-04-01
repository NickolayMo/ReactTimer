'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery/dist/jquery.min';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import CountdownForm from './../../components/CountdownForm';

describe('CountdownForm', ()=>{
    it('should exist', ()=>{
        expect(CountdownForm).toExist();
    });
    it('should call setCountdown if entered valid number of seconds', ()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $elem = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';

        TestUtils.Simulate.submit($elem.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(109);
    });
    it('should not call setCountdown if entered invalid number of seconds', ()=>{
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $elem = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = 'bad value';

        TestUtils.Simulate.submit($elem.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});


