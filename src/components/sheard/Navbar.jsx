"use client";
import Link from "next/link";
import image1 from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  

  return (
    <div className="flex justify-between items-center mt-5">
      <div></div>
      <ul className="flex justify-between gap-4 text-gray-400">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-end items-center gap-4">
        <Image src={user?.image||image1} height={40} width={40} alt="logo"></Image>
        <button className="btn bg-black text-white">
          <Link href={"/login"}>Login</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
