import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {setuser}  from '../Redux/Slice/States/Userslice'
import {useGetPostsQuery,useAddPostsMutation} from '../Redux/Slice/Apis/PostApi'

const User = () => {
  const{data:posts}=useGetPostsQuery();
  console.log(posts);
  const [addposts]=useAddPostsMutation();
   const addinfo={
    "userId": 201,
    "id": 102,
    "title": "sunt aut facere vident occaecati excepturi optio reprehenderit",
    "body": "quia et susci recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
  const handleaddposts = async () => {
    const addinfo = {
      userId: 201,
      title: "example title",
      body: "example body content"
    };
  
    try {
      const response = await addposts(addinfo).unwrap();
      console.log("Post added:", response);
    } catch (err) {
      console.error("Error adding post:", err);
    }
  };
 
    const user=useSelector((state)=>state.user.user);
    const dispatch=useDispatch();
    console.log(user);
    console.log(10);

    const[data,setdata]=useState({
        name:"",
        email:"",
        password:""
    });
    const handlechage=(e)=>{
        const{name,value}=e.target;
        setdata({...data,[name]:value});
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        // console.log(data);
        dispatch(setuser(data))
    }

  return (
    <div>
      <h1>User Form</h1>
      <button onClick={handleaddposts}>AddPost</button>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='name'  name='name' value={data.name} onChange={handlechage}/>
        <input type="email" placeholder='Email' name='email' value={data.email} onChange={handlechage} />
        <input type="password" placeholder='passkey' name='password' value={data.password} onChange={handlechage}/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default User
