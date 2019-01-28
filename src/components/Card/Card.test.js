import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import * as mockFilms from '../../mockData/films'

describe('Card', () => {
  let wrapper;
  let mockFilmsState = mockFilms.filmResultsCleaned
  // console.log('hello', mockFilmsState)
  beforeEach(() => {
    wrapper = shallow(<Card />);
  })

  // console.log('hello', wrapper.state('films'))
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it.skip('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should setState of isLoading to true', () => {
    // wrapper = shallow(<App />);
    // wrapper.setState({ films: mockFilms.filmResultsCleaned, isLoading: true });
    // expect(wrapper.state('films')).toEqual(mockFilms.filmResultsCleaned);
    // wrapper.instance().componentDidMount();
    // expect(wrapper.state('isLoading')).toEqual(true)
  });

})
