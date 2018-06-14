import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DevTools from './reduxDevTools'

import registerServiceWorker from './registerServiceWorker';

const initState = {
  count: 50,
  msg: '请点击上面的两个按钮试试看!'
}

function reducer (state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 10,
        msg: '您点击了ADD按钮'
      }
    case 'DELTET':
      return {
        count: state.count - 10,
        msg: '您点击了Delete按钮'
      }
    default:
      return state
  }
}

const store = createStore(reducer, initState, DevTools.instrument())

console.log(store)

ReactDOM.render(<Provider store={store}><div><App /></div></Provider>, document.getElementById('root'));
registerServiceWorker();
