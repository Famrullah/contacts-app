import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store

  it('should render app and snapshot"', () => {
    store = mockStore(initialState)
    const { asFragment } = render(<Provider store={store}><App /></Provider>)
    expect(asFragment(<App />)).toMatchSnapshot();
  })
})