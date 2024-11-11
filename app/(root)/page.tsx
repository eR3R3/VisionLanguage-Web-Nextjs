import Image from "next/image";
import {UserButton} from "@clerk/nextjs";
import SideBar from "@/components/shared/SideBar";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton/>
    </div>
  );
}
export default Home;