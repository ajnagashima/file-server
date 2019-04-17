import React, { Component } from 'react';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  componentDidMount() {
    this.getFiles();
  }

  getFiles() {
    fetch('/api/download/getFiles')
    .then(res => res.json())
    .then(files => this.setState({ files }))
  }

  render() {
    const { files } = this.state
    return (
      <div className="App">
        <h1>Available Files</h1>
        {/* Display the list of available files */}
        {files.length ? (
          <div>
            {files.map((item) => {
              return (
                <div>
                  {file}
                  {/* Need to include the link to download the file in future updates */}
                <div>
              )
            })}
          </div>
        ) : (
          <div>
            <h2>No Files Found<h2>
          </div>
        )}
        {/* Add a refresh button */}
      </div>
    )
  }
}
