import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

  const USERS = [
    {
      id: 1,
      name: 'oscar',
      image: 'https://avatars1.githubusercontent.com/u/27979274?s=460&v=4',
      places: 5
    }
  ]

  return <UsersList items={USERS}/>
}

export default Users