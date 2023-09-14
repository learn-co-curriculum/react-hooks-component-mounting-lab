import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Timer from '../Timer';

test('it calls componentDidMount', () => {
  spy(Timer.prototype, 'componentDidMount');
  let timerWrapper = shallow(<Timer />);

  //component mounted correctly
  expect(Timer.prototype.componentDidMount.calledOnce).toBe(true);
  timerWrapper.unmount()
});


test('it calls componentWillUnmount', () => {
  spy(Timer.prototype, 'componentWillUnmount');
  let timerWrapper = shallow(<Timer />);
  timerWrapper.unmount()
  expect(Timer.prototype.componentWillUnmount.calledOnce).toBe(true);
});