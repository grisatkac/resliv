import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Header';

function App(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
    
  );
}

export default App;
