import * as React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

import {Progress} from 'antd';

class Result extends React.Component {
  render() {
    return <div className='Result'>
      <h3>{this.props.msg}</h3>
      <Progress style={{'margin':'0 auto',width: '120px', height: '120px'}} percent={this.props.count} type="circle" />
    </div>
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Result)