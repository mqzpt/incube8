import React, { useState, useEffect } from 'react'

import { DisplayPitches } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pitches, setPitches] = useState([]);

  const { address, contract, getInvestors } = useStateContext();

  const fetchPitches = async () => {
    setIsLoading(true);
    const data = await getInvestors();
    setPitches(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchPitches();
  }, [address, contract]);

  return (
    <DisplayPitches 
      title="All Pitches"
      isLoading={isLoading}
      pitches={pitches}
    />
  )
}

export default Home