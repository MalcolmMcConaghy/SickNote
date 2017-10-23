import React, { Component } from 'react';
import InputForm from './components/form.js';
import './css/App.css';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <header>
                <h1>SickNote</h1>
                <div className="subtitle">
                  For when you're too sick to even email
                </div>
              </header>
              <main>
                <InputForm />
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
