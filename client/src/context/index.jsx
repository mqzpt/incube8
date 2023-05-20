import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xA4Ed459a7b6Fc0c42c07f369228bf7E22D19d730');
  const { mutateAsync: createPitch } = useContractWrite(contract, 'createPitch');

  const address = useAddress();
  const connect = useMetamask();

  const publishPitch = async (form) => {
    try {
      const data = await createPitch([
        address, // owner
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image
      ])

      console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

  const getInvestors = async () => {
    const pitches = await contract.call('getInvestors');

    const parsedCampaings = pitches.map((pitch, i) => ({
      owner: pitch.owner,
      title: pitch.title,
      description: pitch.description,
      target: ethers.utils.formatEther(pitch.target.toString()),
      deadline: pitch.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(pitch.amountCollected.toString()),
      image: pitch.image,
      pId: i
    }));

    return parsedCampaings;
  }

  const getUserPitches = async () => {
    const allPitches = await getInvestors();

    const filteredPitches = allPitches.filter((pitch) => pitch.owner === address);

    return filteredPitches;
  }

  const donate = async (pId, amount) => {
    const data = await contract.call('invest', pId, { value: ethers.utils.parseEther(amount)});

    return data;
  }

  const getinvestments = async (pId) => {
    const investments = await contract.call('getinvestors', pId);
    const numberOfinvestments = investments[0].length;

    const parsedinvestments = [];

    for(let i = 0; i < numberOfinvestments; i++) {
      parsedinvestments.push({
        donator: investments[0][i],
        donation: ethers.utils.formatEther(investments[1][i].toString())
      })
    }

    return parsedinvestments;
  }


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        createPitch: publishPitch,
        getInvestors,
        getUserPitches,
        donate,
        getinvestments
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);