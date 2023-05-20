import React, { useState, useEffect } from 'react'

import { DisplayPitches } from '../components';
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pitches, setPitches] = useState([]);

  const { address, contract, getUserPitches } = useStateContext();

  const fetchPitches = async () => {
    setIsLoading(true);
    const data = await getUserPitches();
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

export default Profile