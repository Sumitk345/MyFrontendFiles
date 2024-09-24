import React from 'react'
import CustomApp from './customApp';
import { Provider } from 'react-redux';
import store from './store';

const Example13Home = () => {
      return (
            <div>
                  <Provider store={store}>
                        <CustomApp />
                  </Provider>
            </div>
      )
}

export default Example13Home;
