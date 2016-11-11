import React from 'react'
import Unstaged from '../../components/Unstaged/Unstaged'

class UnstagedContainer extends React.Component {
  propsToState(props) {
    const state = {
      changed: props.changed,
      deleted: props.deleted,
      new: props.new
    }

    return state;
  }

  constructor(props) {
    super(props);

    console.log(props)

    this.state = this.propsToState(this.props)

    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  toggleCheckbox(key, value, checked) {
    console.log('toggle', key, value, checked)

    var thisObject = this
    var finished = false

    // this.state[key].forEach(function(file) {
    //   if (finished) {
    //     return false
    //   }

    //   console.log(file)

    //   if (file == value) {
    //     thisObject.setState({
    //       [key]: {
    //         [value]: 
    //       }
    //     })
        
    //     finished = true
    //   }

    })
  }

  render() {
    console.log('render container', this.props, this.state)

    var count = 0;

    return (
      <Unstaged
        new={this.state.new}
        changed={this.state.changed}
        deleted={this.state.deleted}
        toggleCheckbox={this.toggleCheckbox}
      />
    );
  }
}

export default UnstagedContainer