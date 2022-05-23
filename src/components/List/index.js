import React, { useState, useEffect } from 'react';
import CardDetails from '../CardDetails';
import SearchBar from '../SearchBar';
import Spinner from '../Spinner';

function List() {
  const [launches, setLaunches] = useState([]);
  const [loader, isLoading] = useState(true);

  useEffect(() => {
  fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(
      (result) => {
        setLaunches(result);
        isLoading(false)
      },
    )
}, [])

  return (
    <div>
      <SearchBar />
      { loader ? <Spinner /> : '' }
      {launches.map(launch => (
        <CardDetails launch={launch} />
      ))}
    </div>
  );
}

export default List