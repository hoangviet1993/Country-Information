import { 
  MuiThemeProvider,
} from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import * as themes from './themes';

function App() {
  const [ themeMode, setThemeMode ] = useState(themes.darkTheme);
  return (
    <MuiThemeProvider theme={themeMode}>
       <Navbar
          currentThemeMode={themeMode}
          setThemeMode={setThemeMode}
        />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
