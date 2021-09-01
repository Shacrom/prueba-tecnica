import React, { useState } from 'react'
import { GridCards } from './components/GridCards'
import { SearchUser } from './components/SearchUser'

export const App = () => {

  const [userId, setUserId] = useState('');

  return (
    <div>
      <SearchUser setUserId={setUserId} />
      <hr />
      <GridCards userId={userId} />
    </div>
  )
}
