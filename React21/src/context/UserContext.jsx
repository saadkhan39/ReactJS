import React, { createContext } from 'react'

export  const userDataContext =createContext()
const user ="saad"

const UserContext = (props) => {
  return (
    <div>
      <userDataContext.Provider value={user}>
        {props.children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext