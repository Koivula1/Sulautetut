import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/layout/Search';

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

  fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response => response.json())
  .then(json=>setJobs([...json]));

  const rows = () => jobs.map(job => {
    return <p>{job.tyotehtava}</p>
  })
  return (
    <div className="App">
      <Header />
      <Search />
      {rows()}
    </div>
  );
}

export default App;
