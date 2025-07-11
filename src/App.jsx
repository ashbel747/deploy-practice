import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Tailwind + React</h1>
      </section>
    </div>
  );
}

export default App;
