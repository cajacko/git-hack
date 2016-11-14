import React from 'react'
import commitMessageToJsx from '~/helpers/formatting/commitMessageToJsx'
import {style} from '~/components/CommitForm/CommitForm.style'
import Button from '~/components/Button/Button'
import Text from '~/components/Text/Text'
import Radium from 'radium'

class CommitForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = commitMessageToJsx(this.props.message)

    return (
      <form style={style.form}>
        <div style={style.main}>
          <div style={style.inputGroup}>
            <label style={style.label}><Text text="Type"/></label>
            <input 
              style={style.textInput}
              type="text" 
              placeholder="Type" 
              value={this.props.type}
              onChange={(event) => this.props.textInputChange('type', event.target.value)}
            />
          </div>

          <div style={style.inputGroup}>
            <label style={style.label}><Text text="Summary"/></label>
            <input 
              style={style.textInput}
              type="text" 
              placeholder="Commit summary" 
              value={this.props.summary} 
              onChange={(event) => this.props.textInputChange('summary', event.target.value)}
            />
          </div>
          
          <div style={style.inputGroup}>
            <label style={style.label}><Text text="Description"/></label>
            <textarea 
              style={[style.textInput, style.textarea]}
              placeholder="Description of the commit"
              onChange={(event) => this.props.textInputChange('description', event.target.value)}
              value={this.props.description}
            />
          </div>

          <div style={style.inputGroup}>
            <label style={style.label}><Text text="Issue ID"/></label>
            <input 
              style={style.textInput}
              type="text" 
              placeholder="Issue ID" 
              value={this.props.issueId} 
              onChange={(event) => this.props.textInputChange('issueId', event.target.value)}
            />
          </div>

          <div>
            <Text style={style.label}text="Preview"/>

            <div style={style.message}>
              {message}
            </div>
          </div>
        </div>

        <div style={style.footer}>
          <div style={style.pushContainer}>
            <input 
              type="checkbox" 
              checked={this.props.push}
              onChange={this.props.pushChange}
            />

            <label><Text text="Push on save" /></label>
          </div>

          <Button 
            type="submit" 
            onClick={this.props.saveCommit}
          >
            Save Commit
          </Button>
        </div>
      </form>
    )
  }
}

export default Radium(CommitForm)