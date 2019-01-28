import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';


describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardContainer />);
  })

  it.skip('should match the snapshot ', () => {
    const wrapper = shallow(<CardContainer />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleNextPageClick method', () => {

    it('should increase state of min and max by 10', () => {
      //setup
      expect(wrapper.state('min')).toEqual(0)
      expect(wrapper.state('max')).toEqual(10)
      //execution
      wrapper.instance().handleNextPageClick()
      //expectation
      expect(wrapper.state('min')).toEqual(10)
      expect(wrapper.state('max')).toEqual(20)
    });
    it.skip('should match the snapshot with all data passed in correctly', () => {
     
    });

  })



})
