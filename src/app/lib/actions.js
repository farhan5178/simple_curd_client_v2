import { revalidatePath } from "next/cache";
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