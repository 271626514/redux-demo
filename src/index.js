import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

function reducer (state=50, action) {
  switch (action.type) {
    case 'ADD':
      return state + 10
    case 'DELTET':
      return state - 10
    default:
      return state
  }
}

const store = createStore(reducer)

console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
