import React from 'react';
import { useNavigate } from 'react-router-dom';

import FundCard from './FundCard';
import { loader } from '../assets';

const DisplayPitches = ({ title, isLoading, pitches }) => {
  const navigate = useNavigate();

  const handleNavigate = (pitch) => {
    navigate(`/pitch-details/${pitch.title}`, { state: pitch })
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({pitches.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && pitches.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any pitches yet
          </p>
        )}

        {!isLoading && pitches.length > 0 && pitches.map((pitch) => <FundCard 
          key={pitch.id}
          {...pitch}
          handleClick={() => handleNavigate(pitch)}
        />)}
      </div>
    </div>
  )
}

export default DisplayPitches