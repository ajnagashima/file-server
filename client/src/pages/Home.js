import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
 render() {
  return (
    <div className="App">
      <h1>Welcome to the UpDown Zone</h1>
      <h2>*New name coming soon I promise*</h2>
      <Link to={'./download'}>
        <button>
          Download
        </button>
      </Link>
      <Link to={'.upload'}>
        <button>
          Upload
        </button>
      </Link>
    </div>
  );
 }
}
