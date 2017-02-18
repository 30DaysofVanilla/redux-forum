import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

//Redux stuff
import { Provider } from 'react-redux';
import { reducers } from '../../client/src/Reducers/reducer.js';
import { createStore } from 'redux';

//components
import App from '../../client/src/Containers/App.jsx';
import LoginForm from '../../client/src/Components/LoginForm.jsx';

//fake store
const fakeStore = (injectedState, reducers) => {
  return createStore(
    reducers,
    injectedState
  );
};

describe('<App/>', function() {

  it('renders one <LoginForm /> component', function() {
    
    const testStore = fakeStore({
      username: '',
      password: '',
    }, ()=>{});

    const wrapper = mount(
      <Provider store={testStore}>
        <App />
      </Provider>  
      );

      expect(wrapper.find(LoginForm)).to.have.length(1);
  });
});