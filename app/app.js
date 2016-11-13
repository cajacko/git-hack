import React from 'react'
import ReactDOM from 'react-dom'
import UnstagedContainer from '~/containers/Unstaged/Unstaged'
import {Provider} from 'react-redux'
import configureStore from '~/configureStore'
import IndexRouter from '~/routers/index'

const store = configureStore()

class Root extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <IndexRouter />
      </Provider>
    );
  }
}

// Render to ID content in the DOM
ReactDOM.render( <Root /> ,
  document.getElementById('app')
) 
