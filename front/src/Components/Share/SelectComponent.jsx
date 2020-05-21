import React from 'react'
import { ShareProvider } from './ShareContext'
import AddShare from './AddShare'
import SelectShare from './SelectShare'
import Navigation from './Navigation'

const SelectProvider = () => {
  return (
    <div>
      <ShareProvider>
        <div className="shared">
          <AddShare />
          <SelectShare />
          <Navigation />
        </div>
      </ShareProvider>
    </div>
    )
}

export default SelectProvider