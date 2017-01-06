import React, { Component } from 'react';
import SectionList from './section-list'
import {connect} from 'react-redux'
import {createSection, loadSpecificSection} from 'actions/todo'
class App extends Component {

  onSubmit = (e) => {
    e.preventDefault()
    let ref = this.refs['section-name']
    let sectionName = ref.value
    this.props.createSection(sectionName)
    ref.value = ''
  }

  onSectionClick = (sectionId) => {
    this.props.loadSpecificSection(sectionId)
  }

  render() {
    return (
      <div>
        <SectionList sections={this.props.sections} onClick={this.onSectionClick}/>
        <form onSubmit={this.onSubmit}>
          <input ref="section-name"/>
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.todo.sections
  }
}


export default connect(mapStateToProps, {createSection, loadSpecificSection})(App)
