import { getUserById } from '@/app/lib/data';
import React from 'react';

import { Button, Input, Label, TextField } from "@heroui/react";
import { updateUser } from '@/app/lib/actions';

export default async function UserEditPage({ params }) {
  const { userid } = await params;
  const user = await getUserById(userid);
  const  updateUserWrapper=async(FormData)=>{
    'use server'
    return updateUser (userid,FormData);
  }

  return (
    <div>
      <h2>Editing user : {user.name}</h2>

      <div className="w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">

          <TextField
            className="w-full"
            name="name"
            type="text"
            variant="secondary"
            defaultValue={user?.name}
          >
            <Label>Name</Label>
            <Input placeholder='Enter Your name' />
          </TextField>

          <TextField
            className="w-full"
            name="email"
            type="email"
            variant="secondary"
            defaultValue={user?.email}
          >
            <Label>Email</Label>
            <Input placeholder='Enter Email'  />
          </TextField>

          <TextField
            className="w-full"
            name="role"
            type="text"
            variant="secondary"
            defaultValue={user?.role}
          >
            <Label>Role</Label>
            <Input placeholder='Enter Role ' />
          </TextField>

          <div className="flex gap-4">
            <Button variant="secondary">
              Cancel
            </Button>

            <Button type="submit">
              Update User
            </Button>
          </div>

        </form>
      </div>

    </div>
  );
}