import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/layout/Search';
import Jobs from './components/Jobs';

function App() {

  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);

  useEffect(() => {
    fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
      .then(response => response.json())
      .then(json => setJobs([...json]));
  }, []);

  const rows = () => jobs.map(job => {
    return <p><input type="checkbox" />{job.tyotehtava}, {job.osoite},<a href={job.linkki}> Lisätietoa</a></p>
  })
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="App">
        <Search />
        <Jobs />
        {rows()}
      </div>
    </div>
  );
}

export default App;
