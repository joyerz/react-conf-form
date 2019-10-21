import * as React from 'react'
import { connect } from 'react-redux-creator'
import { storyListRedux, storyAddRedux } from './redux'
import { Spin } from 'antd'
import Add from './com/add'
import './index.scss'

type Props = {
  actionList: any
  actionAdd: any
  storyList: any
  storyAdd: any
}

class Home extends React.Component<Props, any> {
  componentDidMount(): void {
    this.props.actionList({ page: 1, type: '1' })
  }

  render() {
    const { loading } = this.props.storyList
    return (
      <Spin spinning={loading}>
        <div className="page">
          <Add actionSubmit={this.props.actionAdd} />
        </div>
      </Spin>
    )
  }
}

export default connect(
  (state: any) => ({
    storyList: state.storyList,
    storyAdd: state.storyAdd,
  }),
  {
    actionList: (params?: object) => storyListRedux.start(params),
    actionAdd: (params?: object) => storyAddRedux.start(params),
  },
)(Home)
