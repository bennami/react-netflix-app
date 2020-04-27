import React, { useState, useEffect } from 'react';
import fetchData from './DataCall'
import Home from '../view/Home'
import Search from './Search'
import './App.css';

function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchData("movie/now_playing")
        .then(data => {setInfo(data)})
  }, []);

  console.log(info);

  if (info === null || !info.status) {
    return null;
  }


  return (
    <div>
      <Search />
      <Home movies={info.data.results}/>
    </div>
  );
}

export default App;
