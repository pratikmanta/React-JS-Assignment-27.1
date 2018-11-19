import React from 'react';
import App from './App';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'


Enzyme.configure({ adapter: new Adapter() })

// App component test 
describe('App', () => {
  it('displays input box and related buttons', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.exists()).toBe(true)
  })
})

// Increment test
describe('Increment',()=> {
  it('input from user and increments the value by 1',() => {
    const wrapper = shallow(<App/>)
    const inputAge = wrapper.find('input')
    const incrementButton = wrapper.find('#increment')

    // change value here to pass or fail test
    inputAge.props().onChange({target:{
      age:'',
      value:26            
    }});
    expect(wrapper.state('age')).toEqual(26)        //    change value in toEqual() to pass or fail test
    incrementButton.props().onClick()
    expect(wrapper.state('age')).toEqual(27)        //      change value here to pass or fail test
  })
})

// Decrement test
describe('Decrement',()=> {
  it('input from user and decrements the value by 1',() => {
    const wrapper = shallow(<App/>)
    const inputAge = wrapper.find('input')
    const decrementButton = wrapper.find('#decrement')

    // change value here to pass or fail test
    inputAge.props().onChange({target:{
      age:'',
      value:26                
    }});
    expect(wrapper.state('age')).toEqual(26)        //    change value in toEqual() to pass or fail test
    decrementButton.props().onClick()
    expect(wrapper.state('age')).toEqual(25)        //      change value here to pass or fail test
  })
})


