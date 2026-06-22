import { getUserById } from '@/app/lib/data';
import {Button, Card, CloseButton} from "@heroui/react";
import React from 'react'

export default async function UserDetailPage({params}) {
    const {userid}=await params;
    const user= await getUserById(userid);
    console.log(user)
  return (
     <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <img
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{user.name}</Card.Title>
          <Card.Description>
           {user.email}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
       
      </div>
    </Card>
  )
}

