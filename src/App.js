import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/layout/Search';

function App() {

  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);

  fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response => response.json())
  .then(json=>setJobs([...json]));

  const rows = () => jobs.map(job => {
  return <p><input type="checkbox"/>{job.tyotehtava}, {job.osoite},<a href={job.linkki}> Lisätietoa</a></p>
  })
  return (
    <div>
    <div>
      <Header />
      </div>
      <div className="App">
      <Search />
      {rows()}
    </div>
    </div>
  );
}

export default App;
