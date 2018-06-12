import * as React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

import {Button} from 'antd';

class Result extends React.Component {
  state = {}

  componentDidMount() {

  }

  render() {
    return <div className='Result'>
      <h3>下面的计数器会add和deltet按钮操作发生变化</h3>
      <h1>{}</h1>
    </div>
  }
}

export default connect()(Result)