import React from 'react'
import { getUsers } from '../lib/data'
import UsersTable from '../components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

export default async function UsersPage() {
    const users= await getUsers();
  return (
    <div>
        <div className='flex justify-between'>
          <h3>Users Management: {users.length}</h3>
          <AddUserModal createUserAction ={createUser}/>
        </div>
        {/* <h1> user {users.name}</h1> */}
        <UsersTable users={users} deleteUserAction={deleteUser}/>
    </div>
  )
}
