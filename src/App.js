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

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="App">
        <Search />
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
}

export default App;
