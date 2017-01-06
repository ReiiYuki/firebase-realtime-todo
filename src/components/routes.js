import {Router, Route, IndexRoute} from 'react-router'
import App from './App'
import React, {Component} from 'react'
import ShowTodo from './App/show-todo'
import {connect} from 'react-redux'
import {loadSections} from 'actions/todo'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.props.loadSections()
  }
  render() {
    return (
      <Router {...this.props}>
        <Route path='/'>
          <IndexRoute component={App} />
          <Route path=':id' component={ShowTodo}/>
        </Route>
      </Router>
    )
  }
}

export default connect(null, {loadSections})(Routes)
