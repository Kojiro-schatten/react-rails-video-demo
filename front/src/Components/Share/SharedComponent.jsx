import React from 'react'
import { ShareProvider } from './ShareContext'
import SelectShare from './SelectShare'
import Navigation from './Navigation'
import AddShare from './AddShare'

const SharedComponent = () => {
  return (
    <div>
      <ShareProvider>
        <div className="shared">
          <Navigation />
          <SelectShare />
        </div>
      </ShareProvider>
    </div>
  )
}

export default SharedComponent