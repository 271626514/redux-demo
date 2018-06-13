import React, { Component } from 'react';
import Result from './components/Result'
import {connect} from 'react-redux'
import {Button} from 'antd'
import './css/index.scss'

class App extends Component {
  constructor () {
    super()
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
}
  add () {
    console.log('add')
    this.props.add()
  }
  delete () {
    console.log('delete')
    this.props.delete()
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

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    add () {
      dispatch({
        type: 'ADD'
      })
    },
    delete () {
      dispatch({
        type: 'DELTET'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
