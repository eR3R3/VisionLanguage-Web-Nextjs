'use client'

import Image from "next/image";
import {UserButton} from "@clerk/nextjs";
import SideBar from "@/components/shared/SideBar";
import {createUser} from "@/lib/actions/user.actions";
import {connectToDatabase} from "@/lib/database/mongoose";


const Home = () => {
    // const handleClick = () =>{
    //     console.log(process.env.NEXT_PUBLIC_MONGODB_URL)
    //     console.log(process.env.WEBHOOK_SECRET)
    // }
    //
    // const handleCreateUser = () => {
    //     createUser({
    //         clerkId: '5',
    //         email: 'lucastao@gmail.com',
    //         username: "Lucas Tao",
    //         firstName: "Lucas",
    //         lastName: 'Tao',
    //         photo: '07, 06'
    //     })
    // }
  return (
    <div>
      <p>Home</p>
      <UserButton/>
    </div>
  );
}
export default Home;









