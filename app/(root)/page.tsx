import Image from "next/image";
import {UserButton} from "@clerk/nextjs";
import SideBar from "@/components/shared/SideBar";
import {createUser} from "@/lib/actions/user.actions";


const Home = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton/>
    </div>
  );
}
export default Home;