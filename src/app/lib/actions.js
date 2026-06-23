import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const createUser =async(formData)=>{
    'use server'
    const newUser=Object.fromEntries(formData.entries())
    console.log('new user data,',newUser)
    const res =await fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(newUser)

    })
    const data =await res.json()
    console.log("data after post ",data)
    // totdo revalidate the path 
    if(data.insertedId){
        revalidatePath('/users')
    }

    return data;
}

// Update
export const updateUser =async(userid,formData)=>{
    'use server'
    const  updatedUser=Object.fromEntries(formData.entries())
    const res=await fetch (`http://localhost:5000/users/${userid}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
         body:JSON.stringify(updatedUser)

    })
    const data =await res.json()
    console.log('After update',data )
    // todo
    if(data.modifiedCount > 0){
        revalidatePath('/users')
        redirect ('/users')
    }
}

export const deleteUser =async(userid)=>{
    'use server'
    const res=await fetch(`http://localhost:5000/users/${userid}`,{
        method:'DELETE'
    });
    const data=await res.json()
    // todo : revalide catch 
    if(data.deletedCount>0){
        revalidatePath ('/users')
    }

    return data;

}