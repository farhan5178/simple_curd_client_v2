'use client'
import { AlertDialog, Button, Table } from '@heroui/react'
import Link from 'next/link'
import React from 'react'


export default function UsersTable({users,deleteUserAction}) {

  const handleDelete =async(userid)=>{
    await deleteUserAction(userid)
  
    
  }
  return (
     <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>City</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {
                users.map(user=>
                     <Table.Row key={user._id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.city}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Link href={`/users/${user._id}`}>
                <Button variant='outline'>Details</Button></Link>
                <Link href={`/users/${user._id}`}>
                    <Button variant='outline'>edit</Button>
                </Link>
   <AlertDialog>
  <AlertDialog.Trigger>
    <Button variant="danger">Delete</Button>
  </AlertDialog.Trigger>

  <AlertDialog.Backdrop>
    <AlertDialog.Container>
      <AlertDialog.Dialog>
        <AlertDialog.Header>
          <AlertDialog.Heading>
            Delete User permanently?
          </AlertDialog.Heading>
        </AlertDialog.Header>

        <AlertDialog.Body>
          This will permanently delete {user.name}.
        </AlertDialog.Body>

        <AlertDialog.Footer>
          <Button slot="close">Cancel</Button>

          <Button
            slot="close"
            variant="danger"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Dialog>
    </AlertDialog.Container>
  </AlertDialog.Backdrop>
</AlertDialog>

              </Table.Cell>
            </Table.Row>
                )
            }
           
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  )
}
