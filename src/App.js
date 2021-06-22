import React from 'react';
import About from './components/About'
import Gallery from './components/Gallery'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
