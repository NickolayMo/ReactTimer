'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Controls from './../../components/Controls';
import $ from 'jquery/dist/jquery.min';

describe('Controls', ()=>{
    it('should exist', ()=>{
        expect(Controls).toExist();
    });
    describe('render',()=>{
        it('should render stop button and clear button', ()=>{
            var controls = TestUtils.renderIntoDocument(<Controls status="started" />);
            var $el = $(ReactDOM.findDOMNode(controls));
            expect($el.find('button:contains(Pause)').length).toBe(1);
            expect($el.find('button:contains(Clear)').length).toBe(1);
        });
        it('should render start button and clear button', ()=>{
            var controls = TestUtils.renderIntoDocument(<Controls status="paused" />);
            var $el = $(ReactDOM.findDOMNode(controls));
            expect($el.find('button:contains(Start)').length).toBe(1);
            expect($el.find('button:contains(Clear)').length).toBe(1);
        });

    });
});