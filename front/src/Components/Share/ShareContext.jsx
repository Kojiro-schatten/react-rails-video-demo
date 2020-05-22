import React, {useState, createContext} from 'react'

export const ShareContext = createContext();

export const ShareProvider = props => {
  const [shares, setShares] = useState([
    {
      link: 'https://youtu.be/dpw9EHDh2bM',
      text: 'AMAZING!',
      id: 1
    },{
      link: 'https://youtu.be/UxoX2faIgDQ',
      text: 'This is what I want!',
      id: 2
    },
    {
      link: 'https://youtu.be/tbb3UEg8Dl8',
      text: 'Awesome Movie! Thought this is other "react"! ',
      id: 3
    }
  ])
  return (
    <ShareContext.Provider value={[shares, setShares]}>
      {props.children}
    </ShareContext.Provider>
  );
}