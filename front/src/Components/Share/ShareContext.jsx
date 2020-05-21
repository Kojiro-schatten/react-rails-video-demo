import React, {useState, createContext} from 'react'

export const ShareContext = createContext();

export const ShareProvider = props => {
  const [shares, setShares] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1
    },{
      name: 'Game of Thrones',
      price: '$120',
      id: 2
    },
    {
      name: 'HInception',
      price: '$130',
      id: 3
    }
  ])
  return (
    <ShareContext.Provider value={[shares, setShares]}>
      {props.children}
    </ShareContext.Provider>
  );
}