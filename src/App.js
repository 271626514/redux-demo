import React, { Component } from 'react';
import Result from './components/Result'
import {Button} from 'antd'
import './css/index.scss'

class App extends Component {
  add () {
    console.log('add')
  }
  delete () {
    console.log('delete')
  }
  render() {
    return (
      <div className="App">
        <Button style={{margin: '20px'}} type="primary" onClick={this.add}>add</Button>
        <Button type="danger" onClick={this.delete}>delete</Button>
        <Result />
      </div>
    );
  }
}

export default App;
