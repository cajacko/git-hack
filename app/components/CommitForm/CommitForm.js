import React from 'React'
import commitMessageToJsx from '~/helpers/formatting/commitMessageToJsx'

class CommitForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = commitMessageToJsx(this.props.message)

    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Type" 
            value={this.props.type}
            onChange={(event) => this.props.textInputChange('type', event.target.value)}
          />

          <input 
            type="text" 
            placeholder="Commit summary" 
            value={this.props.summary} 
            onChange={(event) => this.props.textInputChange('summary', event.target.value)}
          />
          
          <textarea 
            placeholder="Description of the commit"
            onChange={(event) => this.props.textInputChange('description', event.target.value)}
            value={this.props.description}
          />

          <input 
            type="text" 
            placeholder="Issue ID" 
            value={this.props.issueId} 
            onChange={(event) => this.props.textInputChange('issueId', event.target.value)}
          />

          <div>
            <input 
              type="checkbox" 
              checked={this.props.push}
              onChange={this.props.pushChange}
            />

            <label>Push on save</label>
          </div>

          <button 
            type="submit" 
            onClick={this.props.saveCommit}
          >
            Save Commit
          </button>
        </form>

        {message}
      </div>
    )
  }
}

export default CommitForm