import React from 'react'
import File from '~/components/File/File'

class Unstaged extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFiles(key) {
    var count = 0;

    const props = this.props

    return (
      <div>
        {
          this.props[key].map(function(file) {
            count++;

            return (
              <File key={count} fileName={file} status={key} handleInput={props.toggleCheckbox} checked={file.checked}/>
            )
          })
        }
      </div>
    )
  }

  render() {
    var count = 0;

    return (
      <div>
        <header>
          <h2>Unstaged</h2>
          <button>Stage All</button>
          <button>Stage Selected</button>
        </header>

        <ul>
          {this.renderFiles('new')}
          {this.renderFiles('changed')}
          {this.renderFiles('deleted')}
        </ul>
      </div>
    );
  }
}

export default Unstaged