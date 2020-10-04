import React from 'react';
import './app.css';
import Assignment from './components/assignment';
import Assignments from './components/assignments';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Assignments />;
    </>
  );
}

export default App;
