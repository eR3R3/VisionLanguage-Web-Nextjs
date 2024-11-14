'use client'

import Image from "next/image";
import {UserButton} from "@clerk/nextjs";
import SideBar from "@/components/shared/SideBar";
import {createUser} from "@/lib/actions/user.actions";
import {connectToDatabase} from "@/lib/database/mongoose";


const Home = () => {
    const handleClick = () =>{
        console.log(process.env.NEXT_PUBLIC_MONGODB_URL)
        console.log(process.env.WEBHOOK_SECRET)
    }

    const handleCreateUser = () => {

    }
  return (
    <div>
      <p>Home</p>
      <UserButton/>
        <button onClick={connectToDatabase}>connect</button>
        <button onClick={handleClick}>PrintMongodbUrl</button>
    </div>
  );
}
export default Home;