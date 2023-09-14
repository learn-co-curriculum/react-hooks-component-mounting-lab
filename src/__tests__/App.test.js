import React from 'react';
import { configure, shallow } from 'enzyme';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App';

test("<App /> calls componentDidMount and adds a Timer", () => {
  spy(App.prototype, 'componentDidMount');
  let appWrapper = shallow(<App />);

  expect(App.prototype.componentDidMount.calledOnce).toBe(true);

  expect(appWrapper.children('.TimerGrid').length).toBe(1)

  expect(appWrapper.state().timerIDs.length).toBe(1)

  appWrapper.unmount()
})

// describe('<App />', () => {
//   var appWrapper


//     //expect there to be one child element of div.TimerGrid within App
//     expect(appWrapper.children('.TimerGrid').length).to.equal(1)

//     //expect this.state.timers to be an array equal to 1
//     expect(appWrapper.state().timerIDs.length).to.equal(1)

//     appWrapper.unmount()
//   });


// });





// describe('<Timer />', () => {
//   var timerWrapper

//   it('calls componentDidMount', () => {
//     spy(Timer.prototype, 'componentDidMount');

//     timerWrapper = shallow(<Timer />);

//     //component mounted correctly
//     expect(Timer.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);
//     timerWrapper.unmount()
//   });


//   it('calls componentWillUnmount', () => {
//     spy(Timer.prototype, 'componentWillUnmount');
//     timerWrapper = shallow(<Timer />);
//     timerWrapper.unmount()
//     expect(Timer.prototype.componentWillUnmount.calledOnce).to.equal(true);

//   })

// });
