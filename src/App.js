import React, { useState } from 'react';
import './App.css';
import './components/layout/Header';
import Header from './components/layout/Header';

function App() {

  const initJobs = [
    {
      "id": 1,
      "tyotehtava": "Lastenhoitaja"
    },
    {
      "id": 2,
      "tyotehtava": "Siivooja"
    },
    {
      "id": 3,
      "tyotehtava": "Sairaanhoitaja"
    }

  ]
  const [jobs, setJobs] = useState(initJobs);

  const rows = () => jobs.map(job => {
    return <p>{job.tyotehtava}</p>
  })
  return (
    <div className="App">
      <Header />
      {rows()}
    </div>
  );
}

export default App;
