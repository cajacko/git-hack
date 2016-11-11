// ES6 Component
// Import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
// Search component created as a class

import {exec} from 'child_process'

function parseFiles(fileString, callback) {
    var files = [];

    const parts = fileString.split(/(\r\n|\n|\r)/gm)

    parts.forEach(function(file) {
        if (file && file.length) {
            files.push(file)
        }
    })

    callback(null, files)
}

function getFiles(command, callback) {
    exec(command, function(error, stdout, stderr) {

        if (error) {
            callback(true)
            return false
        }

        parseFiles(stdout, callback)
    });
}

function getAllChanges(callback) {
    var allFiles = {};
    var doneCount = 0;

    getFiles('git ls-files -m', function(error, files) {
        if (error) {
            callback(error);
            doneCount = 1000;
            return false;
        }

        doneCount++;

        files.forEach(function(file) {
            allFiles[file] = 'CHANGED'
        })

        getFiles('git ls-files -d', function(error, files) {
            if (error) {
                callback(error);
                doneCount = 1000;
                return false;
            }

            doneCount++;

            files.forEach(function(file) {
                allFiles[file] = 'DELETED'
            })

            if (doneCount >= 3) {
                callback(null, allFiles)
            }
        })
    })

    getFiles('git ls-files --others --exclude-standard', function(error, files) {
        if (error) {
            callback(error);
            doneCount = 1000;
            return false;
        }

        doneCount++;

        files.forEach(function(file) {
            allFiles[file] = 'NEW'
        })

        if (doneCount >= 3) {
            callback(null, allFiles)
        }
    })
}

function getChangeArray(callback) {
    getAllChanges(function(error, files) {
        if (error) {
            callback(error)
            return false
        }

        var fileObject = {}

        for (var key in files) {
            if (files.hasOwnProperty(key)) {
                if (!fileObject[files[key]]) {
                    fileObject[files[key]] = []
                }

                fileObject[files[key]].push(key)
            }
        }

        callback(null, fileObject)
    });
}


class Root extends React.Component {
    constructor(props) {
        //...and props is sent back to the parent Component
        //class using super()
        super(props);
        // Initial State of the component is defined
        // in the constructor also
        this.state = {
            changed: [],
            deleted: [],
            new: []
        }
    }

    componentDidMount() {
        var thisObject = this;

        getChangeArray(function(error, files) {
            if (error) {
                return false
            }

            console.log('got')

            thisObject.setState({
                changed: files.CHANGED,
                deleted: files.DELETED,
                new: files.NEW
            })
        })
    }

    // render method is most important
    // render method returns JSX template
    render() {
        console.log('render', this.state);
        var count = 0;

        return (
            <div>
                <h2>New</h2>
                <ul>
                    {
                        this.state.new.map(function(file) {
                            count++;

                            return (
                                <li key={count}>{file}</li>
                            )
                        })
                    }
                </ul>

                <h2>Changes</h2>
                <ul>
                    {
                        this.state.changed.map(function(file) {
                            count++;

                            return (
                                <li key={count}>{file}</li>
                            )
                        })
                    }
                </ul>

                <h2>Deleted</h2>
                <ul>
                    {
                        this.state.deleted.map(function(file) {
                            count++;

                            return (
                                <li key={count}>{file}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( < Root / > ,
    document.getElementById('app')
)